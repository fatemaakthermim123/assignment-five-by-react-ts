 
 import fooretlogo from '../assets/logo-text.png'
 const Footer = () => {
    return (
        <div>
            <div className=' flex justify-between mt-50 container mx-auto mb-16'>
                <div>
                    
                    <img className='mb-3.5' src={fooretlogo} alt='footerLogo'/>
                    <p className=' text-gray-500 mb-5'>Curated tools, technologies, and resources for developers building
                      <br/>modern software.</p>
                    <ul className='flex gap-2.5 text-gray-500 text-xl'>
                        <li><a href="https://github.com/">
                        GitHub</a></li>
                        <li><a href="https://x.com/">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/feed/">LinkedIn</a></li>
                    </ul>
                </div>

                
                <div className='hidden md:block'> 
                    <h1 className='text-xl  mb-3.5'>PRODUCT</h1>
                    <ul className=' text-gray-500 grid gap-1'>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                

                
                <div className='hidden md:block'>
            
                    <h1  className='text-xl  mb-3.5'>COMPANY</h1>
                    <ul className=' text-gray-500 grid gap-1'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                

                <div className='hidden md:block'>
                    <h1  className='text-xl mb-3.5'>LEGAL</h1>
                    <ul className=' text-gray-500 grid gap-1'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    </div>
                
            </div>
            <div className=' flex justify-between items-start md:items-center  mb-10 mt-26'>
                <p className='text-gray-500 text-xl ml-15'>© 2026 Dev Stack. All rights reserved.</p>
            <div className='flex justify-end text-xl text-gray-500  gap-3 mr-6'>
                <p>Privacy</p>
                <p>Terms</p>
                </div>
            </div>
            </div>
        
    );
 };
 
 export default Footer;