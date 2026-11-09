import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { apiClient } from '@repo/api-client';

import type { Email } from '@/types/apps/emailTypes';

interface EmailState {
  emails: Email[];
  filteredEmails: Email[];
  loading: boolean;
  error: string | null;
}

const initialState: EmailState = {
  emails: [],
  filteredEmails: [],
  loading: false,
  error: null,
};

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmails: (state, action: PayloadAction<Email[]>) => {
      state.emails = action.payload;
    },
    setFilteredEmails: (state, action: PayloadAction<Email[]>) => {
      state.filteredEmails = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    filterEmails: (state, action: PayloadAction<{ emails: any[]; folder: string | undefined; label: string | undefined }>) => {
      const { emails, folder, label } = action.payload;

      state.filteredEmails = emails.filter((email: any) => {
        const folderMatch = folder ? email.folder === folder : true;
        const labelMatch = label ? email.labels?.includes(label) : true;

        
return folderMatch && labelMatch;
      });
    },
    getCurrentEmail: (state, action: PayloadAction<number>) => {
      state.emails.find((email) => email.id === action.payload);
    },
    moveEmailsToFolder: (state, action: PayloadAction<{ emailIds: number[]; folder: string }>) => {
      const { emailIds, folder } = action.payload;

      state.emails = state.emails.map((email) =>
        emailIds.includes(email.id) ? { ...email, folder } : email
      );
    },
    deleteTrashEmails: (state) => {
      state.emails = state.emails.filter((email) => email.folder !== 'trash');
    },
    toggleReadEmails: (state, action: PayloadAction<{ emailIds: number[]; isRead?: boolean }>) => {
      const { emailIds, isRead } = action.payload;

      state.emails = state.emails.map((email) =>
        emailIds.includes(email.id) ? { ...email, isRead: isRead ?? !email.isRead } : email
      );
    },
    toggleStarEmail: (state, action: PayloadAction<number>) => {
      state.emails = state.emails.map((email) =>
        email.id === action.payload ? { ...email, isStarred: !email.isStarred } : email
      );
    },
    toggleLabel: (state, action: PayloadAction<{ emailIds: number[]; label: string }>) => {
      const { emailIds, label } = action.payload;

      state.emails.forEach((email) => {
        if (emailIds.includes(email.id)) {
          if (email.labels.includes(label)) {
            email.labels = email.labels.filter((l) => l !== label);
          } else {
            email.labels.push(label);
          }
        }
      });
    },
    navigateEmails: (state: any, action: PayloadAction<{ type: 'next' | 'prev'; emails: any[]; currentEmailId: number | undefined }>) => {
      state
      action
    },
  },
});

export const {
  setEmails,
  setFilteredEmails,
  setLoading,
  setError,
  filterEmails,
  getCurrentEmail,
  moveEmailsToFolder,
  deleteTrashEmails,
  toggleReadEmails,
  toggleStarEmail,
  toggleLabel,
  navigateEmails,
} = emailSlice.actions;

export const initEmail = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response: any = await apiClient.get('/api/v1/health');

    if (response.success && response.data) {
      dispatch(setEmails(response.data));
    }

    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default emailSlice.reducer;
