import React, { useEffect } from "react";

function Contact() {
  useEffect(()=>{document.title="Contact Us"},[])
  return (
    <div className="bg-white w-full" id="contact">
      <div className="max-w-5xl mx-auto py-6 px-2">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Get In Touch
        </h1>
        <div className="heading-line mb-1 "></div>
        <p className="text-center text-gray-500">
          Have any questions about Dumkal Polytechnic? Feel free to reach out to us by submitting the form below.
        </p>
        <div className="flex flex-col md:flex-row bg-[#082643] w-full shadow-lg h-auto mt-10 rounded-md">
          <div className="md:w-1/2 w-full py-2 px-2  md:py-0 md:px-0">
            <iframe
              title="Dumkal Polytechnic Location"
              width="100%"
              height="100%"
              className="rounded-sm"
              src={`https://maps.google.com/maps?q=Dumkal Polytechnic&output=embed`}
              style={{ filter: "grayscale(0) contrast(1.2) opacity(100%)" }}
            ></iframe>
          </div>
          <div className="md:w-1/2 w-full py-7 px-10">
            <h1 className="text-2xl font-bold text-center mb-2 text-gray-100 ">
              Get In Touch
            </h1>
            <form action="#" className="max-w-md mx-auto" method="post">
              <div className="w-full flex flex-col justify-center items-center text-white mt-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border bg-[#FF000000] py-2 px-3 mb-3  focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md border-blue-300 opacity-75 "
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Contact Number"
                  className="w-full border py-2 bg-[#FF000000] px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md border-blue-300 opacity-75"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border py-2 bg-[#FF000000] px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md border-blue-300  opacity-75 "
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  maxLength={200}
                  placeholder="Your Message"
                  className="w-full border py-2 px-3 bg-[#FF000000] mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md shadow-sm border-blue-300 opacity-75"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-200 text-blue-900 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-blue-300 transition-colors duration-300 ease-in-out "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;