// src/pages/BookService.jsx
import { useState } from "react";

const BookService = () => {
  const [formData, setFormData] = useState({ bikeModel: "", serviceType: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service booked for ${formData.bikeModel} on ${formData.date}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-secondary">Book a Service</h1>
        <input
          type="text"
          placeholder="Bike Model"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
          value={formData.bikeModel}
          onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
        />
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
          value={formData.serviceType}
          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
        >
          <option value="">Select Service</option>
          <option value="Maintenance">General Maintenance</option>
          <option value="Repair">Engine Repair</option>
          <option value="Tire">Tire Replacement</option>
        </select>
        <input
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-accent transition">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookService;

