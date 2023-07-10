import React, { useState } from "react";

const MedicineForm = () => {
  const [name,setName]=useState('')
  const [quantity,setQuantity]=useState(0);
  const [expiry,setExpiry]=useState('');
  const [condition,setCondition]=useState('');
  const [type,setType]=useState('');
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div
        className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white font-heading">
          Start Donating Today!
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Enter medicine details
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="nameMed"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name of medicine
                </label>
                <input
                  type="text"
                  name="nameMed"
                  id="nameMed"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Medicine Name"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="5 pills"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="expiry"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Expiry Date
                </label>
                <input
                  type="date"
                  name="expiry"
                  id="expiry"
                  onChange={(e) => setExpiry(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="24/02/2030"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="condition"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Condition
                </label>
                <select
                  defaultValue={"Default"}
                  id="condition"
                  onChange={(e) => setCondition(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
                  <option value="Default" disabled>
                    Choose condition of the medicine
                  </option>
                  <option value="Unopened/Sealed">Unopened/Sealed</option>
                  <option value="Opened and Unused">Opened and Unused</option>
                  <option value="Opened and Used">Opened and Used</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Type of medicine
                </label>
                <select
                  defaultValue={"Default"}
                  id="type"
                  onChange={(e) => setType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
                  <option value="Default" disabled>
                    Choose the type of medicine
                  </option>
                  <option value="PI">Pills(Tablets, Capsules)</option>
                  <option value="LI">Liquid(Syrup, Solution, Drops)</option>
                  <option value="IH">Inhalers</option>
                  <option value="IJ">Injections</option>
                  <option value="PA">Patches</option>
                  <option value="TU">Tubes(Ointment, Cream, Lotion)</option>
                  <option value="OT">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Image of medicine
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                Submit Medicine Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineForm;
