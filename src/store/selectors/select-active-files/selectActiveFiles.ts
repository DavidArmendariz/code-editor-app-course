import { createSelector } from '@reduxjs/toolkit';
import { FilesState } from 'store/slices/files/files';
import { RootState } from 'types/Store';

const selectActiveFiles = (files: FilesState) => {
  const { userFiles, activeFilesIds } = files;
  return userFiles.filter((file) => activeFilesIds.includes(file.id));
};

export default createSelector((state: RootState) => state.files, selectActiveFiles);
