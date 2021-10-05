import { PropsWithChildren } from 'react';
import { styled } from '@mui/system';
import Header from '../header/Header';

const LayoutContainer = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Page = styled('div')({
  height: '100%',
});

const Layout = (props: PropsWithChildren<{}>) => {
  return (
    <LayoutContainer>
      <Header />
      <Page>{props.children}</Page>
    </LayoutContainer>
  );
};

export default Layout;
