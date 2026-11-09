'use client'

import { Box, Typography } from '@mui/material'

interface RecordListProps {
  events: any[]
}

export default function RecordList({ events }: RecordListProps) {
  return (
    <Box>
      {events.map((event, idx) => (
        <Box key={idx} sx={{ mb: 1, p: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant='body2' sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
            {event.message}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
