import React, { useState } from "react";

const Accordion = ({ title, content, isOpenByDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="mb-4">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 glassmorphism border-2 border-transparent bg-gradient-to-r from-[#ff00ff]/20 to-[#00f0ff]/20 text-white text-xl font-semibold rounded-lg focus:outline-none transition-all duration-300 hover:animate-neonGlow font-orbitron tracking-wide shadow-neon"
      >
        {title}
        <span className="float-right">
          {isOpen ? (
            <svg
              className="w-6 h-6 inline-block text-[#00f0ff] drop-shadow-[0_0_5px_#00f0ff]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 inline-block text-[#ff00ff] drop-shadow-[0_0_5px_#ff00ff]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-gradient-to-br from-[#0F0F49] to-[#2A1B3D] text-gray-300 text-lg border-t border-[#ff00ff]/30">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;