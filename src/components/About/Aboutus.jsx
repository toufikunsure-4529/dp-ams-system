import React from 'react';
import Container from '../container/Container';

function AboutUs() {
  return (
    <div className='bg-gray-100 w-full'>
      <Container>
        <div className='max-w-6xl mx-auto px-5 py-12 flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2 w-full'>
            <h3 className='text-4xl font-semibold mb-4 relative'>
              About Us
              <hr className='w-28 mt-2 border-b-2 border-red-800' />
            </h3>
            <p className='text-base text-gray-600 leading-relaxed'>
              Dumkal Polytechnic was established in 2002 by Basantapur Education Society (a non-profit social welfare organization) founded by Dr. Nazrul Islam (Retired IPS Officer & a well-known litterateur of Bengali prose fiction and short stories). Besides Dumkal Polytechnic, the society has established a Degree Engineering College (Dumkal Institute of Engineering & Technology), a General Degree College, Education College (for B.Ed & M.Ed Courses), a Model School (English & Bengali), and a Primary Teachers' Training Institute. Dumkal Polytechnic is approved by AICTE and affiliated with the West Bengal State Council of Technical & Vocational Education and Skill Development.
            </p>
          </div>

            <div className='md:w-1/2 w-full flex flex-col items-center text-center' data-aos="fade-left">
              <img src="/images/founder.png" alt="Dr. Nazrul Islam (Retd. IPS)" className='h-48 w-auto rounded mb-4 shadow-lg' />
              <h2 className='text-2xl font-semibold'>Dr. Nazrul Islam (Retd. IPS)</h2>
              <p className='text-sm text-gray-500'>Founder: Basantapur Education Society</p>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
