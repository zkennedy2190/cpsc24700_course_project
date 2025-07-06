import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-purple-900 text-white p-4 flex justify-between">
            <h1 className="font-bold text-lg">Elderwood & Ember</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/catalog" className="hover:underline">Catalog</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;