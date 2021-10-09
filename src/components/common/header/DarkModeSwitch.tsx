import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import { toggleDarkMode } from 'store/slices/dark-mode/darkMode';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const DarkModeSwitch = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <DarkModeIcon />
      <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
    </>
  );
};

export default DarkModeSwitch;
