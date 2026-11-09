import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { apiClient } from '@repo/api-client';

interface KanbanState {
  columns: any[];
  tasks: any[];
  currentTaskId: number | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: KanbanState = {
  columns: [],
  tasks: [],
  currentTaskId: undefined,
  loading: false,
  error: null,
};

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<any[]>) => {
      state.columns = action.payload;
    },
    addColumn: (state, action: PayloadAction<any>) => {
      state.columns.push(action.payload);
    },
    editColumn: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const col = state.columns.find((c) => c.id === action.payload.id);

      if (col) col.title = action.payload.title;
    },
    updateColumns: (state, action: PayloadAction<any[]>) => {
      state.columns = action.payload;
    },
    deleteColumn: (state, action: PayloadAction<number>) => {
      state.columns = state.columns.filter((c) => c.id !== action.payload);
    },
    addTask: (state, action: PayloadAction<any>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    editTask: (state, action: PayloadAction<any>) => {
      const idx = state.tasks.findIndex((t) => t.id === action.payload.id);

      if (idx !== -1) state.tasks[idx] = action.payload;
    },
    updateColumnTaskIds: (state, action: PayloadAction<{ columnId: number; taskIds: number[] }>) => {
      const { columnId, taskIds } = action.payload;
      const col = state.columns.find((c) => c.id === columnId);

      if (col) col.taskIds = taskIds;
    },
    getCurrentTask: (state, action: PayloadAction<number>) => {
      state.currentTaskId = action.payload;
    },
    setCurrentTaskId: (state, action: PayloadAction<number>) => {
      state.currentTaskId = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setColumns,
  addColumn,
  editColumn,
  updateColumns,
  deleteColumn,
  addTask,
  deleteTask,
  editTask,
  updateColumnTaskIds,
  getCurrentTask,
  setCurrentTaskId,
  setLoading,
  setError,
} = kanbanSlice.actions;

export const initKanban = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response: any = await apiClient.get('/api/v1/health');

    if (response.success && response.data) {
      dispatch(setColumns(response.data));
    }

    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default kanbanSlice.reducer;
