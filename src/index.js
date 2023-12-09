import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

// Ensure createRoot is called with a valid DOM element
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found in the document.');
}
