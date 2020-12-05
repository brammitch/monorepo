import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders local button', () => {
  render(<App />);
  const localButtonElement = screen.getByTestId('local-button');
  expect(localButtonElement).toBeInTheDocument();
});

test('renders core button', () => {
  render(<App />);
  const coreButtonElement = screen.getByTestId('core-button');
  expect(coreButtonElement).toBeInTheDocument();
});
