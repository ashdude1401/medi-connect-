//check line 70 and 104

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateProfile = () => {
  const [profile, setProfile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: {
      houseNo: '',
      pincode: '',
      city: '',
      state: '',
      country: '',
    },
    phone: '',
  })

  const [showPasswordModal, setShowPasswordModal] = useState(false) //for modal

  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  useEffect(() => {
    fetchUserProfile()
  }, [])

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('https://localhost:3000/api/me')
      const userProfile = response.data
      setProfile(userProfile)
      setFormData({
        // ...userProfile,
        name: userProfile.name,
        email: userProfile.email,
        address: {
          houseNo: userProfile.address.houseNo,
          pincode: userProfile.address.pincode,
          city: userProfile.address.city,
          state: userProfile.address.state,
          country: userProfile.address.country,
        },
        phone: userProfile.phone,
      })
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleAddressChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: { ...prevFormData.address, [name]: value },
    }))
  }

  //update profile function krle anurag
  const handleUpdateProfile = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(
        'https://example.com/api/user-profile',
        formData
      )
      console.log('Profile updated:', response.data)
    } catch (error) {
      console.error('Error updating user profile:', error)
    }
  }

  const handleChangePassword = () => {
    setShowPasswordModal(true)
  }

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false)
    setPasswordFormData({
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    })
  }

  const handlePasswordUpdate = async (event) => {
    event.preventDefault()

    if (passwordFormData.newPassword !== passwordFormData.confirmNewPassword) {
      console.log('New password and confirm password do not match')
      return
    }
    // password update
    try {
      const response = await axios.put(
        'https://example.com/api/user-profile/change-password',
        {
          oldPassword: passwordFormData.oldPassword,
          newPassword: passwordFormData.newPassword,
        }
      )

      console.log('Password updated:', response.data)

      // Close the password modal and reset the form data
      handleClosePasswordModal()
    } catch (error) {
      console.error('Error updating password:', error)
    }
  }

  return (
    <div className="container mx-auto max-w-md p-6 bg-purple-100 rounded-md my-7">
      <h2 className="text-2xl font-bold mb-6 text-purple-800">User Profile</h2>
      {true ? (
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label className="block text-purple-800 font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-800 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-800 font-semibold mb-2">
              Address:
            </label>
            <div className="mb-2">
              <input
                type="text"
                className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
                name="houseNo"
                placeholder="House No. with Road Name"
                value={formData.address.houseNo}
                onChange={handleAddressChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
                name="pincode"
                placeholder="Pincode"
                value={formData.address.pincode}
                onChange={handleAddressChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
                name="city"
                placeholder="City"
                value={formData.address.city}
                onChange={handleAddressChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
                name="state"
                placeholder="State"
                value={formData.address.state}
                onChange={handleAddressChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
                name="country"
                placeholder="Country"
                value={formData.address.country}
                onChange={handleAddressChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-purple-800 font-semibold mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
          >
            Update Profile
          </button>
          <button
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 ml-4"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
        </form>
      ) : (
        <p>Loading user profile...</p>
      )}

      {showPasswordModal && (
        <PasswordChangeModal
          onClose={handleClosePasswordModal}
          onSubmit={handlePasswordUpdate}
        />
      )}
    </div>
  )
}

const PasswordChangeModal = ({ onClose, onSubmit }) => {
  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  const handlePasswordChange = (event) => {
    const { name, value } = event.target
    setPasswordFormData({ ...passwordFormData, [name]: value })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Change Password</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold mb-2">
              Old Password:
            </label>
            <input
              type="password"
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none"
              name="oldPassword"
              value={passwordFormData.oldPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold mb-2">
              New Password:
            </label>
            <input
              type="password"
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none"
              name="newPassword"
              value={passwordFormData.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold mb-2">
              Confirm New Password:
            </label>
            <input
              type="password"
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none"
              name="confirmNewPassword"
              value={passwordFormData.confirmNewPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile;
