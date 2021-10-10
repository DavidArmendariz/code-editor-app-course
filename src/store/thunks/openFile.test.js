import openFile from './openFile';

describe('openFile', () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should not open the file if it has children', () => {
    const node = { id: '1', children: [{ id: '2' }] };
    openFile(node)(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
  });
});
