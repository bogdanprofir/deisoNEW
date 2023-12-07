import React from 'react';
import DEISO from '../assets/DEISO.svg'
import { Link } from 'react-scroll';

const Analytics = () => {
  return (
    <div name='whyUs' className='w-full h-screen bg-[#F8C322] py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='rounded-xl w-[500px] mx-auto my-4' src={DEISO} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-black font-bold '>Why choose Deiso Consulting?</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Competence, Quality Services and Customer Focused Approach</h1>
          <p className=' indent-4'>
          DEISO offers comprehensive web and mobile development services, alongside dynamic digital marketing. We craft cutting-edge e-commerce platforms, complete with secure payment gateways. Placing clients at the forefront, we're committed to exceeding expectations through bespoke services and enduring partnerships.
          </p>
          <button className='bg-[#0C0530] text-[#F8C322] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><Link to='contact' smooth={true} duration={500}>Ask for a quote</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;