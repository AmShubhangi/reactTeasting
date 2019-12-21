import React from 'react';
import { mount, EnzymeAdapter } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import moxios from 'moxios';

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments & display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    wrapped.find('#dd').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual();
        done();
        wrapped.unmount();
    }, 100);
})