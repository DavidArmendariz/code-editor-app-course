import { PropsWithChildren } from 'react';
import { styled } from '@mui/system';
import Header from '../header/Header';

const MainPage = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Page = styled('div')({
  height: '100%',
});

const Layout = (props: PropsWithChildren<{}>) => {
  return (
    <MainPage>
      <Header />
      <Page>{props.children}</Page>
    </MainPage>
  );
};

export default Layout;
