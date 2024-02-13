import React from 'react';
import {Link} from "react-router-dom";

import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={css.Navigation}>
            <Link to={'todos'}>todos</Link>
            <Link to={'albums'}>albums</Link>
            <Link to={'comments'}>comments</Link>
        </div>
    );
};

export {Navigation};