import React from 'react';

const CommentList = props => {
    const { comments } = props;

    return (
        <ul data-testid="commentlist">
            {comments &&
                comments.map((comment, i) => (
                    <li key={i + comment} data-testid={`comment-${i}`}>
                        {comment}
                    </li>
                ))}
        </ul>
    );
};

export { CommentList };
