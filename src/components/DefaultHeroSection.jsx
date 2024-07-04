import React from 'react'

function DefaultHeroSection({ title }) {
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
            {title}
          </p>
        </div>
      </div>
    </>
  )
}

export default DefaultHeroSection