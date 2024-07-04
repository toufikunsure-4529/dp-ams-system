import React from 'react'
import Container from '../../container/Container'

function Placementdata() {

  const studantData = [
    {
      img: "/images/sakhil.png",
      name: "Abhisek Gupta",
      course: "MBA",
      ctc: "25 Lakhs",
      company: "Wipro"
    },
    {
      img: "/images/sakhil.png",
      name: "Abhisek Gupta",
      course: "MBA",
      ctc: "25 Lakhs",
      company: "Wipro"
    },
    {
      img: "/images/sakhil.png",
      name: "Abhisek Gupta",
      course: "MBA",
      ctc: "25 Lakhs",
      company: "Wipro"
    },
    {
      img: "/images/sakhil.png",
      name: "Abhisek Gupta",
      course: "MBA",
      ctc: "25 Lakhs",
      company: "Wipro"
    },
    {
      img: "/images/sakhil.png",
      name: "Abhisek Gupta",
      course: "MBA",
      ctc: "25 Lakhs",
      company: "Wipro"
    },
    {
      img: "/images/sakhil.png",
      name: "Abhisek Gupta",
      course: "MBA",
      ctc: "25 Lakhs",
      company: "Wipro"
    },
  ]

  return (
    <div className='w-full bg-gray-100'>
      <Container>
        <div className='max-w-5xl mx-auto px-4 py-1'>
          <h2 className='text-2xl font-semibold mb-2'>Top Placement <span className='text-red-800'>2022-23</span></h2>
          <div className='h-1 w-28 bg-red-800'></div>
          <div>
            <div className='mt-7 flex gap-4 md:flex-row flex-col'>
              <button className='bg-black text-white px-12 py-4 rounded-tl-3xl'>Highest Package - 30 Lakhs</button>
              <button className='bg-blue-900 text-white px-12 py-4 rounded-tl-3xl'>Highest Package - 30 Lakhs</button>
              <button className='bg-red-800 text-white px-12 py-4 rounded-tl-3xl'>Highest Package - 30 Lakhs</button>
            </div>
            <div className='max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-14'>
              {/* card */}
              {studantData.map((studant, index) => (
                <div
                  className='h-auto w-full bg-gray-200 px-8 py-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center gap-6'
                  key={index}>
                  <div className='w-24 h-24'>
                    <img src={studant.img} alt={studant.name} className='w-full h-full rounded-full object-cover shadow-md' />
                  </div>
                  <div className='text-center'>
                    <p className='text-lg font-bold text-gray-800'>Name: <span className='text-gray-900'>{studant.name}</span></p>
                    <p className='text-md text-gray-700'>Course: <span className='text-gray-900'>{studant.course}</span></p>
                    <p className='text-md text-gray-700'>CTC: <span className='text-gray-900'>{studant.ctc}</span></p>
                    <p className='text-md text-gray-700'>Company: <span className='text-gray-900'>{studant.company}</span></p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Placementdata