import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'Home', path: '/' },
        { id: 3, link: 'Project', path: '/project' },
        { id: 4, link: 'Experience', path: '/experience' },
        { id: 2, link: 'About', path: '/about' },

        { id: 5, link: 'Contact', path: '/contact' },
    ];

    return (
        <nav className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed top-0 left-0 z-50'>
            <h1 className='text-5xl font-signature ml-2 '>Saurav</h1>
            
            {/* Desktop Menu */}
            <ul className='hidden md:flex flex-1 justify-center space-x-6'>
                {links.map(({ id, link, path }) => (
                    <li key={id} className='hover:text-gray-500 text-gray-300 hover:scale-150 duration-200 cursor-pointer px-4'>
                        <Link to={path} onClick={() => setNav(false)}>{link}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Toggle Button */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden hover:text-gray-500 duration-200'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link, path }) => (
                        <li key={id} className='hover:text-gray-500 hover:scale-150 duration-200 cursor-pointer text-4xl px-4 py-6'>
                            <Link to={path} onClick={() => setNav(false)}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
