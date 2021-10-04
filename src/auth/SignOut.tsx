import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const SignOutButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const SignOut = () => {
  const { logout } = useAuth0();
  const onSignOut = () => {
    logout({
      returnTo: window.location.origin,
    });
  };
  return <SignOutButton onClick={onSignOut}>Sign Out</SignOutButton>;
};

export default SignOut;
