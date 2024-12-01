import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 ${isVisible ? "block" : "hidden"}`}
    >
      <button
        onClick={scrollToTop}
        className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
      >
        <i className="fas fa-arrow-up"></i> {/* FontAwesome Arrow Icon */}
      </button>
    </div>
  );
}

export default ScrollToTopButton;
