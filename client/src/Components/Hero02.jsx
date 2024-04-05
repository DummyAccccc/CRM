import React from 'react';


const Hero02 = () => {
  return (
    <>
    <div className="bg-green-500 text-white py-20 px-4 md:px-0">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col md:flex-row items-center justify-between ">
      <div className="md:w-1/2 mb-8 mr-20">
          <img src="https://via.placeholder.com/500" alt="CRM Image" className="mx-auto md:ml-auto md:mb-8

           " />
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl  font-bold mb-4 md:mt-8">Streamline Your Education Platform</h1>
          <p className="text-lg md:text-xl mb-8">Empower your students and instructors with our comprehensive CRM solution.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Get Started</button>
        </div>
        
      </div>
    </div>
  </div>
    </>
  )
}

export default Hero02;
