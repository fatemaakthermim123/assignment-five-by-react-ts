import React from 'react';
import navLogo from "../assets/logo-text.png"
const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white'>
           <div className='flex justify-between max-w-6xl mx-auto '>

            <div className='flex gap-3 items-center'>
                <img src={navLogo}/>
              
            </div>

            <ul className='flex gap-3 items-center'>
                <li className='text-[#DB2777]'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='flex'>
                <button className='btn rounded-full' >Sign In</button>
                <button className="btn btn-secondary rounded-full">Sign Up</button>
            </div>

        </div>

        </nav>
    );
};

export default Navbar;