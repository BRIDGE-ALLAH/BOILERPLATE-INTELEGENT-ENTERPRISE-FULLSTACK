import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiClient } from '@/packages/api-client/src/client'

interface KanbanState {
  columns: any[]
  loading: boolean
  error: string | null
}

const initialState: KanbanState = {
  columns: [],
  loading: false,
  error: null,
}

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<any[]>) => {
      state.columns = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setColumns, setLoading, setError } = kanbanSlice.actions

export const initKanban = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      dispatch(setColumns(response.data))
    }
    dispatch(setLoading(false))
  } catch (error: any) {
    dispatch(setError(error.message))
    dispatch(setLoading(false))
  }
}

export default kanbanSlice.reducer