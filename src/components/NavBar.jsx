import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
function NavBar() {

    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Porfolio'
        },
        {
            id: 4,
            link: 'Experirnce'
        },
        {
            id: 5,
            link: 'Contact'
        },]
    return (
        <nav className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed top-0 left-0 z-50'>
            <h1 className='text-5xl font-signature ml-2 '>Saurav</h1>
            <ul className=' sphidden md:flex flex-1 justify-center space-x-6ace-x-6 hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='hover:text-gray-500 text-gray-300 hover:scale-150 duration-200 cursor-pointer px-4 '>{link}</li>

                ))}
                {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Sign Up
            </button> */}

                {/* <li className='hover:text-gray-500 hover:scale-150 duration-200 cursor-pointer'>Home</li>
            <li className='hover:text-gray-500 hover:scale-150 duration-200 cursor-pointer'>About</li>
            <li className='hover:text-gray-500 hover:scale-150 duration-200 cursor-pointer'>pointer</li> */}


            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden  hover:text-gray-500 duration-200'>

                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (<ul className='flex flex-col justify-center item-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({ id, link }) => (
                    <li key={id} className='hover:text-gray-500 hover:scale-150 duration-200 cursor-pointer text-4xl px-4 py-6'>{link}</li>

                ))}


            </ul>)}


        </nav>
    );
}

export default NavBar;
