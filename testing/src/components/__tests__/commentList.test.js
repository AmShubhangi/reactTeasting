import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from '../CommentList';
import Root from '../../Root';

Enzyme.configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    wrapped = mount(
        <Root initialState={initialState}><CommentList /></Root>
    );
});

it('creates one LI per comment', () => {
    console.log(wrapped.find('li').length);
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    console.log("HI Shubhangi, I'm Another commment");
    console.log(wrapped.render().text());

    expect(wrapped.render().text()).toContain('Comment 1')
    expect(wrapped.render().text()).toContain('Comment ')

})