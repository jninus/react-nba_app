import React from 'react'
import style from './header.css'
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import SideNav  from './SideNav/sideNave'

const Header = (props) => {

    const logo = () => (
        <Link to="/" className={style.logo}>
            <img alt="NBA logo" src="/images/nba_logo.png" />
        </Link>
    )

    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars" 
            onClick={props.onOpenNav}
            style={{
                color: '#dfdfdf',
                padding: '10px',
                cursor: 'pointer'
            }} />
        </div>
    )


    return (
        <header className={style.header}>
            <SideNav {...props}></SideNav>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )

}

export default Header;