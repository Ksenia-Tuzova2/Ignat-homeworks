import React from 'react'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from '../h5/Header'; 
import { Routess } from '../h5/Routes';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Pages() {
    return (
        <div>
        
                <header>
                <Link className='link' to='/Header'>Меню</Link>
                <Routes>
                    <Route path='/Header' element={<Header />} />
                </Routes>
            </header>
            <Routess />
        
        </div>
    )
}

export default Pages
