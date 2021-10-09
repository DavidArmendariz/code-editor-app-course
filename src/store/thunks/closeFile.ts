import { Dispatch } from 'redux';
import { removeActiveFile, setEditorActiveFile } from 'store/slices/files/files';
import { RootState } from 'types/Store';

const getNewActiveFileId = (activeFilesIds: string[], activeFilesLength: number, fileId: string) => {
  const fileToBeRemovedIndex = activeFilesIds.indexOf(fileId);
  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemovedIndex - 1];
  }
  return activeFilesIds[fileToBeRemovedIndex + 1];
};

const closeFile = (fileId: string) => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState();
  const { activeFiles, editorActiveFile } = state.files;
  const activeFilesLength = activeFiles.length;

  if (activeFilesLength >= 2) {
    const newActiveFileId = getNewActiveFileId(activeFiles, activeFilesLength, fileId);

    if (editorActiveFile?.id === fileId || editorActiveFile?.id === newActiveFileId) {
      dispatch(setEditorActiveFile(editorActiveFile));
    }
  } else {
    dispatch(setEditorActiveFile(null));
  }
  dispatch(removeActiveFile(fileId));
};

export default closeFile;
