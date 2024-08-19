import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve('Hello, world!'),
  })
);

test('renders loading state initially', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

test('renders fetched message', async () => {
  render(<App />);

  const messageElement = await waitFor(() => screen.getByText('Hello, world!'));
  expect(messageElement).toBeInTheDocument();
});

test('handles fetch error', async () => {
  // Override the mock to simulate a failed fetch
  global.fetch.mockImplementationOnce(() =>
    Promise.reject(new Error('Fetch failed'))
  );

  render(<App />);

  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();

  // Check console.error was called
  await waitFor(() => {
    expect(console.error).toHaveBeenCalledWith('Error:', new Error('Fetch failed'));
  });
});
