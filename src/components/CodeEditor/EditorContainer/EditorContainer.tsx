import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useAppSelector } from '../../../store/hooks';
import selectActiveFiles from '../../../store/selectors/selectActiveFIles/selectActiveFiles';
import CustomTabPanel from './CustomTabPanel';

const EditorContainer = () => {
  const classes = useStyles();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFile = useAppSelector((state) => state.files.editorActiveFile);
  const activeFilesIds = useAppSelector((state) => state.files.activeFiles);

  if (!activeFiles.length) {
    return <div className={classes.emptyMessage}>Select a file</div>;
  }

  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    console.log('foo');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={editorActiveFile ? activeFilesIds.indexOf(editorActiveFile) : 0}
          onChange={onTabClick}
        >
          {activeFiles.map((activeFile) => {
            return <Tab key={activeFile.id} label="foo" />;
          })}
        </Tabs>
      </AppBar>
      {activeFiles.map((activeFile) => {
        return <CustomTabPanel key={activeFile.id} activeFile={activeFile} editorActiveFile={editorActiveFile} />;
      })}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: '100%',
    overflow: 'hidden',
  },
  emptyMessage: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.font,
  },
}));

export default EditorContainer;
