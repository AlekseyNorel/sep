import React from 'react';
import {Outlet} from "react-router-dom";

import {Navigation} from "../components/Nav/Navigation";

const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};