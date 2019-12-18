import React from 'react';
import Enzyme from 'enzyme';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('has a text area and button', () => {
    const wrapped = mount(<CommentBox />);
    console.log("Shubhangi", wrapped.find('textarea'));
    console.log(wrapped.find('button'));
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1)
})

it('has a textarea that users can type in', () => {
    const wrapped = mount(<CommentBox />);
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
})