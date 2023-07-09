import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OrganizationProfile = () => {
  const [profile, setProfile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: {
      houseNo: '',
      pincode: '',
      city: '',
      state: '',
      country: '',
    },
    website: '',
  })
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  useEffect(() => {
    fetchOrganizationProfile()
  }, [])

  const fetchOrganizationProfile = async () => {
    try {
      const response = await axios.get('https://localhost:3000/api/me')
      const organizationProfile = response.data
      setProfile(organizationProfile)
      setFormData({
        name: organizationProfile.name,
        type: organizationProfile.type,
        contactPerson: organizationProfile.contactPerson,
        email: organizationProfile.email,
        phone: organizationProfile.phone,
        address: {
          houseNo: organizationProfile.address.houseNo,
          pincode: organizationProfile.address.pincode,
          city: organizationProfile.address.city,
          state: organizationProfile.address.state,
          country: organizationProfile.address.country,
        },
        website: organizationProfile.website,
      })
    } catch (error) {
      console.error('Error fetching organization profile:', error)
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
      address: {
        ...prevFormData.address,
        [name]: value,
      },
    }))
  }

  const handleUpdateProfile = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.put(
        'https://example.com/api/organization-profile',
        formData
      )
      console.log('Profile updated:', response.data)
    } catch (error) {
      console.error('Error updating organization profile:', error)
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

    try {
      const response = await axios.put(
        'https://example.com/api/organization-profile/change-password',
        {
          oldPassword: passwordFormData.oldPassword,
          newPassword: passwordFormData.newPassword,
        }
      )

      console.log('Password updated:', response.data)

      handleClosePasswordModal()
    } catch (error) {
      console.error('Error updating password:', error)
    }
  }

  return (
    <div className="container mx-auto max-w-md p-6 bg-violet-100 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-purple-800">
        Organization Profile
      </h2>
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
              Type:
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-800 font-semibold mb-2">
              Contact Person:
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
              name="contactPerson"
              value={formData.contactPerson}
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
              Website:
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-purple-400 focus:outline-none"
              name="website"
              value={formData.website}
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
        <p>Loading organization profile...</p>
      )}

      {showPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-purple-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4 text-purple-800">
              Change Password
            </h2>
            <form onSubmit={handlePasswordUpdate}>
              <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-2">
                  Old Password:
                </label>
                <input
                  type="password"
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none"
                  name="oldPassword"
                  value={passwordFormData.oldPassword}
                  onChange={(e) =>
                    setPasswordFormData({
                      ...passwordFormData,
                      oldPassword: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setPasswordFormData({
                      ...passwordFormData,
                      newPassword: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setPasswordFormData({
                      ...passwordFormData,
                      confirmNewPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                  onClick={handleClosePasswordModal}
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
      )}
    </div>
  )
}

export default OrganizationProfile
