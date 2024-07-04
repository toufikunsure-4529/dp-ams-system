import React from 'react'
import Container from '../../container/Container'

function MissionVission() {
  return (
    <div className='w-full bg-gray-100'>
      <Container>
        <div className='max-w-5xl mx-auto px-4 py-4 flex flex-col gap-2'>
          <h3 className='text-2xl font-semibold'>Vision</h3>
          <p className='text-gray-600'>To enhance creative strength, technical and analytical professionals to achieve empowerment of society.</p>
          <h3 className='text-2xl font-semibold'>Mission</h3>
          <p className='text-gray-600'>To inculcate technical and professional competencies along with determination, imagination, hope faith and passion for the profession.</p>
        </div>
      </Container>
    </div>
  )
}

export default MissionVission