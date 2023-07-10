import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrgDashboard = () => {
    const res = {
        name: "Paracetamol", 
        expiryDate: "23-05-2025", 
        quantity: 5,
        image: "Sample image"
    }
    const { name, type, contactPerson, email, phone, address } = res;

    //Search funtionality
    const [data, setData] = useState([]); //medicine data from backend
    const [searchResults, setSearchResults] = useState([]);
    const fetchInfo = () => {
        fetch("http://localhost:3000/api/medicine", {method:"GET", headers:{"Content-type":"Application/json"}})
          .then((res) => res.json())
          .then((d) => {
            setData(d); // getting the json data and updating the data using setData
            setSearchResults(d); // updating the array of search results
          });
      };
    useEffect(() => {
      fetchInfo();
    }, []);

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(data);
    
        const resultsArray = data.filter(
          (data) =>
            data.itemName.includes(e.target.value) ||
            data.category.includes(e.target.value)
        );
    
        setSearchResults(resultsArray);
      };
  return (
    <>
      <div className="text-4xl flex justify-center p-4 font-semibold">
        Organisation Dashboard
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
                className="mx-3 h-5 text-gray-400 dark:text-gray-600"
              >
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
                    Name of the organisation
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 mb-6">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {name}
                </td>
                <td className="px-6 py-4">
                    {type}
                </td>
                <td className="px-6 py-4">
                    {contactPerson}
                </td>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4">
                    {phone}
                </td>
                <td className="px-6 py-4">
                    {address}
                </td>             
            </tr>
        </tbody>
    </table>
</div>
      </section>
      </>
  )
}

export default OrgDashboard;