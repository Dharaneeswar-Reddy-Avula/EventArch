import React from "react";

const AboutCard = (props) => {
  return (
    <div className="relative w-80 h-[400px] p-6 rounded-2xl bg-gradient-to-br from-[#2A1B3D] to-[#4B2E83] text-white shadow-lg overflow-hidden group mt-[50px] flex flex-col cursor-pointer">
      {/* Shine Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:animate-shine"></div>

      {/* Icon */}
      <div className="flex items-center justify-center w-[40px] h-[40px] mb-4 rounded-full bg-gray-800 border-4 border-blue-500">
        <svg
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2v6m0 4v10m-6-6h12"
          ></path>
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>

      {/* Description - Allow it to grow but constrain its height */}
      <p className="text-gray-300 text-md mb-4 flex-1 overflow-hidden">
        {props.description}
      </p>

      {/* Read More Link - Pinned to the bottom */}
      <a
        href="#"
        className="text-pink-400 font-semibold text-sm hover:underline mt-auto"
      >
        READ MORE
      </a>
    </div>
  );
};

export default AboutCard;