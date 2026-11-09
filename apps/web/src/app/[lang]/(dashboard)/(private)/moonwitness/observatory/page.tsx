'use client'

import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { useParams, useRouter } from 'next/navigation'

import { brandProduct } from '@repo/brand'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'

import RecordList from '@/components/dashboard/record/RecordList'
import { ServiceCard } from '@/components/dashboard/service/ServiceCard'
import ContainersTable from '@/components/dashboard/record/ContainersTable'
import EmptyState from '@/components/dashboard/empty/EmptyState'

type Port = {
  privatePort: number
  publicPort?: number
  protocol: string
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
  updatedAt: string
  ports: Port[]
  stack: string
}

type Container = {
  id: string
  name: string
  image: string
  state: string
  health: string
  oomKilled: boolean
  exitCode: number
  restartCount: number
  uptimeSeconds: number
  cpuPercent: number
  memoryUsedBytes: number
  memoryLimitBytes: number
  networkRxBytes: number
  networkTxBytes: number
  ports: Port[]
  serviceName?: string
  taskSlot?: number
  composeProject?: string
  composeService?: string
  stack: string
  metricsAvailable: boolean
}

type Signal = {
  severity: 'critical' | 'warning' | 'info'
  code: string
  message: string
  resourceId?: string
  stack?: string
}

type WitnessEvent = {
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

type Snapshot = {
  generatedAt: string
  collectionMs: number
  docker: DockerSummary
  summary: Overview
  services: Service[]
  containers: Container[]
  alerts: Signal[]
  events?: WitnessEvent[]
}

const CONTROLLER_URL = (process.env.NEXT_PUBLIC_CONTROLLER_URL || 'http://127.0.0.1:8080').replace(/\/$/, '')

function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 B'
  const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB']
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  const amount = bytes / 1024 ** exponent

  
return `${amount.toFixed(amount >= 10 || exponent === 0 ? 0 : 1)} ${units[exponent]}`
}

function formatPercent(value: number): string {
  return Number.isFinite(value) ? `${value.toFixed(1)}%` : '—'
}

function relativeTime(value: string): string {
  const seconds = Math.floor((Date.now() - new Date(value).getTime()) / 1000)

  if (!Number.isFinite(seconds) || seconds < 1) return 'just now'
  if (seconds < 60) return `${seconds}s ago`
  const minutes = Math.floor(seconds / 60)

  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)

  if (hours < 24) return `${hours}h ago`
  
return `${Math.floor(hours / 24)}d ago`
}

function severityColor(severity: string): string {
  if (severity === 'critical') return '#ff7b72'
  if (severity === 'warning') return '#ffc66d'
  
return '#8fd8ff'
}


