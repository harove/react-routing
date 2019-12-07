import React, { useState, useEffect } from 'react';
import { findPostById } from '../../client/post.client';

const PostDetail = (props) => {
    const { id } = props.match.params;
    const [post, setPost] = useState({});

    useEffect(() => {
        findPostById(id).then((response) => {
            const posts = response.data.data;
            setPost(posts);
        }).catch((err) => {
            debugger;
        })
       return () => {
            // alert('Chao private');
       } 
    }, []);

    return (
        <div className="text-center">
            <h1>{post.id} | {post.title}</h1>
            <p>{post.description}</p>
            <img width="100" src={post.image_url}/>
        </div>
    );
};

export default PostDetail;