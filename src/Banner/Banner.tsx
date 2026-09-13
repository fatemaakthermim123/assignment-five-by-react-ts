
 import bannerLogo from "../assets/banner-stack.png"
 const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:flex justify-center md:justify-between items-center container mx-auto'>
            {/* leftside */}
    <div >
         <h1 className='mb-7 font-extrabold text-4xl'>Build Your Ideal<br/>
          <span className='bg-linear-to-r  from-[#FF5722] to-[#7C3AED] 
          bg-clip-text text-transparent'>Development Stack</span></h1>
         <p className='mb-7'>Explore frontend, backend, database, and tooling options,<br/>
       compare them side by side, and put together the stack that fits your<br/>
          next project.</p>
         <div className='flex gap-3'>
            <button className='text-white  rounded-xl w-44 h-10 bg-linear-to-r 
             from-[#FF5722] to-[#EC4899]
            hover:scale-105 transition duration-200'>Explore Technologies</button>
            <button className="rounded-xl w-44 h-10 bg-amber-50 border-amber-50
             hover:bg-gray-100 hover:scale-105 transition duration-200"
          >Learn more</button>
            </div>
            </div>
                 {/* rightside */}
     <div>
          <img className='' src={bannerLogo} alt='BannerLogo'/>
     </div>

        </div>
    );
 };
 
 export default Banner;