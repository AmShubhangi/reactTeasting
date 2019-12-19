import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './components/App';
import Root from './Root';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.querySelector('#root')
);