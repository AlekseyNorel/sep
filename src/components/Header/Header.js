import React from 'react';

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <h1>Rick&Morthy</h1>
        </div>
    );
};

export {Header};