import closeFile from './closeFile';

describe('closeFile', () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should close the only active file', () => {
    getState.mockReturnValue({ files: { activeFilesIds: ['1'], editorActiveFile: null } });
    closeFile('1')(dispatch, getState);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: null }]);
    expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: '1' }]);
  });
});
