import React from 'react';

const Team = () => {
  return (
    <div className="py-20 bg-gray-200">
      <h2 className="text-3xl text-center font-bold mb-10">Our Team</h2>
      <p className="text-center text-gray-700 mb-12">
        Meet the passionate professionals who make it all happen!
      </p>

      {/* Team Members Section */}
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="relative w-36 h-36 mb-4 transition-all duration-300 ease-in-out hover:rotate-3">
              {/* Large square with horizontal split */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 transition-all duration-300 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-400 transition-all duration-300 ease-in-out"></div>

              {/* Profile Image in the center of the square */}
              <img
                src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" // Replace with actual image URL
                alt="Team Member 1"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover border-4 border-white transition-all duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="relative w-36 h-36 mb-4 transition-all duration-300 ease-in-out hover:rotate-3">
              {/* Large square with horizontal split */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 transition-all duration-300 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-400 transition-all duration-300 ease-in-out"></div>

              {/* Profile Image in the center of the square */}
              <img
                src="https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg" // Replace with actual image URL
                alt="Team Member 2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover border-4 border-white transition-all duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="relative w-36 h-36 mb-4 transition-all duration-300 ease-in-out hover:rotate-3">
              {/* Large square with horizontal split */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 transition-all duration-300 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-400 transition-all duration-300 ease-in-out"></div>

              {/* Profile Image in the center of the square */}
              <img
                src="https://cdn.create.vista.com/api/media/small/204688582/stock-photo-happy-mechanic-overalls-using-digital-tablet-while-colleague-working-workshop" // Replace with actual image URL
                alt="Team Member 3"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover border-4 border-white transition-all duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
            <p className="text-gray-600">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;




