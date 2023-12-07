import React from 'react';
import wDev from '../assets/webDev.svg';
import mDev from '../assets/mobileDev.svg';
import Mkt from '../assets/digitalMkt.svg'
import { Link } from 'react-scroll';

const Cards = () => {
  return (
    <div name='services' className='w-full py-[10rem] px-4 bg-[#0C0530]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full bg-[#F8C322] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] ' src={mDev} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Mobile Development</h2>
              <p className='text-center text-4xl font-bold'>from €799</p>
              <div className='text-center text-[#0C0530] font-medium'>
                  <p className='py-2 border-b border-[#0C0530]  mx-8 mt-8'><span className=' font-bold'>Custom Mobile Apps:</span> Tailored mobile applications crafted to your unique business needs, enhancing user experiences and engagement.</p>
                  <p className='py-2 border-b border-[#0C0530] mx-8'><span className=' font-bold' >Cross-Platform Expertise:</span> Proficient in developing apps for both iOS and Android, ensuring wider reach and compatibility.</p>
                  <p className='py-2 border-b border-[#0C0530] mx-8'> <span className=' font-bold'>Optimized Performance:</span>  High-performing mobile solutions with a focus on speed, security, and a seamless user interface.</p>
              </div>
              <button className='bg-[#0C0530] w-[200px] text-[#F8C322] rounded-md font-medium my-6 mx-auto px-6 py-3'><Link to='contact' smooth={true} duration={500}>Ask for a quote</Link></button>
          </div>
          <div className='w-full shadow-xl bg-[#F8C322] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={wDev} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Web Development</h2>
              <p className='text-center text-4xl font-bold'>from €299</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b border-[#0C0530] mx-8 mt-8'><span className='font-bold'>Stunning Landing Pages:</span> Captivating, mobile-responsive landing pages designed to make a lasting first impression and drive user engagement.</p>
                  <p className='py-2 border-b border-[#0C0530] mx-8'><span className='font-bold'>Web Apps & Portals:</span>Expertise in creating robust, interactive web applications and portals, from e-commerce solutions to data-driven platforms.</p>
                  <p className='py-2 border-b border-[#0C0530] mx-8'><span className='font-bold'>Scalable Solutions:</span> Customized web development solutions designed for scalability, ensuring seamless growth and adaptability for your digital presence.</p>
              </div>
              <button className='bg-[#0C0530] text-[#F8C322] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><Link to='contact' smooth={true} duration={500}>Ask for a quote</Link></button>
          </div>
          <div className='w-full shadow-xl bg-[#F8C322] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] ' src={Mkt} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
              <p className='text-center text-4xl font-bold'>from €499 </p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b border-[#0C0530] mx-8 mt-8'><span className='font-bold'>Branding Excellence:</span> Elevate your brand identity with captivating visuals and messaging, leaving a lasting mark in the digital world.</p>
                  <p className='py-2 border-b border-[#0C0530] mx-8'><span className='font-bold'>SEO Optimization:</span> Enhance your online visibility and search engine rankings with expert search engine optimization strategies.</p>
                  <p className='py-2 border-b border-[#0C0530] mx-8'><span className='font-bold'>Strategic Campaigns:</span> Engage and expand your audience through well-crafted campaigns, driving brand awareness and conversions.</p>
              </div>
              <button className='bg-[#0C0530] w-[200px] text-[#F8C322] rounded-md font-medium my-6 mx-auto px-6 py-3'><Link to='contact' smooth={true} duration={500}>Ask for a quote</Link></button>
          </div>
      </div>
    </div>
  );
};

export default Cards;