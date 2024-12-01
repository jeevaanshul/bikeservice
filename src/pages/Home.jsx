// src/pages/Home.jsx
import bikeImage from "../assets/04.webp";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-secondary text-white h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4 tracking-wide text-center">
          Revitalize Your Bike<br />with Expert Services
        </h1>
        <p className="text-lg font-light max-w-xl text-center">
          We provide the best bike servicing, from engine tuning to tire replacement. Experience quality like never before.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-full text-lg hover:opacity-90 transition">
          Book Your Service Now
        </button>
      </div>
      {/* Image Section */}
      <div className="absolute inset-x-0 bottom-0 -mb-16 flex justify-center">
        <img src={bikeImage} alt="Bike" className="w-3/4 rounded-3xl shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
