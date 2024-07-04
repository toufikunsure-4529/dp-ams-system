import React from 'react'
import DefaultHeroSection from '../components/DefaultHeroSection'
import Notice from '../components/Notice/Notice'

function NoticePage() {
  return (
    <>
      <DefaultHeroSection title="Notice Board" />
      <Notice />
    </>
  )
}

export default NoticePage