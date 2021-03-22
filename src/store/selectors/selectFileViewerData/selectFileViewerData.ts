import { createSelector } from '@reduxjs/toolkit';
import FileViewerStructure from '../../../types/FileViewerStructure';
import UserFile from '../../../types/UserFile';
import { RootState } from '../../store';

const selectFileViewerData = (userFiles: UserFile[]): FileViewerStructure => {
  const userFilesLength = userFiles.length;
  const result: FileViewerStructure = {} as FileViewerStructure;

  for (let i = 0; i < userFilesLength; i++) {
    const userFile = userFiles[i];
    const { name, relativePath, id, extension } = userFile;
    const paths = relativePath.split('/');
    let j = 0;
    let children;
    while (paths[j] !== name) {
      const path = paths[j];
      if (j === 0) {
        if (!result.name) {
          result.id = j.toString();
          result.name = path;
          result.children = [];
        }
        j++;
        continue;
      }
      children = result.children!;
      const subfolder = children.find((child) => child.name === path);
      if (subfolder) {
        children = subfolder.children;
      } else {
        children.push({
          id: j.toString(),
          name: path,
          children: [],
        });
        children = children[children.length - 1];
      }
      j++;
    }
    const fileData = { id, name, extension };
    if (!children) {
      result.children!.push(fileData);
    } else {
      (children as FileViewerStructure).children!.push(fileData);
    }
  }

  return result;
};

export default createSelector((state: RootState) => state.files.userFiles, selectFileViewerData);
