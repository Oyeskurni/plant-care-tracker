import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ navItems }) => {
    return (
        <div className="md:hidden bg-emerald-800">
            <div className="pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-amber-200 hover:bg-emerald-600 hover:border-amber-500 hover:text-white text-base font-medium"
                    >
                        {item.name}
                    </Link>
                ))}

                {/* Buttons */}
                <div className="mt-4 pt-4 border-t border-emerald-700 space-y-4 px-3">
                    

                    {/* Login Button */}
                    <Link
                        to="/login"
                        className="block w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 shadow-sm text-center"
                    >
                        Login
                    </Link>

                    {/* Register Button */}
                    <Link
                        to="/register"
                        className="block w-full border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 shadow-sm text-center"
                    >
                        Register
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default MobileMenu;
