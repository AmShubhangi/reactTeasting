import React from 'react';
import Enzyme from 'enzyme';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

it('has a text area and 3 button', () => {
    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(3)
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
