import { MouseEvent } from 'react';
import { styled } from '@mui/system';
import UserFile from 'types/UserFile';
import ExtensionIcon from '../extension-icon/ExtensionIcon';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from 'store/hooks';
import closeFile from 'store/thunks/closeFile';

interface Props {
  activeFile: UserFile;
}

const CustomTabLabel = (props: Props) => {
  const dispatch = useAppDispatch();
  const {
    activeFile: { id: fileId, name: fileName, extension },
  } = props;

  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(fileId));
  };

  return (
    <DivRoot>
      <ExtensionIcon extension={extension} />
      <FileNameDiv>{fileName}</FileNameDiv>
      <CloseIcon
        sx={{
          position: 'absolute',
          right: 0,
          color: (theme) => theme.font,
        }}
        onClick={onClose}
      />
    </DivRoot>
  );
};

const DivRoot = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
});

const FileNameDiv = styled('div')(({ theme }) => ({
  padding: '0px 5px',
  color: theme.font,
}));

export default CustomTabLabel;
