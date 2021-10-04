import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const SignInButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const onSignIn = () => {
    loginWithRedirect();
  };
  return <SignInButton onClick={onSignIn}>Sign In</SignInButton>;
};

export default SignIn;
