import React from 'react'
import Container from '../container/Container'

function FormHeader() {
  return (
    <div className='w-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100'>
      <Container>
        <div className='max-w-6xl mx-auto px-5 py-4 flex items-center justify-around md:flex-row flex-col gap-3'>
          <img src="/dpLogo.png" alt="Logo" className="h-28 w-auto rounded-full"
          />
          <div className='text-center'>
            <h2 className='text-4xl uppercase font-extrabold text-center'>Dumkal Polytechnic</h2>
            <p className=''>
              PO:-BASANTAPUR
              PS & SD :- DUMKAL
              DIST:-MURSHIDABAD
            </p>
            <p className='font-medium'>  PIN:-742166
              ESTD:-2002</p>
            <p>Approved by <span className='font-medium'>A I C T E</span> & Affiliated <span className='font-medium'>W B S C T & VE & S D</span></p>
            <p>Contact: 9734369670. Web link: www.dumkalpolytechnic.netlify.app</p>
            <p>Email: polytechnicdumakl@yahoo.com</p>
          </div>
          <img src="/images/aicte.jfif" alt="Logo" className="h-20 w-auto rounded-full" />
        </div>
      </Container>
    </div>
  )
}

export default FormHeader