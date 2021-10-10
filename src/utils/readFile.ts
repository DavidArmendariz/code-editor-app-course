import { v4 as uuidv4 } from 'uuid';
import { CustomFile } from 'types/CustomFile';
import UserFile from 'types/UserFile';

export const readSingleFile = (file: CustomFile): Promise<UserFile> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const { name = '', webkitRelativePath = '' } = file;
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
