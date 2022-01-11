import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './Components/Containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import  {store}    from './State/Store'
ReactDOM.render(
    <Provider store={store}>,
        <App/> </Provider>,
        document.getElementById('root'));
// registerServiceWorker();
