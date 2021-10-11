import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFiles } from 'store/slices/files/files';
import { readSingleFile } from 'utils/readFile';

const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
  const promises = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    promises.push(readSingleFile(file));
  }

  const userFiles = await Promise.all(promises);
  dispatch(setFiles(userFiles));
});

export default readFiles;
