import { styled } from '@mui/system';
import Layout from 'components/common/layout/Layout';
import ProgrammingLanguagesList from 'components/home/ProgrammingLanguagesList';

const DivRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));
const WelcomeMessageDiv = styled('div')(({ theme }) => ({
  padding: '15px',
  fontSize: '30px',
  color: theme.font,
}));

const Home = () => {
  return (
    <Layout>
      <DivRoot>
        <WelcomeMessageDiv>Welcome to the Code Editor App</WelcomeMessageDiv>
        <ProgrammingLanguagesList />
      </DivRoot>
    </Layout>
  );
};

export default Home;
