import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../container/Container';
import FormHeader from './FormHeader';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    fristName: '',
    middleName: '',
    lastName: '',
    presentAddress: {
      village: '',
      houseNo: '',
      street: '',
      postOffice: '',
      policeStation: '',
      district: '',
      state: '',
      pincode: ''
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    toast.success("Form Submit Successfully!")
  }

  return (
    <div className='w-full bg-blue-100 min-h-screen'>
      <Container>
        <FormHeader />
        <div className='max-w-full mx-auto bg-white px-5 py-2 rounded'>
          <h2 className="relative text-2xl pt-5 font-bold text-center mb-8 text-gray-800">
            Online Admission Form <span className="text-red-600">(2024-25)</span>
            <br />
            <span className="flex justify-center items-center">
              <img src="/images/new.gif" alt="New" />
            </span>
          </h2>
          <div className='w-32 h-1 bg-red-800 mx-auto mb-10'></div>
          <form onSubmit={handleSubmit} className='p-8 ' >

            {/* Name Input Start */}
            <div>
              <label htmlFor="name" className='block text-gray-700 font-medium mb-2'>Name of the Candidate</label>
              <div className='flex gap-2  md:flex-row flex-col'>
                <input type="text" name='fristName' placeholder='Frist Name' className='md:w-1/3 w-full p-2 border border-gray-300 '
                  value={formData.fristName}
                  onChange={handleInputChange}
                  required

                />
                <input type="text" name='middleName' placeholder='Middle Name' className='md:w-1/3 w-full p-2 border border-gray-300 '
                  value={formData.middleName}
                  onChange={handleInputChange}


                />
                <input type="text" name='lastName' placeholder='Last Name' className='md:w-1/3 w-full p-2 border border-gray-300 '
                  value={formData.lastName}
                  onChange={handleInputChange}

                />
              </div>
            </div>

            {/* Name End Start */}


            {/* Present Address Start */}



            {/* Present Address end */}
            <div className='text-center mt-8'>
              <button type="submit" className='px-6 py-2 bg-red-800 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300'>Submit</button>
            </div>
          </form>
        </div>
      </Container>
      <ToastContainer hideProgressBar={true} draggable autoClose={3000} theme="colored"


      />

    </div>
  )
}

export default AdmissionForm