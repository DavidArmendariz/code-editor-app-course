import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import ProtectedRoute from 'auth/ProtectedRoute';
import paths from './paths';
import Loading from 'components/common/loading/Loading';
import { useAuth0 } from '@auth0/auth0-react';

const CodeEditorPage = React.lazy(() => import('pages/code-editor/CodeEditor'));
const Home = React.lazy(() => import('pages/home/Home'));

const Routes = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <ProtectedRoute exact path={paths.codeEditor} component={CodeEditorPage} />
        <Route exact path={paths.home} component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
