import React, { useState } from 'react';

function ComplexForm() {


    let [FormObj ,setFormObj]=useState({

    FirstName: '',
    LastName: '',
    City:'',
    Gender: 'Male'

    })

    const onChangeHandler = (property ,value) => {

        setFormObj((prevState) => ({
            ...prevState,
            [property]: value
        }));


    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(FormObj);
        alert(`Form submitted with data: ${JSON.stringify(FormObj)}`);
    }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-semibold text-center">Registration Form</h2>

        <input
        value={FormObj.FirstName}
        onChange={(e) => onChangeHandler('FirstName', e.target.value)}
          type="text"
          placeholder="First name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
        value={FormObj.LastName}
        onChange={(e) => onChangeHandler('LastName', e.target.value)}
          type="text"
          placeholder="Last Name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select 
        value={FormObj.City}
        onChange={(e) => onChangeHandler('City', e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Khulna">Khulna</option>
        </select>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input onChange={() => onChangeHandler('Gender', 'Male')} checked={FormObj.Gender==='Male'} type="radio" name="Gender" className="accent-blue-500" />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input onChange={() => onChangeHandler('Gender', 'Female')} checked={FormObj.Gender==='Female'} type="radio" name="Gender" className="accent-blue-500" />
            <span>Female</span>
          </label>
        </div>

        <button
            onClick={onSubmitHandler}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplexForm;
