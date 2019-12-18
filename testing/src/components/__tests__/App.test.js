import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
    // Tetsing
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    // You will get this text in terminal
    console.log(div.innerHTML);

    ReactDOM.unmountComponentAtNode(div);
});