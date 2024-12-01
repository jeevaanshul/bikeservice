// src/pages/ServiceHistory.jsx
const ServiceHistory = () => {
    const history = [
      { id: 1, bikeModel: "Honda", service: "Maintenance", date: "2024-10-10" },
      { id: 2, bikeModel: "Yamaha", service: "Repair", date: "2024-11-01" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Service History</h1>
        <ul>
          {history.map((entry) => (
            <li key={entry.id} className="border-b p-4">
              {entry.bikeModel} - {entry.service} on {entry.date}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ServiceHistory;
  