import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ProtectedRoute from '../auth/ProtectedRoute';
import Header from '../components/common/Header/Header';
import Loading from '../components/common/Loading/Loading';
import routes from './routes';

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path={routes.codeEditor} component={<div>Code Editor</div>} />
          <Route exact path={routes.home}>
            {isAuthenticated ? <Redirect to={routes.codeEditor} /> : <div>Home</div>}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default Routes;
