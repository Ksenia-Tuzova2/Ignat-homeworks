import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
        <Link className='link' to='/PreJunior'>Pre-junior</Link>
        <Link className='link' to='/Junior'>Junior</Link>
        <Link className='link' to='/JuniorPlus'>JuniorPlus</Link>
        </div>
    )
}

export default Header
