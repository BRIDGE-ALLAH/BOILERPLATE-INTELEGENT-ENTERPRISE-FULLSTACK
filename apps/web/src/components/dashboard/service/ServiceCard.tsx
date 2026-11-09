'use client'

import { Card, CardContent, Typography } from '@mui/material'

interface ServiceCardProps {
  service: any
  onOpen: () => void
}

export function ServiceCard({ service, onOpen }: ServiceCardProps) {
  return (
    <Card variant='outlined' sx={{ p: 2, cursor: 'pointer' }} onClick={onOpen}>
      <CardContent>
        <Typography variant='body2' sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
          {service.name || service.id}
        </Typography>
      </CardContent>
    </Card>
  )
}
