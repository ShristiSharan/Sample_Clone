import React from 'react';

const Page2 = () => {
  return (
    <div className="bg-blue-600 text-white min-h-screen p-10 ">
      <div className="max-w-4xl mt-20 mx-auto">
        <h2 className="text-5xl font-bold mb-6">Continue Building</h2>
        <p className="text-xl mb-12">
          Keep exploring the possibilities and pushing the boundaries of decentralized governance.
        </p>
        <div className="flex space-x-4 mb-12">
          <button className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-200">
            Learn More
          </button>
          <button className="flex items-center px-6 py-3 bg-blue-600 text-white border border-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
