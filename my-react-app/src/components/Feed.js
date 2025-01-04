import React, { useState } from 'react';
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([
        { id: 1, username: 'user1', imageUrl: 'https://via.placeholder.com/150', likes: 0, comments: [] },
        { id: 2, username: 'user2', imageUrl: 'https://via.placeholder.com/150', likes: 0, comments: [] }
    ]);

    const addLike = (id) => {
        setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
    };

    const addComment = (id, comment) => {
        setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
    };

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} addLike={addLike} addComment={addComment} />
            ))}
        </div>
    );
};

export default Feed;
