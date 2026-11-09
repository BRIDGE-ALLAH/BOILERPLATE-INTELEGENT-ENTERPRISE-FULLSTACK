import { NextResponse } from 'next/server'

import { apiClient } from '@repo/api-client'

export async function GET() {
  try {
    const response: any = await apiClient.get('/api/v1/users')

    if (response.success && response.data) {
      return NextResponse.json(response.data)
    }

    
return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  } catch (error) {
    console.error('Error fetching users:', error)
    
return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}