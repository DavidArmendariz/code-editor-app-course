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
  const activeFilesIds = useAppSelector((state) => state.files.activeFiles);

  if (!activeFiles.length) {
    return <EmptyMessageDiv>Select a file</EmptyMessageDiv>;
  }

  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    const activeFile = activeFiles[tabPosition];
    if (activeFile.id !== editorActiveFile?.id) {
      dispatch(setEditorActiveFile(activeFile));
    }
  };

  return (
    <RootDiv>
      <AppBar position="static" color="default">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={editorActiveFile ? activeFilesIds.indexOf(editorActiveFile.id) : 0}
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
