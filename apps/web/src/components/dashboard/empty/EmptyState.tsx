'use client'

import { Box, Typography } from '@mui/material'

interface EmptyStateProps {
  title: string
  description?: string
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant='h6' component='h2' sx={{ mb: 1 }}>
        {title}
      </Typography>
      {description && (
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      )}
    </Box>
  )
}
