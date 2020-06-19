import React from 'react';
import { screen, render} from '@testing-library/react';
import MyInput from '../components/myInput';

test('Component should be checked', () => {
  render(<MyInput />);
  const sampleInput = screen.getByLabelText(/is a sample test?/i);
  expect(sampleInput).toBeChecked();
});
