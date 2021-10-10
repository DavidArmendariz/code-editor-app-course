import { Dispatch } from 'redux';
import FileViewerStructure from 'types/FileViewerStructure';
import { addActiveFile, setEditorActiveFile } from 'store/slices/files/files';
import { RootState } from 'types/Store';

const openFile = (node: FileViewerStructure) => (dispatch: Dispatch, getState: () => RootState) => {
  const { id: newFileId, children } = node;

  if (children) {
    return;
  }

  const state = getState();
  const activeFilesIds = state.files.activeFilesIds;

  if (!activeFilesIds.includes(newFileId)) {
    dispatch(addActiveFile(newFileId));
  }

  dispatch(setEditorActiveFile(newFileId));
};

export default openFile;
