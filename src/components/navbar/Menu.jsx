import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileBtn from './MobileBtn';
import MobileMenu from './MobileMenu';


const Menu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'All Plants', path: '/allPlants' },
        { name: 'Add Plant', path: '/add-plant' },
        { name: 'My Plants', path: '/my-plant' },
    ];

    return (
        <nav className="bg-emerald-800 text-amber-50 shadow-lg">
            
        </nav>
    );
};

export default Menu;
