import React from 'react';

const PostDetails = ({postDetails}) => {
    const {id,userId,body,title} = postDetails;
    return (
        <>
            <hr/>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>body: {body}</div>
            <div>title: {title}</div>
        </>
    );
};

export {PostDetails};