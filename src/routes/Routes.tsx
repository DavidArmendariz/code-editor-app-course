import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/system';
import { Redirect, Route, Switch } from 'react-router';
import ProtectedRoute from 'auth/ProtectedRoute';
import Header from 'components/common/header/Header';
import Loading from 'components/common/loading/Loading';
import CodeEditor from 'pages/code-editor/CodeEditor';
import Home from 'pages/home/Home';
import routes from './routes';

const MainPage = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Page = styled('div')({
  height: '100%',
});

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <MainPage>
      <Header />
      <Page>
        <Switch>
          <ProtectedRoute exact path={routes.codeEditor}>
            {CodeEditor}
          </ProtectedRoute>
          <Route exact path={routes.home}>
            {isAuthenticated ? <Redirect to={routes.codeEditor} /> : <Home />}
          </Route>
        </Switch>
      </Page>
    </MainPage>
  );
};

export default Routes;
