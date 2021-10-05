import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router';
import paths from 'routes/paths';

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const CodeEditorButton = () => {
  const history = useHistory();
  const onClick = () => {
    history.push(paths.codeEditor);
  };

  return <CodeEditorStyledButton onClick={onClick}>Code Editor</CodeEditorStyledButton>;
};

export default CodeEditorButton;
