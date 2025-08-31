import React from "react";
import eventLogo from "../assets/logoe.png";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
const HomeAbout = () => {
  const aboutdata = [
    {
      title: "Our Mission",
      description:
        "Our goal is to streamline event management by providing a centralized platform for organizing, tracking, and participating in multiple college events.",
    },
    {
      title: "What We Offer",
      description:
        "We provide an all-in-one solution for event registration, scheduling, real-time updates, and notifications.",
    },
    {
      title: "Innovation at its Core",
      description:
        "As the first event management portal in our college, we leverage technology to simplify event coordination.",
    },
    {
      title: "Building a Connected Community",
      description:
        "Our platform is more than just an event manager; it fosters collaboration and community engagement.",
    },
  ];

  return (
    <div className=" px-6 md:px-10 lg:px-10 w-full text-white">
      <div className="flex justify-center">
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] mb-20 font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
          About Us
        </h1>
      </div>{" "}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-6 flex-1 w-full ">
          {aboutdata.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#2A1B3D] to-[#4B2E83] p-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 14,
                delay: index * 0.3,
              }}
            >
              <h4 className="text-xl font-changa font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-sm line-clamp-2 font-poppins ">
                {item.description}
              </p>
              <button className="mt-3 text-sm text-blue-300 hover:text-white transition font-poppins">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Image Center */}
        <motion.img
          src={eventLogo}
          alt="Event Logo"
          className="h-[250px] md:h-[350px] lg:h-[400px] w-auto object-contain"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Right Column */}
        <div className="flex flex-col gap-6 flex-1 w-full">
          {aboutdata.slice(2).map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#2A1B3D] to-[#4B2E83] p-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 14,
                delay: index * 0.3,
              }}
            >
              <h4 className="text-xl font-semibold mb-2 font-changa">
                {item.title}
              </h4>
              <p className="text-sm line-clamp-2 font-poppins">
                {item.description}
              </p>
              <button className="mt-3 text-sm text-blue-300 hover:text-white transition font-poppins">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
