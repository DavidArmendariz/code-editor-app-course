import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import CodeEditorStyledButton from './CodeEditorButton';
import OpenWorkspaceButton from './OpenWorkspaceButton';
import DarkModeSwitch from './DarkModeSwitch';
import paths from 'routes/paths';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.commonColors.white,
}));

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={paths.home}>Code Editor App</StyledLink>
        </Typography>
        <DarkModeSwitch />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

const AuthenticatedButtonsDiv = styled('div')({ display: 'flex' });

const AuthenticatedButtons = () => {
  const history = useHistory();

  return (
    <AuthenticatedButtonsDiv>
      {history.location.pathname === paths.home ? <CodeEditorStyledButton /> : <OpenWorkspaceButton />}
      <SignOutButton />
    </AuthenticatedButtonsDiv>
  );
};

const UnauthenticatedButtons = () => {
  return (
    <div>
      <SignInButton />
    </div>
  );
};

export default Header;
