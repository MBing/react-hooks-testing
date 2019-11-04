import { useState } from 'react';

const useComments = () => {
    const [comments, setComments] = useState([]);

    return { comments, setComments };
};

export { useComments };
