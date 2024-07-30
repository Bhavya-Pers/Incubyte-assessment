import { render, screen } from '@testing-library/react';
import StringCalculator from './StringCalculator';

test('renders heading String Calculator', () => {
  render(<StringCalculator />);
  const linkElement = screen.getByText(/String Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
