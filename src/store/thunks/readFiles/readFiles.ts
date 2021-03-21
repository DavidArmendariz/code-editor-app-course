import CustomFile from '../../../types/CustomFile';
import UserFile from '../../../types/UserFile';
import { v4 as uuidv4 } from 'uuid';

const readSingleFile = (file: CustomFile): Promise<UserFile> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function () {
      const { name, webkitRelativePath = '' } = file;
      const id = uuidv4();
      const code = typeof reader.result === 'string' ? reader.result : '';
      const splittedName = name.split('.');
      const extension = splittedName[splittedName.length - 1];
      resolve({
        id,
        name,
        code,
        extension,
        relativePath: webkitRelativePath,
      });
    };
  });
};
