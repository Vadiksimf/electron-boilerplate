import { LogsState, DEFAULT_MESSAGE } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: LogsState = {
  logs: [],
  isShowed: false,
};

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    appendLog: (state, action) => {
      state.logs.push({ 
        message: action.payload?.message || DEFAULT_MESSAGE, 
        status: action.payload?.status 
      })
      state.isShowed = action.payload?.status === 'ERROR';
    }
  }
});

export const { appendLog } = logsSlice.actions;

export default logsSlice.reducer;
