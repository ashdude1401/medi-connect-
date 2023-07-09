import { useState } from 'react';

const SignupModal = ({openModal,closeModal,showModal}) => {
  

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={openModal}
        className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="fixed inset-0 bg-gray-900 opacity-70"></div>
            <div className="bg-white rounded-md p-8 max-w-sm mx-auto">
              <h2 className="text-2xl font-bold mb-4">Choose Sign Up Type</h2>
              <div className="flex justify-between">
                <button
                  onClick={closeModal}
                  className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
                >
                  Sign Up as Organization
                </button>
                <button
                  onClick={closeModal}
                  className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
                >
                  Sign Up as Individual
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupModal;
