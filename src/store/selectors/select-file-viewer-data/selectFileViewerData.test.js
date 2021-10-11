import selectFileViewerData from './selectFileViewerData';

test('should convert a list of user files to the file viewer structure', () => {
  const userFiles = [
    {
      id: '1',
      name: 'index1.js',
      relativePath: 'test/index1.js',
      code: 'console.log("Hello world!")',
      extension: 'js',
    },
    {
      id: '2',
      name: 'index2.js',
      relativePath: 'test/subfolder/index2.js',
      code: 'console.log("Hello world!")',
      extension: 'js',
    },
    {
      id: '3',
      name: 'index3.js',
      relativePath: 'test/index3.js',
      code: 'console.log("Hello world!")',
      extension: 'js',
    },
    {
      id: '4',
      name: 'index4.js',
      relativePath: 'test/subfolder/another-subfolder/index4.js',
      code: 'console.log("Hello world!")',
      extension: 'js',
    },
  ];
  const state = {
    files: {
      userFiles,
    },
  };
  const expectedResult = {
    id: expect.any(String),
    name: 'test',
    children: [
      {
        id: '1',
        name: 'index1.js',
        extension: 'js',
      },
      {
        id: expect.any(String),
        name: 'subfolder',
        children: [
          {
            id: '2',
            name: 'index2.js',
            extension: 'js',
          },
          {
            id: expect.any(String),
            name: 'another-subfolder',
            children: [{ id: '4', name: 'index4.js', extension: 'js' }],
          },
        ],
      },
      {
        id: '3',
        name: 'index3.js',
        extension: 'js',
      },
    ],
  };
  console.log(JSON.stringify(selectFileViewerData(state), null, 2));
  expect(selectFileViewerData(state)).toEqual(expectedResult);
});
