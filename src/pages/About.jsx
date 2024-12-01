import React from "react";
import teamImage from "../assets/team.jpg"; // Replace with your image

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        About Us
      </h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-700">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At BikeFix Pro, we are dedicated to providing top-notch bike
            repair services to ensure your rides are smooth and enjoyable.
            With a team of skilled technicians and a passion for perfection,
            we take pride in serving our customers with excellence.
          </p>
          <h2 className="text-3xl font-bold text-gray-700">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Expert team with years of experience.</li>
            <li>State-of-the-art tools and equipment.</li>
            <li>Quick and reliable service.</li>
            <li>Affordable pricing without compromising quality.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={teamImage}
            alt="Our Team"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
