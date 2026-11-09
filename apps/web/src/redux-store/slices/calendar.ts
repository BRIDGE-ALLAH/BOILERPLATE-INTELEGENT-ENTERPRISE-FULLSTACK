import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { apiClient } from '@repo/api-client';

interface CalendarState {
  events: any[];
  filteredEvents: any[];
  selectedEvent: any;
  loading: boolean;
  error: string | null;
}

const initialState: CalendarState = {
  events: [],
  filteredEvents: [],
  selectedEvent: null,
  loading: false,
  error: null,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<any[]>) => {
      state.events = action.payload;
    },
    setSelectedEvent: (state, action: PayloadAction<any>) => {
      state.selectedEvent = action.payload;
    },
    addEvent: (state, action: PayloadAction<any>) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter((e) => e.id !== action.payload);
    },
    updateEvent: (state, action: PayloadAction<any>) => {
      const idx = state.events.findIndex((e) => e.id === action.payload.id);

      if (idx !== -1) state.events[idx] = action.payload;
    },
    filterEvents: (state, action: PayloadAction<string | undefined>) => {
      const query = action.payload?.toLowerCase();

      state.filteredEvents = query
        ? state.events.filter((e) => e.title?.toLowerCase().includes(query))
        : [...state.events];
    },
    filterAllCalendarLabels: (state: any, action: PayloadAction<string>) => {
      state
      action
    },
    filterCalendarLabel: (state: any, action: PayloadAction<string>) => {
      state
      action
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
  setEvents,
  setSelectedEvent,
  addEvent,
  deleteEvent,
  updateEvent,
  filterEvents,
  filterAllCalendarLabels,
  filterCalendarLabel,
  setLoading,
  setError,
} = calendarSlice.actions;

export const selectSelectedEvent = (state: { calendar: CalendarState }) => state.calendar.selectedEvent;

export const selectedEvent = (state: { calendar: CalendarState }) => state.calendar.selectedEvent;

export const initCalendar = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response: any = await apiClient.get('/api/v1/health');

    if (response.success && response.data) {
      dispatch(setEvents(response.data));
    }

    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default calendarSlice.reducer;
