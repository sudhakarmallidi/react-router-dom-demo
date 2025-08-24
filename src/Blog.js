import React from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <p>Welcome to the blog page!.... {id} </p>
        </div>
    );
}

export default Blog;