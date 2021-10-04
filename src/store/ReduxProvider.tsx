import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from 'components/common/loading/Loading';
import store, { persistor } from '.';

const ReduxProvider = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
