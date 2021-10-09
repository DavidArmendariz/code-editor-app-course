import { ChangeEvent } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setEditorActiveFile } from 'store/slices/files/files';
import selectActiveFiles from 'store/selectors/select-active-files/selectActiveFiles';
import CustomTabLabel from './CustomTabLabel';
import CustomTabPanel from './CustomTabPanel';

const EditorContainer = () => {
  const dispatch = useAppDispatch();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFile = useAppSelector((state) => state.files.editorActiveFile);

  if (!activeFiles.length) {
    return <EmptyMessageDiv>Select a file</EmptyMessageDiv>;
  }

  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    const activeFile = activeFiles[tabPosition];
    if (activeFile.id !== editorActiveFile?.id) {
      dispatch(setEditorActiveFile(activeFile));
    }
  };

  const tabValue = editorActiveFile ? activeFiles.findIndex((activeFile) => activeFile.id === editorActiveFile.id) : 0;

  return (
    <RootDiv>
      <AppBar position="static" color="default">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={tabValue}
          onChange={onTabClick}
        >
          {activeFiles.map((activeFile) => {
            return <Tab key={activeFile.id} label={<CustomTabLabel activeFile={activeFile} />} />;
          })}
        </Tabs>
      </AppBar>
      {activeFiles.map((activeFile) => {
        return <CustomTabPanel key={activeFile.id} activeFile={activeFile} editorActiveFile={editorActiveFile} />;
      })}
    </RootDiv>
  );
};

const RootDiv = styled('div')({
  flex: 1,
  height: '100%',
  overflow: 'hidden',
});

const EmptyMessageDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.font,
}));

export default EditorContainer;
