import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Testing Asynchronous Code
// Don't do this!
test('the data is peanut butter', () => {
    function callback(data) {
      expect(data).toBe('peanut butter');
    }
  
    fetchData(callback);
  });
//   Promises
  test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });