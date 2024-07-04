import React from 'react'
import Container from '../../container/Container'

function Objective() {
  const objectives = ["To provide company specific training in technical and aptitude skills.", "To prepare students for campus recruitment by arranging training in Aptitude tests, Group discussions, preparing for Technical and HR interviews through professional trainers.", "To provide ample opportunities for placement of students to achieve maximum placements.", "To support our students for attending pool campus / off campus drives and also to keep updating with other job opportunities.", "To extend deserving candidates to have the opportunity to start their career with their preferred company.", "To enter into tie-up arrangements with Industries & Corporates for Campus recruitments."]
  return (
    <div className='w-full bg-gray-100'>
      <Container>
        <div className='max-w-5xl mx-auto px-4 py-4 flex flex-col gap-2'>
          <h3 className='text-2xl font-semibold'>Objectives</h3>
          {objectives.map((data, index) => (
            <ul key={index}>
              <li className='list-disc text-gray-800'>{data}</li>
            </ul>
          ))}

        </div>
      </Container>
    </div>)
}

export default Objective