import React, { useState } from 'react';

import logo from '../Logos/logo.png';
import { useNavigate } from 'react-router-dom';
// import SignupModal from '../components/SignupModal'
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/login')
  }
  const handleSignup = ()=>{
    navigate('/signup')
  }

  const handleHome = () => {
    navigate('/')
  }
  
  const [showModal, setShowModal] = useState(false);

const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};
  return (
    <nav className="bg-white px-6 py-2 shadow-lg">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <a href="/" className="flex items-center">
        <img src={logo} className="w-16" alt="Header Logo" />
        <p className="hidden self-center text-lg font-semibold sm:block pl-3">
          Medi⇿Connect
        </p>
      </a>
      <div className="hidden md:flex">
        <div
          className="flex flex-col gap-8 rounded-lg border border-gray-100 bg-black p-4 md:mt-0 md:flex-row md:border-0 md:bg-white md:text-sm md:font-medium" style={{paddingLeft: "200px", fontSize: "17px"}}>
          <a href="#Home" onClick={handleHome}
            className="block rounded py-2 pr-4 pl-3 font-heading text-gray-700 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-violet-500 md:dark:hover:bg-transparent">Home</a>

          <a href="#aboutUs" onClick={handleHome}
            className="block rounded py-2 pr-4 pl-3 font-heading text-gray-700 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-violet-500 md:dark:hover:bg-transparent">About Us</a>

          <a href="#procedure" onClick={handleHome}
            className="block rounded py-2 pr-4 pl-3 font-heading text-gray-700 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-violet-500 md:dark:hover:bg-transparent">Procedure</a>

          <a href="#contactUs" onClick={handleHome}
            className="block rounded py-2 pr-4 pl-3 font-heading text-gray-700 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-violet-500 md:dark:hover:bg-transparent">Contact Us</a>
        </div>
      </div>
    </div>
    <div className="flex items-center">
      <button onClick={handleLogin}
        className="text-md rounded-full bg-transparent px-4 py-2 font-medium mx-5 text-violet-500 transition-all disabled:bg-gray-400  border border-violet-500 hover:bg-violet-50">
        Login
      </button>
      <button onClick={handleSignup}
        className="text-md rounded-full bg-violet-500 px-4 py-2 font-medium text-white transition-all disabled:bg-gray-400
        hover:bg-violet-600">
        SignUp
      </button>
    </div>
  </div>
</nav>
  )
}

export default Navbar;