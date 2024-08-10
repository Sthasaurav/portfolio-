import React from 'react'
import { FaGithub, FaLinkenin } from 'react-icons/fa';

function SocialLink() {
    return (
        <div className='flex flex-col top-[35%] left-0 fixed '>
            <ul>
                <li className='flex justify-between items-center w-40 h-1/4 ox-4 '>
                    <a href="">LinkenIn <FaLinkenin /></a>
                </li>
            </ul>

        </div>
    )
}

export default SocialLink
