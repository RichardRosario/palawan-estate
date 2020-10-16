import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react-django link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/react-django/i);
  expect(linkElement).toBeInTheDocument();
});
