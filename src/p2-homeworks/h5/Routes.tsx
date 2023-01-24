import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
import JuniorPlus from './pages/JuniorPlus';
import PreJunior from './pages/PreJunior';




export function Routess() {
    return (

        <Routes>
            <Route path='/PreJunior' element={<PreJunior />} />
            <Route path='/Junior' element={<Junior />} />
            <Route path='/JuniorPlus' element={<JuniorPlus />} />
            <Route path='/' element={<Error404 />} />
        </Routes>

    )
}


