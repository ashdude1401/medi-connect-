import React from 'react';
// import "./UserProfile.css";

const userProfile = () => {
  return (
    <div className="container p-6">
      <div className="grid grid-cols-10 gap-4">
        <div className='col-span-4'>
        <div className="flex justify-center">
          <img className="rounded-full border-2 border-gray-200 shadow-md h-40 w-40" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-image" />
        </div>
          
      <button className="text-md rounded-full bg-transparent px-4 py-2 font-medium my-5 text-violet-500 transition-all disabled:bg-gray-400  border border-violet-500 hover:bg-violet-50">
        Update Profile
      </button>
      <button 
        className="text-md rounded-full bg-violet-500 px-4 py-2 font-medium mx-5 my-5 text-white transition-all disabled:bg-gray-400
        hover:bg-violet-600">
        Change Password
      </button>

      </div>
        <div className="bg-yellow-200 col-span-6">
hello
        </div>
      </div>
    </div>
  )
}

export default userProfile;