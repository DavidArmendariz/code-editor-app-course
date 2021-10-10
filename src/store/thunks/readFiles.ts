import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFiles } from 'store/slices/files/files';
import { readSingleFile } from 'utils/readFile';

const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
  const numberOfFiles = files.length;
  const promises = Array.from({ length: numberOfFiles }, (_, i) => {
    const file = files[i];
    return readSingleFile(file);
  });
  const userFiles = await Promise.all(promises);
  dispatch(setFiles(userFiles));
});

export default readFiles;
