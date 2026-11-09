import { NextResponse } from 'next/server'
import { apiClient } from '@/packages/api-client/src/client'

export async function GET() {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return NextResponse.json(response.data)
    }
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  } catch (error) {
    console.error('Error fetching pricing data:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}