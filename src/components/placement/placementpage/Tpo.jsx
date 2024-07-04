import React from 'react'
import Container from '../../container/Container'

function Tpo() {
  return (
    <div className='w-full bg-gray-100'>
      <Container>
        <div className='max-w-5xl mx-auto px-4 py-4 flex flex-col gap-2'>
          <h3 className='text-2xl font-semibold'>Message form TPO</h3>
          <p className='text-red-700 font-semibold text-xl'>Name: <span className='text-lg text-gray-800'>Anupam Roy</span></p>
          <p className='text-red-700 font-semibold text-xl'>Designation: <span className='text-lg text-gray-800'>Training & Placement Officer</span></p>
          <p className='text-gray-600'>Our goal is to position as many students as possible through company-conducted on-campus and off-campus interviews through training programs like aptitude testing, group talks, mock interviews, etc., we support students with career planning and employment strategies and prepare them for competitive examinations and interviews. We encourage students to pursue higher education in order to sit for competitive examinations like the CAT, GATE, IES, GRE, UPSE, and others. We also encourage them to build soft skills and technical expertise in goal-setting. We bring reputable organizations to the college to organize a campus placement session and prepare the students for the industry recruitment process.

          </p>
        </div>
      </Container>
    </div>)
}

export default Tpo