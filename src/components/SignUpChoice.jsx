import { useState } from 'react'
import SignupOrg from './SignupOrg'
import SignupUser from './SignupUser'

const SignUpChoice = () => {
  const [showSignUp, setShowSignUp] = useState(false)
  const handleStateUser = () => {
    setShowSignUp(false)
  }
  const handleStateOrg = () => {
    setShowSignUp(true)
  }
  return (
    <div className="py-20 mb-500 bg-violet-500 text-center">
      <h1 className=" text-center text-4xl text-white">Sign up as :</h1>
      <div className="buttonContainer my-10 text-center">
        <button
          onClick={handleStateUser}
          className={`text-md rounded bg-violet-500  px-4 py-2 font-medium text-white transition-all disabled:bg-gray-400
        hover:bg-violet-600 mx-4 border-white  w-32 
        ${showSignUp ? 'border-2' : ''}`}
        >
          Individual
        </button>
        <button
          onClick={handleStateOrg}
          className={`text-md rounded bg-violet-500 px-4 py-2 font-medium text-white transition-all disabled:bg-gray-400
        hover:bg-violet-600 w-32 border-white 
        ${!showSignUp ? 'border-2' : ''}`}
        >
          Organization
        </button>
      </div>
      {showSignUp ? <SignupOrg /> : <SignupUser />}
    </div>
  )
}
export default SignUpChoice
