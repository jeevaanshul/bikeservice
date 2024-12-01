import React from "react";

const Brands = () => {
  // List of brand images
  const brandImages = [
    "https://thumbs.dreamstime.com/b/logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-paper-texture-glossy-emblem-wallpaper-210443666.jpg",
    "https://thumbs.dreamstime.com/b/honda-logo-white-background-car-company-editoria-168841200.jpg",
    "https://c.ndtvimg.com/2022-01/65c8jqng_bike_625x300_14_January_22.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2fbaa58148141.560b81731b9d5.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/KTM-Logo.svg/780px-KTM-Logo.svg.png",
    "https://mir-s3-cdn-cf.behance.net/projects/404/fe43c4208995521.Y3JvcCwxNzk5LDE0MDcsMCwxOTU.jpg",
    "https://mir-s3-cdn-cf.behance.net/projects/404/73759069700183.Y3JvcCwxNDQ1LDExMzEsNjAsMA.jpg",
    "https://animationvisarts.com/wp-content/uploads/2023/11/Frame-30-3.png",
  ];

  return (
    <div className="py-20 bg-white"> {/* White background for the section */}
      <h2 className="text-3xl text-black font-bold text-center mb-10"> {/* Black text color */}
        Powered By
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 px-4">
        {brandImages.map((image, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center p-4 bg-white-100 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl" // Subtle transition with shadow
          >
            <img
              src={image}
              alt={`Brand ${idx + 1}`}
              className="w-32 h-32 object-contain" // Moderate logo size
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;





