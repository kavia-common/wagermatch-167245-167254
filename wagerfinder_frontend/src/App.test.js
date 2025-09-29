import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gamefinder brand', () => {
  render(<App />);
  const brand = screen.getByText(/gamefinder/i);
  expect(brand).toBeInTheDocument();
});
