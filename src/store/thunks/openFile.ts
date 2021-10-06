import { Dispatch } from 'redux';
import { supportedExtensions } from 'variables';
import FileViewerStructure from 'types/FileViewerStructure';
import { addActiveFile, setEditorActiveFile } from 'store/slices/files/files';
import { RootState } from 'types/Store';

const openFile = (node: FileViewerStructure) => (dispatch: Dispatch, getState: () => RootState) => {
  const { extension: fileExtension = '', id: fileId, children } = node;
  if (children || !supportedExtensions[fileExtension]) {
    return;
  }
  const state = getState();
  const activeFiles = state.files.activeFiles;
  if (!activeFiles.includes(fileId)) {
    dispatch(addActiveFile(fileId));
  }
  dispatch(setEditorActiveFile(fileId));
};

export default openFile;
