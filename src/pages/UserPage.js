import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import {Users} from "../components/UsersContainer/Users";

const UserPage = () => {
    const {data} = useLoaderData()

    return (
        <div>
            <Outlet/>
            <hr/>
            <Users users={data}/>
        </div>
    );
};

export {UserPage};