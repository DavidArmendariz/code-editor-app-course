import { makeStyles } from '@material-ui/core';
import React from 'react';
import SignOut from '../../../auth/SignOut';

const AuthenticatedButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>Open Workspace</div>
      <SignOut />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default AuthenticatedButtons;
