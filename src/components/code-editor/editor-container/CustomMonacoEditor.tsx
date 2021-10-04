import Editor from '@monaco-editor/react';
import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import supportedExtensions from '../../../constants/supportedExtensions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { updateFileCode } from '../../../store/reducers/files/reducer';
import UserFile from '../../../types/UserFile';
import Loading from '../../common/loading/Loading';

interface Props {
  activeFile: UserFile;
}

const CustomMonacoEditor = (props: Props) => {
  const {
    activeFile: { id: fileId, extension, code: originalCode },
  } = props;
  const [code, setCode] = useState(originalCode);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const language = supportedExtensions[extension];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((fileId: string, newCode: string) => {
      dispatch(updateFileCode({ fileId, newCode }));
    }, 1000),
    []
  );

  const onChange = (newCode = '') => {
    setCode(newCode);
    debouncedSave(fileId, newCode);
  };

  return (
    <Editor
      width="100%"
      height="100%"
      language={language}
      theme={darkMode ? 'vs-dark' : 'vs-light'}
      value={code}
      loading={<Loading />}
      onChange={onChange}
    />
  );
};

export default CustomMonacoEditor;
