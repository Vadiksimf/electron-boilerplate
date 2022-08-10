import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  FilesState,
  ResponseData,
} from './types';
import { StatusInfo } from '../types';

const initialState: FilesState = {
  xml: {
    xmlTemplate: null,
    data: null,
  },
};

const readXmlFile = createAsyncThunk(
  'files/readXmlFile',
  async (filePath: string) => {
    try {
      const payload: { data: unknown; statusInfo: StatusInfo } =
        await window.electron.filesController.readXmlFile(filePath);
      return payload;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

const writeXmlFile = createAsyncThunk(
  'files/writeXmlFile',
  async ({
    dataObject,
    filePath,
  }: {
    dataObject: unknown;
    filePath: string;
  }) => {
    try {
      const payload: ResponseData =
        await window.electron.filesController.writeXmlFile({
          dataObject,
          filePath,
        });
      return payload;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readXmlFile.fulfilled, (state, action) => {
      state.xml.data = action.payload && action.payload.data;
    });
    builder.addCase(writeXmlFile.fulfilled, () => {});
  },
});

export { readXmlFile, writeXmlFile, filesSlice };

export default filesSlice.reducer;
