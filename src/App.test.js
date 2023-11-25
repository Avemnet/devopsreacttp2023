import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText((_, element) => element.textContent === 'learn react')).toBeInTheDocument();
});
