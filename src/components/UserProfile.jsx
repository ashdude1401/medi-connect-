import React from 'react';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const res = {
    "name" : "Angelina Jolie",
    "email" : "Angelina@jolie.com",
    "phone" : "1234567890",
    "address" : "34G/A road street an adress, Kolkata, West Bengal",
    "city" : "Kolkata",
    "state" : "West Bengal",
    "country" : "India",
    "medName" : "Paracetamol",
    "medNum" : 5
  };
  const { name, email, phone, address, city, state, country, medName, medNum } = res;
  return (
    <div className="container p-6">
      <div className="grid grid-cols-10 gap-4">
        <div className='col-span-4'>
        <div className="flex justify-center">
          <img className="rounded-full border-2 border-gray-200 shadow-md h-40 w-40" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" />
        </div>
        <div className="flex justify-center">
        <button onClick={() => {navigate('/updateProfile')}} className="text-md rounded-full bg-transparent px-4 py-2 font-medium my-5 text-violet-500 transition-all disabled:bg-gray-400  border border-violet-500 hover:bg-violet-50">
        Update Profile
        </button>
        <button onClick={() => {navigate('/changePassword')}}
        className="text-md rounded-full bg-violet-500 px-4 py-2 font-medium mx-5 my-5 text-white transition-all disabled:bg-gray-400
        hover:bg-violet-600">
        Change Password
        </button>
        </div>

      </div>
        <div className="bg-violet-500 rounded-lg col-span-6 font-heading text-white p-3">
        <div className='font-semibold mb-4'>User Details</div>
        <div>Name : {name}</div>
        <div>Email: {email}</div>
        <div>Phone : {phone}</div>
        <div>Address : {address}</div>
        <div>City : {city}</div>
        <div>State : {state}</div>
        <div>Country : {country}</div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
      <div className='col-span-4'>

      </div>
      <div className="bg-gray-300 mt-6 rounded-lg col-span-6 font-heading text-gray-800 p-3">
        <div className='font-semibold mb-4'>Donated medicine</div>
        <div className="bg-gray-100 mt-6 rounded-lg col-span-6 font-heading text-gray-600 p-3">
          <div>Name of medicine : {medName}</div>
          <div>Number of medicine donated : {medNum}</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;