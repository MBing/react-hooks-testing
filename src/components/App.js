import React from 'react';
import { CommentBox } from './CommentBox';
import { CommentList } from './CommentList';
import { useComments } from '../useComments';

const App = () => {
    // FIXME: when using a useState in separate components, somehow they weren't updated properly, so a common parent is necessary!
    const { comments, setComments } = useComments();

    return (
        <div data-testid="app">
            <CommentBox setComments={setComments} comments={comments} />
            <CommentList comments={comments} />
        </div>
    );
};

export { App };
