import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TranslationProvider } from 'react-google-multi-lang';


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TranslationProvider apiKey={"AIzaSyCnrp920a9GS8cy_WcEc6YEqGRmqbwxLm8"} defaultLanguage="en">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TranslationProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

