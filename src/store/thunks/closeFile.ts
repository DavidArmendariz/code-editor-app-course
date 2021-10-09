import { removeActiveFile, setEditorActiveFile } from 'store/slices/files/files';
import { AppDispatch, RootState } from 'types/Store';

const getNewActiveFileId = (activeFilesIds: string[], activeFilesLength: number, fileId: string) => {
  const fileToBeRemovedIndex = activeFilesIds.indexOf(fileId);
  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemovedIndex - 1];
  }
  return activeFilesIds[fileToBeRemovedIndex + 1];
};

const closeFile = (fileToCloseId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState();
  const { activeFilesIds, editorActiveFile, userFiles } = state.files;
  const activeFilesLength = activeFilesIds.length;

  if (activeFilesLength >= 2) {
    const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId);

    if (fileToCloseId === editorActiveFile) {
      const newEditorActiveFile = userFiles.find((userFile) => userFile.id === newActiveFileId);

      if (newEditorActiveFile) {
        dispatch(setEditorActiveFile(newEditorActiveFile.id));
      }
    }
  } else {
    dispatch(setEditorActiveFile(null));
  }

  dispatch(removeActiveFile(fileToCloseId));
};

export default closeFile;
