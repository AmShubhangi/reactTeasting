import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

Enzyme.configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />)
});

it('shows a comment box', () => {
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
    expect(wrapped.find(CommentList).length).toEqual(1);
    // Tetsing
    // const div = document.createElement('div');

    // ReactDOM.render(<App />, div);
    // // You will get this text in terminal
    // console.log(div.innerHTML);
    // expect(div.innerHTML).toContain('Comment Box');

    // ReactDOM.unmountComponentAtNode(div);
});