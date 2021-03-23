import { makeStyles } from '@material-ui/core';
import React, { MouseEvent } from 'react';
import UserFile from '../../../types/UserFile';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  activeFile: UserFile;
}

const CustomTabLabel = (props: Props) => {
  const classes = useStyles();
  const {
    activeFile: { id, name: fileName, extension },
  } = props;

  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={classes.root}>
      <ExtensionIcon extension={extension} />
      <div className={classes.fileName}>{fileName}</div>
      <CloseIcon className={classes.closeIcon} onClick={onClose} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
  },
  fileName: {
    padding: '0px 5px',
    color: theme.font,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    color: theme.font,
  },
}));

export default CustomTabLabel;
