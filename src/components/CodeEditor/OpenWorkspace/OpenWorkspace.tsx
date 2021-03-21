import { Button, makeStyles } from '@material-ui/core';
import React, { AriaAttributes, DOMAttributes, useRef } from 'react';
import { commonColors } from '../../../theme/colors';

const OpenWorkspace = () => {
  const classes = useStyles();
  const directoryInputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    directoryInputRef.current?.click();
  };
  const onFilesUploaded = () => {
    console.log('Test');
  };
  return (
    <div>
      <Button className={classes.button} onClick={onClick}>
        Open Workspace
      </Button>
      <input
        type="file"
        className={classes.input}
        directory=""
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFilesUploaded}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
  input: {
    display: 'none',
  },
}));

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

export default OpenWorkspace;
