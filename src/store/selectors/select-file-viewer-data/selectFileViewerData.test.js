import selectFileViewerData from './selectFileViewerData';

test('should convert a list of user files to the file viewer structure', () => {
  const userFiles = [
    {
      id: '1',
      name: 'index1.jsx',
      relativePath: 'test/subfolder/another-subfolder/index1.jsx',
      extension: 'jsx',
    },
    {
      id: '2',
      name: 'index2.js',
      relativePath: 'test/subfolder/index2.js',
      extension: 'js',
    },
    {
      id: '3',
      name: 'index3.js',
      relativePath: 'test/subfolder2/index3.js',
      extension: 'js',
    },
    {
      id: '4',
      name: 'index4.ts',
      relativePath: 'test/subfolder3/another-subfolder/index4.ts',
      extension: 'ts',
    },
    {
      id: '5',
      name: 'index5.js',
      relativePath: 'test/index5.js',
      extension: 'js',
    },
    {
      id: '6',
      name: 'index6.vue',
      relativePath: 'test/index6.vue',
      extension: 'vue',
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
        id: expect.any(String),
        name: 'subfolder',
        children: [
          {
            id: expect.any(String),
            name: 'another-subfolder',
            children: [{ id: '1', name: 'index1.jsx', extension: 'jsx' }],
          },
          {
            id: '2',
            name: 'index2.js',
            extension: 'js',
          },
        ],
      },
      {
        id: expect.any(String),
        name: 'subfolder2',
        children: [
          {
            id: '3',
            name: 'index3.js',
            extension: 'js',
          },
        ],
      },
      {
        id: expect.any(String),
        name: 'subfolder3',
        children: [
          {
            id: expect.any(String),
            name: 'another-subfolder',
            children: [
              {
                id: '4',
                name: 'index4.ts',
                extension: 'ts',
              },
            ],
          },
        ],
      },
      {
        id: '5',
        name: 'index5.js',
        extension: 'js',
      },
      {
        id: '6',
        name: 'index6.vue',
        extension: 'vue',
      },
    ],
  };

  expect(selectFileViewerData(state)).toEqual(expectedResult);
});
