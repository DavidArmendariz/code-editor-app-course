import { useRef } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useAppDispatch } from 'store/hooks';
import readFiles from 'store/thunks/readFiles/readFiles';

const OpenWorkspace = () => {
  const directoryInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const onClick = () => {
    directoryInputRef.current?.click();
  };
  const onFilesUploaded = async () => {
    try {
      const files = directoryInputRef.current?.files as FileList;
      await dispatch(readFiles(files));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <OpenWorkspaceButton onClick={onClick}>Open Workspace</OpenWorkspaceButton>
      <InputFile type="file" directory="" webkitdirectory="" ref={directoryInputRef} onChange={onFilesUploaded} />
    </div>
  );
};

const OpenWorkspaceButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const InputFile = styled('input')({ display: 'none' });

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

export default OpenWorkspace;
