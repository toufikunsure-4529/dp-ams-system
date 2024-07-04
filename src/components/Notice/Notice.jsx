import React, { useEffect } from 'react'
import Container from '../container/Container'
function Notice() {

  useEffect(() => {
    document.title = "Notice Board - Dumkal Polytechnic"
  }, [])

  const demoNotice = [
    {
      dateOfPublished: "Dec'23 14",
      noticeTitle: "Admission 2024-25 Session",
      noticePdf: "/notice/Notice.pdf"
    },

    {
      dateOfPublished: "Dec'23 14",
      noticeTitle: "Admission 2024-25 Session",
      noticePdf: "/notice/Notice.pdf"
    },
    {
      dateOfPublished: "Dec'23 14",
      noticeTitle: "Admission 2024-25 Session",
      noticePdf: "/notice/Notice.pdf"
    },
  ]

  return (
    <div className='w-full bg-gray-100'>
      <Container>
        <div className='max-w-4xl mx-auto py-8 px-5'>
          <h2 className=' font-medium text-2xl text-gray-900'>Notice <span className='text-red-800'>Board</span></h2>
          <div className='w-20 mt-1 h-1 bg-red-800'></div>
          <div className='mt-5 w-full grid md:grid-cols-2 gap-6 grid-cols-1 p-3 '>
            {demoNotice.map((notice, index) => (
              <>
                <div className=' flex gap-2 justify-center items-center' key={index}>
                  <div className='h-20 w-32 rounded bg-blue-200 text-center flex flex-col justify-center items-center'>
                    <p>{notice.dateOfPublished.split(' ')[0]}</p>
                    <p className="font-bold text-xl">{notice.dateOfPublished.split(' ')[1]}</p>
                  </div>
                  <div>
                    <p className='text-gray-800 font-bold'>{notice.noticeTitle}</p>
                    <a href={notice.noticePdf} target='_blank' rel='noopener noreferrer' className='text-red-800 font-semibold'>Read Details</a>
                    <hr className='border border-dashed w-full bg-red-800 mt-4' />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Notice