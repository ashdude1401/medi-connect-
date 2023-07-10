import React from 'react';
import { useNavigate } from "react-router-dom";
import Mockup from '../images/hero-img2.png';
import Pill from '../images/hero-pill.png';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  return (
<section className='bg-violet-500'>
    <div className='grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12'>
        <div className='lg:col-span-7'>
            <h1 className='font-extrabold text-center text-white text-7xl p-10 font-heading'>
            Surplus Meds? <br /> Donate Today
            </h1>
            <h1 className='font-bold text-center text-white text-2xl p-5'>
                Your Surplus, Their Lifeline
            </h1>
            <p className='font-normal text-center text-white text-xl p-5'>
            With MediConnect, you can make a tangible <br /> impact by sharing your unused or unexpired medicines.
            </p>
        </div>  

        <div className="hidden lg:mt-0 lg:col-span-5 lg:row-span-3 pt-5 lg:flex max-w-full h-auto">
             <img src={Mockup} alt="mockup" />
         </div>  

         <div className="flex items-center lg:col-span-7 p-7 m-auto">
      <button
        onClick={() => {navigate('/medicineForm')}}
        className="text-md rounded-full bg-white px-4 py-2 font-medium mx-5 text-violet-500 transition-all disabled:bg-gray-400 hover:bg-violet-50">
        Donate Medicine
      </button>
      <button
        onClick={() => {navigate('/bookMedicine')}}
        className="text-md rounded-full bg-violet-500 px-4 py-2 font-medium text-white border border-white transition-all disabled:bg-gray-400
        hover:bg-violet-600">
        Book Medicine
      </button>
    </div>

        <div className="lg:col-span-7 m-auto h-24">
             <img src={Pill} alt="pill" className='h-32' />
         </div>      
    </div>
</section>



  )
}

export default Hero;