import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import { store } from './store/app/app/store';
import { Provider } from 'react-redux';
import { store } from './store/app/store';

// Set dark theme as default for web3 aesthetic
document.documentElement.classList.add('dark');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
