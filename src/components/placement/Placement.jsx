import React, { useState } from 'react'
import Container from '../container/Container'
import Collaborations from './placementpage/Collaborations'
import MissionVission from './placementpage/MissionVission'
import Objective from './placementpage/Objective'
import Placementdata from './placementpage/Placementdata'
import Tpo from './placementpage/Tpo'

function Placement() {
  const [currentSection, setCurrentSection] = useState('MissionVission')
  return (
    <>
      <div className="relative w-full bg-gray-100 text-blue-900 py-36 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/dp-placement.webp')",
          }}
        />
        <div className="absolute inset-0 z-10 bg-black opacity-55" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center gap-6">

          <p className="text-md sm:text-xl lg:text-xl text-center text-white font-semibold">
            Our Placement
          </p>
        </div>
      </div>
      <div className='w-full bg-gray-100'>
        <Container>
          <div className='max-w-5xl mx-auto px-3 py-4 flex justify-center items-center gap-5 md:flex-row flex-col'>
            <button
              className={`${currentSection === 'MissionVission' ? 'bg-red-700' : 'bg-blue-900'
                } text-white px-8 py-2 rounded-r-full rounded-l-2xl rounded-t-full`}
              onClick={() => setCurrentSection('MissionVission')}
            >
              Mission & Vision
            </button>
            <button
              className={`${currentSection === 'Objectives' ? 'bg-red-700' : 'bg-blue-900'
                } text-white px-8 py-2 rounded-r-full rounded-l-2xl rounded-t-full`}
              onClick={() => setCurrentSection('Objectives')}
            >
              Objectives
            </button>
            <button
              className={`${currentSection === 'TPO' ? 'bg-red-700' : 'bg-blue-900'
                } text-white px-8 py-2 rounded-r-full rounded-l-2xl rounded-t-full`}
              onClick={() => setCurrentSection('TPO')}
            >
              Message from TPO
            </button>
            <button
              className={`${currentSection === 'Collaborations' ? 'bg-red-700' : 'bg-blue-900'
                } text-white px-8 py-2 rounded-r-full rounded-l-2xl rounded-t-full`}
              onClick={() => setCurrentSection('Collaborations')}
            >
              Collaborations
            </button>
          </div>

          {/* create a currentSection state and onclick chnge state value and conditional rendaring base on butoon click set value */}
          {currentSection === 'MissionVission' && <MissionVission />}
          {currentSection === 'Objectives' && <Objective />}
          {currentSection === 'TPO' && <Tpo />}
          {currentSection === 'Collaborations' && <Collaborations />}
          <Placementdata />
        </Container >
      </div >
    </>
  )
}

export default Placement