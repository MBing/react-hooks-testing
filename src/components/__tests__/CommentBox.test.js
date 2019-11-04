import React from 'react';
import { CommentBox } from '../CommentBox';
import { shallow } from 'enzyme';

describe('CommentBox', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<CommentBox />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('should have a text area and a button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    describe('Text Area', () => {
        let value;

        beforeEach(() => {
            value = 'new comment here';
            wrapped.find('textarea').simulate('change', {
                target: { value }
            });
            wrapped.update();
        });

        it('should have a text area that users can type in', () => {
            expect(wrapped.find('textarea').prop('value')).toEqual(value);
        });

        xit('should empty the textarea after the input is submitted', () => {
            wrapped.find('form').simulate('submit');
            wrapped.update();

            expect(wrapped.find('textarea').prop('value')).toEqual('');
        });
    });
});
