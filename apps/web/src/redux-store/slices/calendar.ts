import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiClient } from '@/packages/api-client/src/client'

interface CalendarState {
  events: any[]
  loading: boolean
  error: string | null
}

const initialState: CalendarState = {
  events: [],
  loading: false,
  error: null,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<any[]>) => {
      state.events = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setEvents, setLoading, setError } = calendarSlice.actions

export const initCalendar = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      dispatch(setEvents(response.data))
    }
    dispatch(setLoading(false))
  } catch (error: any) {
    dispatch(setError(error.message))
    dispatch(setLoading(false))
  }
}

export default calendarSlice.reducer