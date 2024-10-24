import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon header', () => {
  render(<App />);
  const headerElement = screen.getAllByText(/Little Lemon/i)[0]; // Get the first instance
  expect(headerElement).toBeInTheDocument();
});

test('renders Book a Table button', () => {
  render(<App />);
  const bookTableButton = screen.getByRole('link', { name: /Book a Table/i });
  expect(bookTableButton).toBeInTheDocument();
});

test('renders menu section', () => {
  render(<App />);
  const menuHeader = screen.getByText(/Our Specials/i);
  expect(menuHeader).toBeInTheDocument();
});

test('renders testimonials section', () => {
  render(<App />);
  const testimonialsHeader = screen.getByText(/What Our Customers Say/i);
  expect(testimonialsHeader).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutSection = screen.getByRole('heading', { name: /About/i, level: 2 });
  expect(aboutSection).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
});
