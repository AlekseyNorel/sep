import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {commentsService} from "../../services/commentsService";
import {Post} from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const {state: {postId}} = useLocation()



    useEffect(() => {
        commentsService.getPostOfComment(postId).then(({data})=>setPosts(data))
    }, [postId]);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};