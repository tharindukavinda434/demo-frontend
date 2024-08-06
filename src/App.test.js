import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mocking the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve('Hello from the API!'),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test('renders the initial loading message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches and displays the message from the API', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/Hello from the API!/i)).toBeInTheDocument();
  });
});

test('handles the fetch error correctly', async () => {
  // Override the fetch implementation to simulate an error
  fetch.mockImplementationOnce(() => Promise.reject(new Error('API failure')));
  
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
  // Optionally check if your error handling updates the UI or logs correctly
  expect(console.error).toHaveBeenCalledWith('Error:', new Error('API failure'));
});
