import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiClient } from '@/packages/api-client/src/client'

interface ChatState {
  messages: any[]
  loading: boolean
  error: string | null
}

const initialState: ChatState = {
  messages: [],
  loading: false,
  error: null,
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<any[]>) => {
      state.messages = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setMessages, setLoading, setError } = chatSlice.actions

export const initChat = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      dispatch(setMessages(response.data))
    }
    dispatch(setLoading(false))
  } catch (error: any) {
    dispatch(setError(error.message))
    dispatch(setLoading(false))
  }
}

export default chatSlice.reducer