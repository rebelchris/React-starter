import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default text', () => {
  render(<App />);
  const defaultText = screen.getByText(/The counter is now on/g);
  expect(defaultText).toBeInTheDocument();
});

test('should default to zero', () => {
  render(<App />);
  const defaultText = screen.getByText('The counter is now on 0');
  expect(defaultText).toBeInTheDocument();
});

test('should update the count', async () => {
  render(<App />);
  const button = await screen.findByRole('button');
  button.click();
  const plusText = screen.getByText('The counter is now on 1');
  expect(plusText).toBeInTheDocument();
});
