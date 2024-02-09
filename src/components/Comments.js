import React from 'react';
import {Comment} from "./Comment";

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(com => <Comment key={com.id} comment={com} />)}
        </div>
    );
};

export {Comments};