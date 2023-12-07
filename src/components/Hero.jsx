import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name='Hero' className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#F8C322] font-bold p-2'>
          CREATING DIGITAL SOLUTIONS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Transforming Ideas into Digital Reality.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Offering Services in
          </p>
          <Typed
            className='md:text-5xl text-[#F8C322] sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Web Dev', ' Websites', 'Mobile Dev', 'Digital MKT']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-[#F3F0CA]'>Empowering your online presence with top-notch digital solutions for web and mobile platforms.</p>
        <button className='bg-[#F8C322] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><Link to='contact' smooth={true} duration={500}>Ask for a quote</Link></button>
      </div>
    </div>
  );
};

export default Hero;
