import React from "react";

function Services() {
  const services = [
    { title: "General Check-Up", image: "https://png.pngtree.com/png-vector/20240831/ourmid/pngtree-illustration-of-young-motor-machnic-reparing-bike-png-image_13688468.png" },
    { title: "Engine Repair", image: "https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-d-motorcycle-repair-and-maintenance-service-classic-garage-for-motorcycle-repairs-png-image_11569039.png" },
    { title: "Tire Replacement", image: "https://img.freepik.com/premium-photo/standalone-bike-tyre-showcase-white-background_431161-29256.jpg" },

    { title: "Chain Lubing", image: "https://png.pngtree.com/thumb_back/fh260/background/20220225/pngtree-closeup-of-a-drop-of-golden-oil-being-applied-to-a-bicycle-chain-for-lubrication-on-a-gray-background-photo-image_44650986.jpg" },
    { title: "Brake Adjustment", image: "https://m.media-amazon.com/images/I/41vPu23aCxL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" },
    { title: "Oil Change", image: "https://www.adolf7.org/images/home-img-automotive-engine-oil.png" },

    { title: "Exhaust Repair", image: "https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-exhaust-system-isolated-on-white-background-ideal-for-cars-and-motorcycles-png-image_14114495.png" },
    { title: "Bike Washing", image: "https://5.imimg.com/data5/SELLER/Default/2022/2/WL/EW/HO/71120205/5-shampoo-copy-jpg.jpg" },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <h3 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-wide font-poppins">
        What We Offer
      </h3>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4
              className="text-xl font-semibold mt-4 text-center text-gray-800 font-poppins transition-colors duration-300 hover:text-orange-500"
            >
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;





