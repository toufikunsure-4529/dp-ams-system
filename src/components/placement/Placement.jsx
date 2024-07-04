import React, { useState } from 'react'
import Container from '../container/Container'
import Collaborations from './placementpage/Collaborations'
import MissionVission from './placementpage/MissionVission'
import Objective from './placementpage/Objective'
import Placementdata from './placementpage/Placementdata'
import Tpo from './placementpage/Tpo'
import DefaultHeroSection from '../DefaultHeroSection'

function Placement() {
  const [currentSection, setCurrentSection] = useState('MissionVission')
  return (
    <>
      <DefaultHeroSection title="Our Placement" />
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