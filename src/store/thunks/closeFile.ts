import { removeActiveFile, setEditorActiveFile } from 'store/slices/files/files';
import { AppDispatch, RootState } from 'types/Store';

const closeFile = (fileToCloseId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const {
    files: { activeFilesIds, editorActiveFile },
  } = getState();
  const activeFilesLength = activeFilesIds.length;

  if (activeFilesLength === 1) {
    dispatch(setEditorActiveFile(null));
  } else if (activeFilesLength >= 2 && fileToCloseId === editorActiveFile) {
    const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId);
    dispatch(setEditorActiveFile(newActiveFileId));
  }

  dispatch(removeActiveFile(fileToCloseId));
};

const getNewActiveFileId = (activeFilesIds: string[], activeFilesLength: number, fileId: string) => {
  const fileToBeRemovedIndex = activeFilesIds.indexOf(fileId);
  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemovedIndex - 1];
  }
  return activeFilesIds[fileToBeRemovedIndex + 1];
};

export default closeFile;
