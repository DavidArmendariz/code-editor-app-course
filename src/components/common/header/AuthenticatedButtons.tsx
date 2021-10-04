import { styled } from '@mui/system';
import SignOut from 'auth/SignOut';
import OpenWorkspace from 'components/code-editor/open-workspace/OpenWorkspace';

const AuthenticatedButtons = () => {
  return (
    <DivRoot>
      <OpenWorkspace />
      <SignOut />
    </DivRoot>
  );
};

const DivRoot = styled('div')({
  display: 'flex',
});

export default AuthenticatedButtons;
