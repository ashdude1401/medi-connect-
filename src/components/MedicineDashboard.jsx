import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MedicineDashboard = () => {
  var res = {
    name: "Paracetamol",
    expiryDate: "23-05-2025",
    quantity: 5,
    image: "Sample image",
  };
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleBook = ({ _id }) => {
    //book the medicine will get the id from the medicine itself and the user id from the local storage
    const user = JSON.parse(localStorage.getItem("credentials"));
    const userId = user.user._id;
    const quantity = 2;
    fetch("http://localhost:3000/api/booking/create", {
      method: "POST",
      headers: {
        // Optional headers
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify({ user: userId, medicine: _id, quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  //Search funtionality
  const [data, setData] = useState([]); //medicine data from backend
  const [searchResults, setSearchResults] = useState([res]);
  const fetchInfo = () => {
    fetch("http://localhost:3000/api/medicine", {
      method: "GET",
      headers: {
        // Optional headers
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        setData(data.medicines);
        setSearchResults(data.medicines);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter((data) =>
      data.name.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  return (
    <>
      <div className="text-4xl flex justify-center p-4 font-semibold">
        Medicine Dashboard
      </div>
      <section className="container mx-auto px-4">
        <div className="m-6 md:flex md:items-center md:justify-between">
          <div className="relative mt-4 flex items-center md:mt-0">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-3 h-5 text-gray-400 dark:text-gray-600">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
              className="block w-full rounded-lg border border-gray-400 bg-white py-1.5 pl-11 pr-5 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rtl:pl-5 rtl:pr-11 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:w-80"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-7">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name of the medicine
                </th>
                <th scope="col" className="px-6 py-3">
                  Expiry Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Book</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {searchResults &&
                searchResults.map((dataObj) => {
                  const { name, expiryDate, quantity, image } = dataObj;
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {name}
                      </td>
                      <td className="px-6 py-4">{expiryDate}</td>
                      <td className="px-6 py-4">{quantity}</td>
                      <td className="px-6 py-4">{image}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={showToastMessage}
                          className="font-medium rounded-lg bg-violet-500 px-3 py-3 text-white dark:text-violet-500 hover:underline">
                          Book
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MedicineDashboard;
