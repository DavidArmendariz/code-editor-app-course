import { createSelector } from '@reduxjs/toolkit';
import { FilesState } from 'store/slices/files/files';
import { RootState } from 'types/Store';
import UserFile from 'types/UserFile';

type ActiveFilesIdsMap = { [key: string]: string };
type ActiveFilesMap = { [key: string]: UserFile };

const selectActiveFiles = (files: FilesState) => {
  const { userFiles, activeFilesIds } = files;

  const activeFilesIdsMap = activeFilesIds.reduce((result, activeFile) => {
    result[activeFile] = activeFile;
    return result;
  }, {} as ActiveFilesIdsMap);

  const activeFiles = userFiles
    .filter((file) => activeFilesIdsMap[file.id])
    .reduce((result, activeFile) => {
      const { id } = activeFile;
      result[id] = activeFile;
      return result;
    }, {} as ActiveFilesMap);

  return activeFilesIds.map((activeFileId) => activeFiles[activeFileId]);
};

export default createSelector((state: RootState) => state.files, selectActiveFiles);
