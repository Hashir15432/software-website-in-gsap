import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from "./Components/logo.png"
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set page title and favicon using the imported logo
document.title = 'Spicaware';
const setFavicon = (icon) => {
  const link = document.querySelector("link[rel='icon']") || document.createElement('link');
  link.rel = 'icon';
  link.href = icon;
  document.head.appendChild(link);
};
setFavicon(logo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