export default function ObservatoryPage() {
  const router = useRouter()
  const params = useParams()
  const locale = (params.lang as string) || 'en'
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null)
  const [streamStatus, setStreamStatus] = useState<'connecting' | 'live' | 'reconnecting' | 'error'>('connecting')
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'services' | 'containers' | 'record'>('services')
  const [snackOpen, setSnackOpen] = useState(false)

  useEffect(() => {
    let mounted = true
    let stream: EventSource | null = null

    async function loadOverview() {
      try {
        const response = await fetch(`${CONTROLLER_URL}/api/v1/overview`, {
          cache: 'no-store',
          headers: { Accept: 'application/json' },
        })

        if (!response.ok) throw new Error(`Controller returned HTTP ${response.status}`)
        const data = (await response.json()) as Snapshot

        if (!mounted) return
        setSnapshot(data)
        if (!data.services?.length) setActiveTab(data.containers?.length ? 'containers' : 'record')
      } catch (cause) {
        if (!mounted) return
        setError(cause instanceof Error ? cause.message : 'Controller is unreachable')
        setSnackOpen(true)
      }
    }

    loadOverview()

    if (!('EventSource' in window)) {
      setStreamStatus('error')

      
return () => {
        mounted = false
      }
    }

    stream = new EventSource(`${CONTROLLER_URL}/api/v1/stream`)
    stream.addEventListener('snapshot', (event: MessageEvent<string>) => {
      if (!mounted) return

      try {
        setSnapshot(JSON.parse(event.data) as Snapshot)
        setStreamStatus('live')
      } catch {
        setStreamStatus('reconnecting')
      }
    })
    stream.onopen = () => setStreamStatus('live')
    stream.onerror = () => setStreamStatus(current => (current === 'live' ? 'reconnecting' : 'error'))

    return () => {
      mounted = false
      stream?.close()
    }
  }, [])

  const docker = snapshot?.docker
  const summary = snapshot?.summary
  const recentEvents = useMemo(() => (snapshot?.events || []).slice(0, 8), [snapshot])
  const statusColor = streamStatus === 'live' ? 'info' : streamStatus === 'error' ? 'critical' : 'warning'

  const openRecord = (stack: string) => {
    if (!stack) return
    router.push(`/${locale}/${brandProduct.slug}/${brandProduct.pages.record}?stack=${encodeURIComponent(stack)}`)
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h4' component='h1' sx={{ fontWeight: 450, letterSpacing: '-0.045em' }}>
          {brandProduct.labels.module} {brandProduct.labels.observatory}
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ mt: 1, maxWidth: 620 }}>
          Live fleet state from the Docker Engine. Read-only. Evidence, not guesses.
        </Typography>
      </Box>

      <Card variant='outlined' sx={{ mb: 3, borderRadius: 3 }}>
        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 340px', minWidth: 260 }}>
            <Typography variant='overline' color='text.secondary'>Docker daemon</Typography>
            <Typography variant='h6' sx={{ fontWeight: 500 }}>
              {docker?.connected ? docker.name || 'Docker daemon' : 'Connecting to engine'}
            </Typography>
            <Typography variant='caption' color='text.secondary' sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
              {docker?.connected
                ? `${docker.serverVersion || ''} · ${docker.apiVersion || ''} · ${docker.os || ''} ${docker.architecture || ''}`.replace(/\s+/g, ' ').trim()
                : 'Waiting for the first snapshot.'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Meta label='Swarm' value={docker?.swarm?.active ? (docker.swarm.manager ? 'Manager' : 'Node') : 'Inactive'} />
            <Meta label='Node' value={docker?.swarm?.nodeId ? docker.swarm.nodeId.slice(0, 8) : '—'} />
            <Meta label='Stream' value={streamStatus} color={severityColor(statusColor)} />
            <Meta label='Updated' value={snapshot ? relativeTime(snapshot.generatedAt) : '—'} />
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))', xl: 'repeat(6, minmax(0, 1fr))' }, gap: 2, mb: 3 }}>
        <MetricCard label='Services' value={summary?.services ?? 0} meta={`${summary?.servicesRunning ?? 0} running, ${summary?.servicesDegraded ?? 0} degraded`} icon='tabler-server-2' />
        <MetricCard label='Containers' value={summary?.containers ?? 0} meta={`${summary?.containersRunning ?? 0} running, ${summary?.containersStopped ?? 0} stopped`} icon='tabler-box' />
        <MetricCard label='CPU load' value={summary ? formatPercent(summary.cpuPercent) : '—'} meta={docker?.cpus ? `${((summary?.cpuPercent || 0) / docker.cpus).toFixed(1)}% per core` : 'Collecting data'} icon='tabler-cpu' progress={summary?.cpuPercent} progressMax={docker?.cpus ? docker.cpus * 100 : 100} />
        <MetricCard label='Memory' value={summary ? formatPercent(summary.memoryPercent) : formatBytes(0)} meta={`${formatBytes(0)} / ${formatBytes(0)}`} icon='tabler-server' progress={summary?.memoryPercent || 0} progressMax={100} />
        <MetricCard label='Attention' value={(summary?.criticalAlerts ?? 0) + (summary?.warnings ?? 0)} meta={`${summary?.criticalAlerts ?? 0} critical, ${summary?.warnings ?? 0} warnings`} icon='tabler-alert-triangle' />
        <MetricCard label='Collection' value={snapshot ? `${snapshot.collectionMs}ms` : '—'} meta='Docker Engine API' icon='tabler-refresh' />
      </Box>

      {error && <Alert severity='error' sx={{ mb: 3 }}>{error}</Alert>}

      {recentEvents.length > 0 && (
        <Card variant='outlined' sx={{ mb: 3, borderRadius: 3, borderColor: 'rgba(255,198,109,0.22)' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 1.5 }}>
              <Box>
                <Typography variant='overline' color='text.secondary'>Signal</Typography>
                <Typography variant='h6'>Latest evidence</Typography>
              </Box>
              <Button size='small' onClick={() => setActiveTab('record')}>View record</Button>
            </Box>
            <RecordList events={recentEvents} />
          </CardContent>
        </Card>
      )}

      <Card variant='outlined' sx={{ borderRadius: 3 }}>
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant='overline' color='text.secondary'>Live inventory</Typography>
            <Typography variant='h6'>Workloads</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <TabButton active={activeTab === 'services'} onClick={() => setActiveTab('services')}>
              {`Services (${snapshot?.services?.length ?? 0})`}
            </TabButton>
            <TabButton active={activeTab === 'containers'} onClick={() => setActiveTab('containers')}>
              {`Containers (${snapshot?.containers?.length ?? 0})`}
            </TabButton>
            <TabButton active={activeTab === 'record'} onClick={() => setActiveTab('record')}>
              {`Record (${snapshot?.events?.length ?? 0})`}
            </TabButton>
          </Box>

          {activeTab === 'services' && (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' }, gap: 1.5 }}>
              {snapshot?.services?.map(service => (
                <ServiceCard key={service.id} service={service} onOpen={() => openRecord(service.stack)} />
              ))}
              {!snapshot?.services?.length && <EmptyState title='No Swarm services' description='This daemon has no Swarm services deployed.' />}
            </Box>
          )}

          {activeTab === 'containers' && (
            snapshot?.containers?.length
              ? <ContainersTable containers={snapshot.containers} onOpen={openRecord} />
              : <EmptyState title='No containers' description='Start a container and it will appear here.' />
          )}

          {activeTab === 'record' && (
            recentEvents.length > 0
              ? <RecordList events={recentEvents} />
              : <EmptyState title='No record yet' description='Events appear here when the witness detects a change or a failing condition.' />
          )}
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />
      <Typography variant='caption' color='text.secondary' sx={{ fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        MoonWitness does not guess what broke. It shows what happened.
      </Typography>

      <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
        <Alert severity='error' onClose={() => setSnackOpen(false)}>{error}</Alert>
      </Snackbar>
    </Box>
  )
}

