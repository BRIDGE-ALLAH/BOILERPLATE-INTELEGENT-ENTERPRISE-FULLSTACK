'use client'

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface ContainersTableProps {
  containers: any[]
  onOpen: (stack: string) => void
}

export default function ContainersTable({ containers, onOpen }: ContainersTableProps) {
  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {containers.map((container) => (
            <TableRow key={container.id} sx={{ cursor: 'pointer' }} onClick={() => onOpen(container.stack || '')}>
              <TableCell>{container.name}</TableCell>
              <TableCell>{container.state}</TableCell>
              <TableCell>{container.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
