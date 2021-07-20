import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.menu_bar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}

export default Header;