import { styled } from '@mui/system';
import UserFile from 'types/UserFile';
import CustomMonacoEditor from './CustomMonacoEditor';

interface Props {
  activeFile: UserFile;
  editorActiveFile: string | null;
}

const CustomTabPanel = (props: Props) => {
  const { activeFile, editorActiveFile } = props;
  const { id: activeFileId } = activeFile;
  return (
    <RootDiv role="tabpanel" hidden={editorActiveFile !== activeFileId}>
      <CustomMonacoEditor activeFile={activeFile} />
    </RootDiv>
  );
};

const RootDiv = styled('div')({ height: '100%' });

export default CustomTabPanel;
