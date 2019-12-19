import React from 'react';
import Enzyme from 'enzyme';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import Root from '../../Root';

Enzyme.configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root><CommentBox /></Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and button', () => {
    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));
    expect(wrapped.find('textarea').length)
    expect(wrapped.find('button').length)
})

describe('Shubhangi is writing testcases for textArea & Button', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });

    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value'));
    });
})
