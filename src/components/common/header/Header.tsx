import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Switch, Toolbar, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import { toggleDarkMode } from 'store/reducers/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import UnauthenticatedButtons from './UnauthenticatedButtons';
import AuthenticatedButtons from './AuthenticatedButtons';

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
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
