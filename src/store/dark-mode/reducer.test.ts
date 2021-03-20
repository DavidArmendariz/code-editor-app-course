import { PayloadAction } from '@reduxjs/toolkit';
import darkModeReducer, { initialState, toggleDarkMode } from './reducer';

describe('dark mode reducer', () => {
  test('should return the initial state if no known action is provided', () => {
    expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });
  test('should enable dark mode if it is disabled', () => {
    expect(darkModeReducer(false, toggleDarkMode)).toEqual(true);
  });
  test('should disable dark mode if it is enabled', () => {
    expect(darkModeReducer(true, toggleDarkMode)).toEqual(false);
  });
});
