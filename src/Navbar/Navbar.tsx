
import navLogo from "../assets/logo-text.png"
import { RxHamburgerMenu } from 'react-icons/rx';
const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white'>
           <div className='flex justify-evenly md:justify-between w-full md:container mx-auto'>

            <div className='hidden md:flex  items-center'>
                <img src={navLogo} alt='navLogo'/>
            </div>

             <button className='md:hidden'><RxHamburgerMenu /></button>

            <ul className='hidden md:flex gap-3 items-center'>
                <li className='text-[#DB2777]'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
             

             <div className='md:hidden'>
                <img src={navLogo} alt='navLogo'/>
            </div>

            <div className='flex'>
                <button className=' btn rounded-full' >Sign In</button>
                <button className="btn btn-secondary rounded-full">Sign Up</button>
            </div>

        </div>

        </nav>
    );
};

export default Navbar;