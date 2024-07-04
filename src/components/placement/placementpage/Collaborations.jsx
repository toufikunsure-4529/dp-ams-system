import React from 'react'
import Container from "../../container/Container"

function Collaborations() {
  const company = [
    "/images/company/aarya.png",
    "/images/company/ashoka.png",
    "/images/company/bosch.png",
    "/images/company/Brembo-logo.png",
    "/images/company/dcauto.jpg",
    "/images/company/flykite.avif",
    "/images/company/genus.jpg",
    "/images/company/imos.png",
    "/images/company/JK-Tyre.png",
    "/images/company/kkwindsolutions.png",
    "/images/company/portronics.avif",
    "/images/company/prebo.png",
    "/images/company/responsive.png",
    "/images/company/sumukha.png",
    "/images/company/synergy.png",
    "/images/company/tech-mahindra.webp",
    "/images/company/uges.png",
    "/images/company/yazaki.jpg",
  ]

  return (
    <div className='w-full bg-gray-100 py-8'>
      <Container>

        <div className='max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>

          {company.map((img, index) => (
            <div key={index} className='flex justify-center items-center'>
              <img
                src={img}
                alt={`Company ${index}`}
                className='h-40 w-40 object-contain bg-white p-2 rounded'
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Collaborations
