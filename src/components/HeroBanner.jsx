import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const handle=()=>{
  //   const section=document.getElementById("leather-products");
  //   if(section)
  //   {
  //     section.scrollIntoView({behavior:"smooth"})
  //   }
  const section = document.getElementById("leather-products");
    if (section) {
        const navbarHeight = document.querySelector("nav").offsetHeight; // Get header height
        const sectionPosition = section.offsetTop - navbarHeight - 20; // Offset by navbar height + extra spacing
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  }
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?leather,shoes')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Take a walk on the Wild Side
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          Explore our exclusive collection of premium leather shoes. Crafted with passion and precision,
          our shoes are designed to bring elegance and comfort to every step.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          <button onClick={handle}>
          Shop Now
        </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
