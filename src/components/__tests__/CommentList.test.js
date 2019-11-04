import React from 'react';
import { CommentList } from '../CommentList';
import { shallow } from 'enzyme';
import { CommentBox } from '../CommentBox';

describe('CommentList', () => {
    xit('should add an item when the comment box is submitted', function() {
        const value = 'new comment here';
        const commentBox = shallow(<CommentBox />);
        commentBox.find('textarea').simulate('change', {
            target: { value }
        });
        commentBox.update();
        commentBox.find('form').simulate('submit');
        commentBox.update();

        const commentList = mount(<CommentList comments={comments} />);
        expect(commentList.find('li').length).toEqual(1);
    });
});
