import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar/SideNavbar';

const Root = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white h-screen flex overflow-hidden text-sm">
                <SideNavbar></SideNavbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;