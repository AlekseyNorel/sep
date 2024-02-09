import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../services/commentsService";

const CommentsForm = ({setComments}) => {
    const {reset,handleSubmit,register} =useForm();

    const save = (comment) => {
        commentsService.create(comment).then(({data}) => setComments(prev => [...prev, data]))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={"postId"} {...register('postId')}/>
                <input type="text" placeholder={"id"} {...register('id')}/>
                <input type="text" placeholder={"name"} {...register('name')}/>
                <input type="text" placeholder={"email"} {...register('email')}/>
                <input type="text" placeholder={"body"} {...register('body')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {CommentsForm};