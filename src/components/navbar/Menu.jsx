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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/865378ab-7d95-42a2-910c-4d5375b74903.png"
                                alt="Mango leaf logo"
                                className="h-8 w-8 rounded-full"
                            />
                            <span className="ml-2 text-xl font-bold">MangoCare</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="border-transparent text-amber-200 hover:border-amber-500 hover:text-amber-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <ThemeToggleButton /> */}
                        <input type="checkbox" defaultChecked className="toggle theme-controller" value="dark" />

                        <Link to="/login" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                            Login
                        </Link>
                        <Link to="/register" className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                            Register
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <MobileBtn setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <MobileMenu setMobileOpen={setMobileOpen} navItems={navItems} />
            )}
        </nav>
    );
};

export default Menu;
