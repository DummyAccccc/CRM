import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-200 py-20 px-4">
      <div className="container text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida justo eget fermentum pretium.</p>
      </div>
      <div className="container flex flex-col md:flex-row gap-8  ">
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h3 className="text-xl font-bold mb-4">Feature 1</h3>
          <div className="border-t-2 border-dotted border-gray-400 pt-4 flex-1">
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h3 className="text-xl font-bold mb-4">Feature 2</h3>
          <div className="border-t-2 border-dotted border-gray-400 pt-4 flex-1">
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h3 className="text-xl font-bold mb-4">Feature 3</h3>
          <div className="border-t-2 border-dotted border-gray-400 pt-4 flex-1">
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
