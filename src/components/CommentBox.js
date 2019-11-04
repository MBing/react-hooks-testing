import React, { useState } from 'react';

const CommentBox = props => {
    const [comment, setComment] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // only add a comment if there is one
        if (comment) {
            props.setComments([...props.comments, comment]);
        }

        setComment('');
    };

    return (
        <form data-testid="commentbox" onSubmit={handleSubmit}>
            <h4>Add a comment</h4>
            <textarea
                onChange={e => setComment(e.target.value)}
                value={comment}
            />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
};

export { CommentBox };
