import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router';
import routes from 'routes/routes';

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const CodeEditorButton = () => {
  const history = useHistory();
  const onClick = () => {
    history.push(routes.codeEditor);
  };

  return <CodeEditorStyledButton onClick={onClick}>Code Editor</CodeEditorStyledButton>;
};

export default CodeEditorButton;
