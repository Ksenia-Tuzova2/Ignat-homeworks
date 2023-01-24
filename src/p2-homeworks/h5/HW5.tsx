import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import  { Routess}  from './Routes'


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routess/>

            </HashRouter>
        </div>
    )
}

export default HW5
