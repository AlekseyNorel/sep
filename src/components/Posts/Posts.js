import React, {useEffect, useState} from 'react';
import {postService} from "../../servises/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};