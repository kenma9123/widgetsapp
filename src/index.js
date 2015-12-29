import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { configureStore, renderDevTools } from './store/configureStore';
import './styles/index.scss';

const store = configureStore();

ReactDOM.render(
  <div className="section root">
    <Provider store={store}>
      <App />
    </Provider>

    {renderDevTools(store)}
  </div>,
  document.getElementById('root')
);
