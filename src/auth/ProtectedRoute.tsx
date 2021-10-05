import { ComponentType } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Route } from 'react-router';
import Loading from 'components/common/loading/Loading';

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any;
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { component, ...args } = props;
  return <Route component={withAuthenticationRequired(component, { onRedirecting: () => <Loading /> })} {...args} />;
};

export default ProtectedRoute;
