import React, { useState } from 'react';

const CommentBox = () => {
    const [comment, setComment] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        setComment('');
    };

    return (
        <form data-testid="commentbox" onSubmit={e => handleSubmit(e)}>
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
