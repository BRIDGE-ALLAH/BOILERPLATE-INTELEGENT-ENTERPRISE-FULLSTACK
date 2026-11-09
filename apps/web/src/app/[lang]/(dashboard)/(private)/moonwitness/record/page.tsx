// MoonWitness Record — Incident timeline & evidence bundle for a single stack

'use client'

import { useEffect, useState } from 'react'
import type { SystemMode } from '@core/types'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { brandProduct } from '@repo/brand'

// MUI Imports
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import LinearProgress from '@mui/material/LinearProgress'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Copy from '@mui/material/Copy'

// Tabler Icons
import { MoonStars, ChevronLeft, Download, FileText, ExternalLink, Copy as CopyIcon, RefreshCw } from '@tabler/icons-react'

// Types from controller API
type Port = {
  privatePort: number
  publicPort?: number
  protocol: string
  ip?: string
  publishMode?: string
}

type DockerSummary = {
  connected: boolean
  name?: string
  serverVersion?: string
  apiVersion?: string
  os?: string
  architecture?: string
  cpus: number
  memoryBytes: number
  swarm: {
    active: boolean
    manager: boolean
    nodeId?: string
    nodeAddr?: string
    state?: string
  }
}

type Overview = {
  services: number
  servicesRunning: number
  servicesDegraded: number
  containers: number
  containersRunning: number
  containersStopped: number
  containersRestarting: number
  containersUnhealthy: number
  cpuPercent: number
  memoryUsedBytes: number
  memoryLimitBytes: number
  memoryPercent: number
  criticalAlerts: number
  warnings: number
}

type Service = {
  id: string
  name: string
  image: string
  mode: string
  state: string
  desiredReplicas: number
  runningReplicas: number
  failedTasks: number
  cpuPercent: number
  memoryUsedBytes: number
  createdAt: string
  updatedAt: string
  ports: Port[]
  stack: string
}

type Container = {
  id: string
  name: string
  image: string
  state: string
  status: string
  health: string
  oomKilled: boolean
  exitCode: number
  restartCount: number
  createdAt: string
  startedAt?: string
  finishedAt?: string
  uptimeSeconds: number
  cpuPercent: number
  memoryUsedBytes: number
  memoryLimitBytes: number
  memoryPercent: number
  networkRxBytes: number
  networkTxBytes: number
  ports: Port[]
  serviceId?: string
  serviceName?: string
  taskSlot?: number
  nodeId?: string
  composeProject?: string
  composeService?: string
  composeOneOff?: boolean
  stack: string
  metricsAvailable: boolean
  error?: string
}

type Event = {
  id: string
  at: string
  type: 'condition' | 'change'
  code: string
  state: string
  severity: string
  resourceId?: string
  resourceKind: 'container' | 'service' | 'daemon'
  name?: string
  stack: string
  message: string
}

type Bundle = {
  stack: string
  generated: string
  summary: Overview
  docker: DockerSummary
  containers: Container[]
  services: Service[]
  events: Event[]
}

const BASE = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080').replace(/\/$/, '')

function formatBytes(bytes: number): string {
  if (bytes <= 0) return '0 B'
  const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB']
  const exp = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  const amount = bytes / 1024 ** exp
  return `${amount.toFixed(amount >= 10 || exp === 0 ? 0 : 1)} ${units[exp]}`
}

function formatPercent(value: number): string {
  return Number.isFinite(value) ? `${value.toFixed(1)}%` : '—'
}

function formatUptime(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds))
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ${s % 60}s`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ${m % 60}m`
  const d = Math.floor(h / 24)
  return `${d}d ${h % 24}h`
}

