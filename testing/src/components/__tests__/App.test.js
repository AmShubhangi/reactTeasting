import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from 'components/CommentList';

Enzyme.configure({ adapter: new Adapter() });

it('shows a comment box', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
    // Tetsing
    // const div = document.createElement('div');

    // ReactDOM.render(<App />, div);
    // // You will get this text in terminal
    // console.log(div.innerHTML);
    // expect(div.innerHTML).toContain('Comment Box');

    // ReactDOM.unmountComponentAtNode(div);
});


it('shows a comment List', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);
    // Tetsing
    // const div = document.createElement('div');

    // ReactDOM.render(<App />, div);
    // // You will get this text in terminal
    // console.log(div.innerHTML);
    // expect(div.innerHTML).toContain('Comment Box');

    // ReactDOM.unmountComponentAtNode(div);
});