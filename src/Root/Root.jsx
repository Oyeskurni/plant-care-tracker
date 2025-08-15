import React from 'react'
import { Outlet } from 'react-router'
import Menu from '../components/navbar/Menu'
import Footer from '../components/Footer'


const Root = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
