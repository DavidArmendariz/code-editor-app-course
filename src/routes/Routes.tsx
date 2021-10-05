import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import ProtectedRoute from 'auth/ProtectedRoute';
import routes from './routes';
import Loading from 'components/common/loading/Loading';

const CodeEditorPage = React.lazy(() => import('pages/code-editor/CodeEditor'));
const Home = React.lazy(() => import('pages/home/Home'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <ProtectedRoute exact path={routes.codeEditor} component={CodeEditorPage} />
        <Route exact path={routes.home} component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
