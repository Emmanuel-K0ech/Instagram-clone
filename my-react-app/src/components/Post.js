import React, { useState } from 'react';

const Post = ({ post, addLike, addComment }) => {
    const [comment, setComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        addComment(post.id, comment);
        setComment('');
    };

    return (
        <div className="post">
            <h2>{post.username}</h2>
            <img src={post.imageUrl} alt="Post" />
            <button onClick={() => addLike(post.id)}>Like ({post.likes})</button>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <button type="submit">Post</button>
            </form>
            <div className="comments">
                {post.comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </div>
        </div>
    );
};

export default Post;