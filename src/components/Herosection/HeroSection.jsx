import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";


function HeroSection() {
  //for typing animation
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Admission open for 2024-25 session.",
        "Join Us in Shaping Your Future.",
        "Discover Opportunities for Growth and Success.",
        "Enroll in our Dynamic Programs for 2024-25 Session.",
      ],
      typeSpeed: 50,
      loop: true, // Loop the animation
      backSpeed: 30, // Speed of deleting characters
      backDelay: 1500, // Time before starting to delete previous characters
      showCursor: false, // Hide the cursor symbol

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const navigate=useNavigate()

  return (
    <div className="relative w-full bg-gray-100 text-blue-900 py-36 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/heroImg.jpg')",
        }}
      />
      {/* Black overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-50" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-white">
          Welcome to Dumkal Polytechnic
        </h1>
        {/* Subheading */}
        <p className="text-md sm:text-xl lg:text-xl text-center text-white">
          Approved By AICTE (GOVT. OF INDIA)
        </p>
        <p className="text-md text-white mb-2 h-4" ref={el}>
          {/* This is where the Typed.js animation will render */}
        </p>

        {/* CTA Button */}
        <button className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white  rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 md:py-3 md:px-4 py-3 px-3 text-sm flex justify-center items-center gap-2">
          <span><img src="/images/new.gif" alt="New" /></span>  Apply for Admission (2024-25)
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