function Meta({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <Box>
      <Typography variant='caption' color='text.secondary' sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>{label}</Typography>
      <Typography variant='body2' sx={{ fontWeight: 500, color: color || 'inherit', fontFamily: 'monospace' }}>{value}</Typography>
    </Box>
  )
}

function MetricCard({ label, value, meta, icon, progress, progressMax }: { label: string; value: ReactNode; meta: string; icon: string; progress?: number; progressMax?: number }) {
  return (
    <Card variant='outlined' sx={{ minHeight: 138, borderRadius: 2 }}>
      <CardContent sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant='caption' color='text.secondary' sx={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.13em', textTransform: 'uppercase' }}>{label}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, mb: 1 }}>
          <i className={`${icon} text-xl`} />
          <Typography variant='h5' sx={{ fontWeight: 430, letterSpacing: '-0.045em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</Typography>
        </Box>
        {progress != null && progressMax != null && progressMax > 0 && (
          <Box sx={{ height: 3, borderRadius: 999, background: '#2b3036', overflow: 'hidden' }}>
            <Box sx={{ width: `${Math.min(100, (progress / progressMax) * 100)}%`, height: '100%', background: progress / progressMax > 0.85 ? '#ff7b72' : '#c9f36b', transition: 'width 400ms ease' }} />
          </Box>
        )}
        <Typography variant='caption' color='text.secondary' sx={{ display: 'block', fontFamily: 'monospace', fontSize: 9, lineHeight: 1.45, mt: 0.5 }}>{meta}</Typography>
      </CardContent>
    </Card>
  )
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <Button onClick={onClick} size='small' disableRipple sx={{ position: 'relative', px: 0.5, py: 1, mr: 2, color: active ? 'text.primary' : 'text.secondary', fontSize: 10, fontFamily: 'monospace', textTransform: 'none', borderRadius: 0, '&::after': active ? { content: '""', position: 'absolute', left: 0, right: 0, bottom: -1, height: 1, background: '#c9f36b' } : undefined }}>
      {children}
    </Button>
  )
}
