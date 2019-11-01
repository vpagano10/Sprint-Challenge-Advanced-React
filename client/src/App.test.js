import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

test('it displays Most Searched Players', () => {
  const { getByText } = render(<App />);
  getByText(/Most Searched Players/i)
})

test('renders without crashing', () => {
  render(<App />);
});
