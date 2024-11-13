import React, { useState } from 'react';

const JobApplicationModal = ({ isOpen, closeModal, successMessage,onSubmit }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    noticeperiod: '',
    resume: null

  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleResumeChange = (e) => {
    const file = e.target.files[0]  //// Get the first file from the file input
    setFormData({ ...formData, resume: file })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)//call the parent submit button with the form data 

  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Apply for Job</h2>
        <p className='text-center text-green-400'>{successMessage}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              name='name'
              onChange={handleChange}
              value={formData.name}

            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              name='email'
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Notice Period
            </label>
            <select
              id="notice"
              type="option"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              name='noticeperiod'
              onChange={handleChange}
              value={formData.noticeperiod}
            >
              <option value="" disabled selected>Notice period</option>
              <option>Immediate Joiner</option>
              <option>0-15</option>
              <option>15-30</option>
              <option>30-45</option>
              <option>45-60</option>
            </select>
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
              Resume
            </label>
            <input
              id="resume"
              type="file"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              name='resume'
              onChange={handleResumeChange}

            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;
