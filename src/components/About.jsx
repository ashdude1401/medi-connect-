import React from 'react';
import aboutImg from '../images/img1.jpg';

const About = () => {
  return (
    <section className="text-gray-600 body-font" id='aboutUs'>
  <div className="container mx-auto flex pr-5 pl-24 py-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900">About Us
      </h1>
      <p className="mb-8 leading-relaxed font-serif text-xl">
MediConnect is a revolutionary web app that aims to bridge the gap between individuals with excess medicines and the organizations in need of them. <br /> <br />

Together, let's transform surplus medicines into life-changing donations. Join MediConnect today and be a part of our mission to empower health and save lives.</p>
      <div className="flex justify-center">
      <button
        className="text-md rounded-full bg-transparent px-4 py-2 font-medium text-violet-500 transition-all disabled:bg-gray-400 border border-violet-500 hover:bg-violet-500 hover:text-white">
        Know More
      </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="aboutUs" src={aboutImg} />
    </div>
  </div>
</section>
  )
}

export default About;