function relativeTime(iso: string): string {
  const date = new Date(iso)
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  if (!Number.isFinite(seconds) || seconds < 1) return 'just now'
  if (seconds < 60) return `${seconds}s ago`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

function stateColor(state: string): { bg: string; color: string } {
  const s = state.toLowerCase()
  if (s === 'running' || s === 'healthy') return { bg: '#c9f36b22', color: '#c9f36b' }
  if (s === 'degraded' || s === 'restarting' || s === 'starting') return { bg: '#ffc66d22', color: '#ffc66d' }
  if (s === 'unhealthy' || s === 'dead' || s === 'exited' || s === 'failed' || s === 'offline') return { bg: '#ff7b7222', color: '#ff7b72' }
  return { bg: '#8fd8ff22', color: '#8fd8ff' }
}

function severityColor(sev: string): { bg: string; color: string } {
  if (sev === 'critical') return { bg: '#ff7b7222', color: '#ff7b72' }
  if (sev === 'warning') return { bg: '#ffc66d22', color: '#ffc66d' }
  return { bg: '#8fd8ff22', color: '#8fd8ff' }
}

export default function RecordPage({ mode }: { mode: SystemMode }) {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const stack = (params.stack as string) || ''
  const format = searchParams.get('format')
  const [bundle, setBundle] = useState<Bundle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [snackOpen, setSnackOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const { mode: muiMode } = useColorScheme()
  const isAboveMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const _mode = (muiMode === 'system' ? mode : muiMode) || mode

  useEffect(() => {
    if (!stack) return
    let mounted = true
    async function load() {
      try {
        setLoading(true)
        const url = `${BASE}/api/v1/stacks/${encodeURIComponent(stack)}/bundle${format === 'markdown' ? '?format=markdown' : ''}`
        const res = await fetch(url, {
          cache: 'no-store',
          headers: { Accept: format === 'markdown' ? 'text/markdown' : 'application/json' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        if (format === 'markdown') {
          const markdown = await res.text()
          if (mounted) {
            setBundle({ stack, generated: new Date().toISOString(), summary: {} as Overview, docker: {} as DockerSummary, containers: [], services: [], events: [] } as Bundle)
            // We just show markdown in a simple view
            document.open()
            document.write(`<pre style="font-family:monospace;white-space:pre-wrap;padding:2rem;background:#090b0d;color:#f1f0ea;">${markdown.replace(/</g, '<').replace(/>/g, '>')}</pre>`)
            document.close()
            return
          }
        } else {
          const data = await res.json()
          if (mounted) setBundle(data)
        }
      } catch (e: any) {
        if (mounted) {
          setError(e.message)
          setSnackOpen(true)
        }
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [stack, format])

  const handleDownload = async (fmt: 'json' | 'markdown') => {
    try {
      const url = `${BASE}/api/v1/stacks/${encodeURIComponent(stack)}/bundle?format=${fmt}`
      const res = await fetch(url, { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const blob = await res.blob()
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `${brandProduct.downloadPrefix}-${stack}-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.${fmt === 'json' ? 'json' : 'md'}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (e: any) {
      setError(e.message)
      setSnackOpen(true)
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text.slice(0, 50))
    setTimeout(() => setCopied(null), 2000)
  }

  if (format === 'markdown' && !loading) {
    return null // handled in effect
  }

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <LinearProgress sx={{ mb: 3 }} />
        <Typography color="text.secondary" variant="body1" align="center">
          Loading evidence bundle for <strong>{stack}</strong>...
        </Typography>
      </Container>
    )
  }

  if (!bundle && error) {
    return (
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          Failed to load evidence bundle: {error}
        </Alert>
        <Button variant="contained" onClick={() => router.push(`/${locale}/${brandProduct.slug}/${brandProduct.pages.observatory}`)}>
          Back to {brandProduct.labels.observatory}
        </Button>
      </Container>
    )
  }

  if (!bundle) return null

  const { generated, summary, docker, containers, services, events } = bundle

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
        <Alert severity="error" onClose={() => setSnackOpen(false)} sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Back to Observatory">
            <IconButton variant="ghost" size="small" onClick={() => router.push(`/${locale}/${brandProduct.slug}/${brandProduct.pages.observatory}`)} sx={{ mr: 1 }}>
              <ChevronLeft sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
          <Box>
            <Typography variant="h4" gutterBottom component="h1" sx={{ fontWeight: 420, letterSpacing: '-0.055em' }}>
              <MoonStars sx={{ mr: 1, fontSize: 30, verticalAlign: 'middle', color: _mode === 'dark' ? '#c9f36b' : '#6b8f3e' }} />
              {brandProduct.labels.module} {brandProduct.labels.record}
            </Typography>
            <Typography color="text.secondary" variant="body1">
              Evidence bundle for <strong>{stack}</strong>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Tooltip title="Copy JSON to clipboard">
            <Button variant="outlined" startIcon={<CopyIcon fontSize="small" />} onClick={() => handleCopy(JSON.stringify(bundle, null, 2))} disabled={copied !== null}>
              {copied ? 'Copied!' : 'Copy JSON'}
            </Button>
          </Tooltip>
          <Tooltip title="Download JSON">
            <Button variant="outlined" startIcon={<Download fontSize="small" />} onClick={() => handleDownload('json')}>
              Download JSON
            </Button>
          </Tooltip>
          <Tooltip title="Download Markdown">
            <Button variant="outlined" startIcon={<FileText fontSize="small" />} onClick={() => handleDownload('markdown')}>
              Download MD
            </Button>
          </Tooltip>
          <Tooltip title="Open in new tab">
            <Button variant="outlined" startIcon={<ExternalLink fontSize="small" />} href={`/moonwitness/record/${encodeURIComponent(stack)}?format=markdown`} target="_blank">
              View Markdown
            </Button>
          </Tooltip>
        </Box>
      </Box>

      {/* Meta bar */}
      <Card variant="outlined" sx={{ mb: 3, borderRadius: 3 }}>
        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 320px', minWidth: 280 }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              Generated
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 560 }}>
              {relativeTime(generated)}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 10 }}>
              {new Date(generated).toISOString()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>Containers</Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>{containers?.length ?? 0}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>Services</Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>{services?.length ?? 0}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>Events</Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>{events?.length ?? 0}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>Attention</Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: (summary?.criticalAlerts || 0) + (summary?.warnings || 0) > 0 ? '#ff7b72' : '#c9f36b' }}>
                {(summary?.criticalAlerts || 0) + (summary?.warnings || 0)} alert{(summary?.criticalAlerts || 0) + (summary?.warnings || 0) === 1 ? '' : 's'}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          <Tabs value={0} onChange={() => {}} variant="fullWidth" sx={{ mb: 3, minWidth: 300 }}>
            <Tab label={`Events ${events?.length ? `(${events.length})` : ''}`} />
            <Tab label={`Containers ${containers?.length ? `(${containers.length})` : ''}`} />
            <Tab label={`Services ${services?.length ? `(${services.length})` : ''}`} />
          </Tabs>

          {/* Events Timeline */}
          <Box>
            {events && events.length > 0 ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {events.map((event, idx) => (
                  <EventItem key={idx} event={event} index={idx} />
                ))}
              </Box>
            ) : (
              <EmptyState title="No events recorded" description="This stack has no incident timeline yet. Events will appear here as conditions are raised and resolved." />
            )}
          </Box>

          {/* Containers */}
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            Containers {containers?.length ? `(${containers.length})` : ''}
          </Typography>
          {containers && containers.length > 0 ? (
            <ContainersList containers={containers} />
          ) : (
            <EmptyState title="No containers" description="No containers belong to this stack." />
          )}

          {/* Services */}
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            Services {services?.length ? `(${services.length})` : ''}
          </Typography>
          {services && services.length > 0 ? (
            <ServicesList services={services} />
          ) : (
            <EmptyState title="No services" description="No Swarm services belong to this stack." />
          )}
        </CardContent>
      </Card>

      {/* Footer */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        MoonWitness doesn't guess what broke. It shows what happened.
      </Typography>
    </Container>
  )
}

function EventItem({ event, index }: { event: Event; index: number }) {
  const sev = severityColor(event.severity)
  const isCondition = event.type === 'condition'
  const icon = isCondition ? (event.severity === 'critical' ? '●' : event.severity === 'warning' ? '◐' : '○') : '↻'
  return (
    <Card variant="outlined" sx={{ borderLeft: `4px solid ${sev.color}` }}>
      <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', py: 1.5 }}>
        <Box sx={{ width: 32, textAlign: 'center', flexShrink: 0, fontSize: 16, color: sev.color }}>
          {icon}
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
            <Chip
              label={event.severity.toUpperCase()}
              size="small"
              variant="outlined"
              sx={{ borderColor: sev.color, color: sev.color, backgroundColor: sev.bg, fontFamily: 'monospace', fontSize: 8, textTransform: 'uppercase' }}
            />
            <Chip
              label={event.type.toUpperCase()}
              size="small"
              variant="outlined"
              sx={{ borderColor: '#8fd8ff88', color: '#8fd8ff', backgroundColor: '#8fd8ff22', fontFamily: 'monospace', fontSize: 8, textTransform: 'uppercase' }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 10, flex: 1 }}>
              {relativeTime(event.at)}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 10 }}>
              {event.resourceKind}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ lineHeight: 1.5, mb: 0.5 }}>
            <strong>{event.name || event.resourceId?.slice(0, 12) || 'Unknown'}</strong> {event.message}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {event.code} {event.stack && `· stack: ${event.stack}`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

function ContainersList({ containers }: { containers: Container[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {containers.map((container) => (
        <ContainerAccordion key={container.id} container={container} />
      ))}
    </Box>
  )
}

function ContainerAccordion({ container }: { container: Container }) {
  const colors = stateColor(container.state)
  return (
    <Accordion sx={{ border: '1px solid', borderColor: 'var(--line)', '&:before': { display: 'none' } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2, py: 1, minHeight: 48 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: container.state === 'running' ? '#c9f36b' : container.health === 'unhealthy' ? '#ff7b72' : '#5e6670' }} />
            <Typography variant="body2" sx={{ fontWeight: 550, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {container.name || container.id.slice(0, 12)}
            </Typography>
          </Box>
          <Chip
            label={container.state}
            size="small"
            variant="outlined"
            sx={{ borderColor: colors.color, color: colors.color, backgroundColor: colors.bg, fontFamily: 'monospace', fontSize: 8, textTransform: 'uppercase' }}
          />
          <Box sx={{ display: 'flex', gap: 2, ml: 'auto', flexWrap: 'wrap' }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 9 }}>
              {container.metricsAvailable ? formatPercent(container.cpuPercent) : '—'} CPU
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 9 }}>
              {container.metricsAvailable ? formatBytes(container.memoryUsedBytes) : '—'} RAM
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 9 }}>
              {container.restartCount ?? 0} restarts
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 9 }}>
              {formatUptime(container.uptimeSeconds ?? 0)}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, pb: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
          <DetailRow label="Image" value={container.image || '—'} />
          <DetailRow label="State" value={container.state} />
          <DetailRow label="Health" value={container.health} />
          <DetailRow label="Exit Code" value={String(container.exitCode)} />
          <DetailRow label="OOM Killed" value={container.oomKilled ? 'Yes' : 'No'} />
          <DetailRow label="Restarts" value={String(container.restartCount ?? 0)} />
          <DetailRow label="Created" value={relativeTime(container.createdAt)} />
          <DetailRow label="Started" value={container.startedAt ? relativeTime(container.startedAt) : '—'} />
          <DetailRow label="Uptime" value={formatUptime(container.uptimeSeconds ?? 0)} />
          <DetailRow label="CPU" value={container.metricsAvailable ? formatPercent(container.cpuPercent) : '—'} />
          <DetailRow label="Memory" value={container.metricsAvailable ? `${formatBytes(container.memoryUsedBytes)} / ${formatBytes(container.memoryLimitBytes)} (${formatPercent(container.memoryPercent)})` : '—'} />
          <DetailRow label="Network RX/TX" value={container.metricsAvailable ? `${formatBytes(container.networkRxBytes)} / ${formatBytes(container.networkTxBytes)}` : '—'} />
          <DetailRow label="Ports" value={container.ports?.map((p, i) => (p.publicPort ? `${p.publicPort}:${p.privatePort}/${p.protocol}` : `${p.privatePort}/${p.protocol}`)).join(', ') || '—'} />
          <DetailRow label="Compose" value={container.composeProject ? `${container.composeProject} · ${container.composeService || '—'}` : container.serviceName ? `${container.serviceName} · slot ${container.taskSlot || '—'}` : '—'} />
          {container.error && <DetailRow label="Error" value={container.error} />}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

function ServicesList({ services }: { services: Service[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {services.map((service) => (
        <ServiceAccordion key={service.id} service={service} />
      ))}
    </Box>
  )
}

function ServiceAccordion({ service }: { service: Service }) {
  const colors = stateColor(service.state)
  return (
    <Accordion sx={{ border: '1px solid', borderColor: 'var(--line)', '&:before': { display: 'none' } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2, py: 1, minHeight: 48 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
            <Typography variant="body2" sx={{ fontWeight: 580 }}>{service.runningReplicas ?? '—'}</Typography>
            <Typography variant="caption" color="text.secondary"> / </Typography>
            <Typography variant="caption" color="text.secondary">{service.desiredReplicas ?? '—'}</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 580, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', ml: 1 }}>
            {service.name}
          </Typography>
          <Chip
            label={service.state}
            size="small"
            variant="outlined"
            sx={{ borderColor: colors.color, color: colors.color, backgroundColor: colors.bg, fontFamily: 'monospace', fontSize: 8, textTransform: 'uppercase', ml: 'auto' }}
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, pb: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
          <DetailRow label="Image" value={service.image || '—'} />
          <DetailRow label="Mode" value={service.mode} />
          <DetailRow label="State" value={service.state} />
          <DetailRow label="Replicas" value={`${service.runningReplicas ?? 0}/${service.desiredReplicas ?? 0}`} />
          <DetailRow label="CPU" value={service.cpuPercent.toFixed(1) + '%'} />
          <DetailRow label="Memory" value={formatBytes(service.memoryUsedBytes)} />
          <DetailRow label="Ports" value={service.ports?.map((p, i) => (p.publicPort ? `${p.publicPort}:${p.privatePort}/${p.protocol}` : `${p.privatePort}/${p.protocol}`)).join(', ') || '—'} />
          <DetailRow label="Created" value={relativeTime(service.createdAt)} />
          <DetailRow label="Updated" value={relativeTime(service.updatedAt)} />
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: 8, textTransform: 'uppercase' }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: 11 }}>
        {value}
      </Typography>
    </Box>
  )
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Box sx={{ display: 'grid', minHeight: 200, placeItems: 'center', alignContent: 'center', gap: 1, border: '1px dashed', borderColor: '#30363d', borderRadius: 2, textAlign: 'center', p: 4 }}>
      <Box sx={{ position: 'relative', width: 42, height: 42, border: '1px solid', borderColor: '#343c44', borderRadius: '50%' }}>
        <Box sx={{ position: 'absolute', top: 8, right: 7, width: 6, height: 6, borderRadius: '50%', background: '#c9f36b' }} />
      </Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 520, mt: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 390, fontFamily: 'monospace', fontSize: 9, lineHeight: 1.65 }}>
        {description}
      </Typography>
    </Box>
  )
}
