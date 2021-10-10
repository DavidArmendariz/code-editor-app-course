import closeFile from './closeFile';

describe('closeFile', () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should close the only active file', () => {
    getState.mockReturnValue({ files: { activeFilesIds: ['1'], editorActiveFile: '1' } });
    closeFile('1')(dispatch, getState);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: null }]);
    expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: '1' }]);
  });

  describe('when there are 2 or more active files', () => {
    it('should remove the other files if we are not closing the editor active file', () => {
      getState.mockReturnValue({ files: { activeFilesIds: ['1', '2'], editorActiveFile: '1' } });
      closeFile('2')(dispatch, getState);
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/removeActiveFile', payload: '2' }]);
    });

    it('should remove the editor active file and set the new editor active file to be the one on the right', () => {
      getState.mockReturnValue({ files: { activeFilesIds: ['1', '2'], editorActiveFile: '1' } });
      closeFile('1')(dispatch, getState);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: '2' }]);
      expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: '1' }]);
    });

    it('should remove the editor active file and set the new editor active file to be the one on the left', () => {
      getState.mockReturnValue({ files: { activeFilesIds: ['1', '2'], editorActiveFile: '2' } });
      closeFile('2')(dispatch, getState);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: '1' }]);
      expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: '2' }]);
    });
  });
});
