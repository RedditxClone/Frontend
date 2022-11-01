import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
