import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('Currently playing is an item', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Item/i)).toBeInTheDocument();
})
