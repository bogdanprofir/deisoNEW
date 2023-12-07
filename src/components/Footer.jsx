import React from 'react';
import {
 
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div className='flex flex-col'>
      <img src="/logo.svg" alt="logo" className='w-[25rem] h-[11rem] md:w-[18rem] mt-4' />
        
        <div className='flex justify-between md:w-[75%] my-1'>
           <a href="https://www.facebook.com/deisoconsulting" target='blank'> <FaFacebookSquare size={30} /></a>
           <a href="https://www.linkedin.com/in/bogdanthedeveloper/"> <FaLinkedin size={30} /></a>
            <a href="http://twitter.com"><FaTwitterSquare size={30} /></a>
           <a href="http://github.com"> <FaGithubSquare size={30} /></a>
            <a href="http://instagram.com"><FaInstagram size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-[#F8C322]'>Services</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>Web Dev</li>
            <li className='py-2 text-sm'>Web Design</li>
            <li className='py-2 text-sm'>Mobile Dev</li>
            <li className='py-2 text-sm'>Digital Marketing</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#F8C322]'>Contact</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>Phone: +40787888700</li>
            <li className='py-2 text-sm'>Email: office@deisoconsulting.eu </li>
            <li className='py-2 text-sm'>Address: Lascar Catargi, nr.18A</li>
            <li className='py-2 text-sm'>Iasi, Romania</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#F8C322]'>Company</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#F8C322]'>Legal</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;