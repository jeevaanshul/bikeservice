import React, { useState, useEffect } from "react";
import bikeImage1 from "../assets/bike2.png";
import bikeImage2 from "../assets/bike1.webp";
import bikeImage3 from "../assets/bike.png";


const images = [bikeImage1, bikeImage2, bikeImage3];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Switch to the next image
        setFade(false); // Start fade-in effect
      }, 500); // Match the duration of the fade effect
    }, 3000); // Transition every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-gray-900 text-white flex flex-col md:flex-row items-center p-6 md:p-16 relative overflow-hidden h-screen">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Welcome to BikeFix Pro
        </h1>
        <p className="text-lg md:text-xl">
          Your one-stop destination for all bike repairs and services. We ensure
          your ride stays smooth and problem-free!
        </p>
      </div>
      {/* Image Carousel */}
      <div className="w-full md:w-1/2 flex justify-center relative h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Bike ${index + 1}`}
            className={`absolute max-w-xs md:max-w-md lg:max-w-lg transition-opacity duration-700 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;

