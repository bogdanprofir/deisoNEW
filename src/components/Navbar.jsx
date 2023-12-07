import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img src="/logo.svg" alt="logo" className='w-[10rem] md:w-[15rem] mt-4' />
      <ul className='hidden md:flex'>
        
        <li className='p-4 hover:cursor-pointer'><Link to='whyUs' smooth={true} duration={500}>Why us?</Link></li>
        <li className='p-4 hover:cursor-pointer'><Link to='services' smooth={true} duration={500}>Services</Link></li>
        
        <li className='p-4 hover:cursor-pointer text-[#0C0530] bg-[#F8C322] rounded-xl'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0C0530] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img src="/logo.svg" alt="logo" className='w-[10rem]' />
        <li className='p-4 border-b border-[#F8C322]'><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='p-4 border-b border-[#F8C322]'><Link to='whyUs' smooth={true} duration={500}>Why us?</Link></li>
        <li className='p-4 border-b border-[#F8C322]'><Link to='services' smooth={true} duration={500}>Services</Link></li>
        
        <li className='p-4 bg-[#F8C322] rounded-xl text-[#0C0530]'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
