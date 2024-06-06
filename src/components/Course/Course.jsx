import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Container from '../container/Container';

function Course() {
  const course = [
    {
      courseName: "Electrical Engineering",
      description: "Electrical Design Engineer, CAD Engineer, Transform Design Engineer, Field Application Engi- neer, Technical Trainer, In Govt. Sector like- Indian Railways, DRDO, ISRO, SAIL, NPCIL, POCIL, ONGC, WBSEDCL, WBPDCL, BHEL, Municipal Corporation etc.",
      img: "/images/course-electrical.png"
    },
    {
      courseName: "Civil Engineering",
      description: "Construction Engineer, Civil Engineer Drafter, Site Engineer, Geo-Technical Engineer, Structural Engineer, Urban Planning Engineer, Environment Engineer In Govt. Sector-like; Indian Railways, DRDO, ISRO, SAIL, NPCIL, PDCIL, ONGC. Municipal Corporation, Irrigation  and PWD Dept. etc.",
      img: "/images/course-civil.jpg"

    },
    {
      courseName: "Computer Science and Technology",
      description: "Software Developer, IT Support Engineer, Network Engineer, Database Engineer, Telecom Engineer, Desktop engineer, In Govt. Sector-like; Indian Railways, DRDO, ISRO, ONGC, WBPSC etc.",
      img: "/images/coursecst.png"

    },
    {
      courseName: "Mechanical Engineering",
      description: "Mechanical Design Engineer, Manufacturing Engineer, Automo- bile Engineer, Auto CAD and Catia Design, Maintenance Engineer, In Govt. Sector-like; Indian Railways, DRDO, ISRO, SAIL, NPCIL, PDCIL, ONGC, Municipal Corporation etc.",
      img: "/images/course-mechanical.png"

    },
  ]
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 5 seconds (5000 milliseconds)
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full bg-gray-50'>
      <Container>
        <div className="max-w-full mx-auto py-8 px-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">Popular Courses <span className='text-red-800'>Available</span> Right Now <hr className='mt-3' /></h2>
          <div className='w-full' > 

            <Slider {...settings}>

              {/* Course Card */}
              {
                course.map((course, index) => (
                  <div className="bg-gray-100 rounded p-6 cursor-pointer" key={index}>
                    <img src={course.img} alt={course.courseName} className="h-60 w-auto mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{course.courseName}</h3>
                    <p className="text-gray-500 text-sm">{course.description}</p>
                  </div>
                ))
              }

            </Slider>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Course;
