import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiClient } from '@/packages/api-client/src/client'

interface EmailState {
  emails: any[]
  loading: boolean
  error: string | null
}

const initialState: EmailState = {
  emails: [],
  loading: false,
  error: null,
}

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmails: (state, action: PayloadAction<any[]>) => {
      state.emails = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setEmails, setLoading, setError } = emailSlice.actions

export const initEmail = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      dispatch(setEmails(response.data))
    }
    dispatch(setLoading(false))
  } catch (error: any) {
    dispatch(setError(error.message))
    dispatch(setLoading(false))
  }
}

export default emailSlice.reducer