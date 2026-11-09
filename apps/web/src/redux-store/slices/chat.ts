import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { apiClient } from '@repo/api-client';

interface ChatState {
  messages: any[];
  contacts: any[];
  chats: any[];
  profileUser: any;
  activeUser: any;
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: [],
  contacts: [],
  chats: [],
  profileUser: null,
  activeUser: null,
  loading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<any[]>) => {
      state.messages = action.payload;
    },
    setContacts: (state, action: PayloadAction<any[]>) => {
      state.contacts = action.payload;
    },
    setChats: (state, action: PayloadAction<any[]>) => {
      state.chats = action.payload;
    },
    setProfileUser: (state, action: PayloadAction<any>) => {
      state.profileUser = action.payload;
    },
    setActiveUser: (state, action: PayloadAction<any>) => {
      state.activeUser = action.payload;
    },
    sendMsg: (state, action: PayloadAction<any>) => {
      state.messages.push(action.payload);
    },
    addNewChat: (state, action: PayloadAction<any>) => {
      state.chats.push(action.payload);
    },
    setUserStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const contact = state.contacts.find((c) => c.id === action.payload.id);

      if (contact) contact.status = action.payload.status;
    },

    getActiveUserData: (state) => state.activeUser,
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setMessages,
  setContacts,
  setChats,
  setProfileUser,
  setActiveUser,
  sendMsg,
  addNewChat,
  setUserStatus,
  getActiveUserData,
  setLoading,
  setError,
} = chatSlice.actions;

export const initChat = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response: any = await apiClient.get('/api/v1/health');

    if (response.success && response.data) {
      dispatch(setMessages(response.data));
    }

    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default chatSlice.reducer;
