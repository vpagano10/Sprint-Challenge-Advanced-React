import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

test('it displays World Cup', () => {
  const { getByText } = render(<App />);
  getByText(/World Cup/i)
})

test('it displays Most Searched Players', () => {
  const container = render(<App />);
  container.getByText(/Most Searched Players/i)
})

// test('it displays 100', () => {
//   const { getByText } = render(<App />);
//   getByText(/100/i)
// })

// test('it displays United States mulitple times', () => {
//   const { getAllByText } = render(<App />);
//   getAllByText(/United States/i)
// })

// test('it displays Alex Morgan', () => {
//   const { getByText } = render(<App />);
//   getByText(/Alex Morgan/i)
// })

// test('it displays Megan Rapinoe', () => {
//   const { getByText } = render(<App />);
//   getByText(/Megan Rapinoe/i)
// })

test('renders without crashing', () => {
  render(<App />);
});
