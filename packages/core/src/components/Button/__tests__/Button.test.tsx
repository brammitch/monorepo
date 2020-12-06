import { render, screen } from '@testing-library/react';
import { BlueButton, RedButton } from '..';

test('renders BlueButton', () => {
  render(<BlueButton label="Test" />);
  const coreButtonElement = screen.getByTestId('core-button');
  expect(coreButtonElement).toBeInTheDocument();
});

test('renders RedButton', () => {
  render(<RedButton label="Test" />);
  const coreButtonElement = screen.getByTestId('core-button');
  expect(coreButtonElement).toBeInTheDocument();
});
