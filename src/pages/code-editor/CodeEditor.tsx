import { styled } from '@mui/system';
import EditorContainer from 'components/code-editor/editor-container/EditorContainer';
import FileViewer from 'components/code-editor/file-viewer/FileViewer';

const RootDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const FileViewerDiv = styled('div')({
  display: 'flex',
  flex: 1,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px dashed black',
  maxWidth: '300px',
  overflow: 'auto',
});

const CodeEditorContainerDiv = styled('div')({
  flex: 3,
  height: '100%',
});

const CodeEditor = () => {
  return (
    <RootDiv>
      <FileViewerDiv>
        <FileViewer />
      </FileViewerDiv>
      <CodeEditorContainerDiv>
        <EditorContainer />
      </CodeEditorContainerDiv>
    </RootDiv>
  );
};

export default CodeEditor;
