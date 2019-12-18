import React from 'react';
import Enzyme from 'enzyme';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('has a text area and button', () => {
    const wrapped = mount(<CommentBox />);

    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));
})