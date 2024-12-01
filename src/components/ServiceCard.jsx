// src/components/ServiceCard.jsx
const ServiceCard = ({ service }) => {
    return (
      <div className="bg-white border shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-200">
        <h2 className="text-xl font-bold mb-2 text-secondary">{service.name}</h2>
        <p className="text-gray-600">{service.description}</p>
        <p className="text-primary font-semibold mt-4">${service.price}</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent">
          Learn More
        </button>
      </div>
    );
  };
  
  export default ServiceCard;
  
  