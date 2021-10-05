import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Switch, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import { toggleDarkMode } from 'store/reducers/dark-mode/darkMode';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import CodeEditorStyledButton from './CodeEditorButton';
import OpenWorkspaceButton from './OpenWorkspaceButton';
import { useHistory } from 'react-router';
import routes from 'routes/routes';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.commonColors.white,
}));

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={routes.home}>Code Editor App</StyledLink>
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
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
      {history.location.pathname === routes.home ? <CodeEditorStyledButton /> : <OpenWorkspaceButton />}
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
