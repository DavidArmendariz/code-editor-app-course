import { v4 as uuidv4 } from 'uuid';

export const readSingleFile = (file) => {
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
