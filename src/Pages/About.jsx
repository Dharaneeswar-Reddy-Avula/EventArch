import React from "react";
import logo from "../assets/logoe.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";
import WebTeam from "../components/Teamcard";
const About = () => {
  const aboutdata = [
    {
      title: "Our Mission",
      description:
        "Our goal is to streamline event management by providing a centralized platform for organizing, tracking, and participating in multiple college events. We aim to enhance engagement, efficiency, and communication among students and event organizers.",
    },
    {
      title: "What We Offer",
      description:
        "We provide an all-in-one solution for event registration, scheduling, real-time updates, and notifications. Our platform ensures that students never miss out on exciting opportunities and can easily track upcoming events.",
    },
    {
      title: "Innovation at its Core",
      description:
        "As the first event management portal in our college, we leverage technology to simplify event coordination. Our system is designed to reduce manual effort, eliminate confusion, and create a seamless experience for both organizers and participants.",
    },
    {
      title: "Building a Connected Community",
      description:
        "Our platform is more than just an event manager; it fosters collaboration and community engagement. By bringing all events under one roof, we create an interactive and vibrant college culture where every student stays informed and involved.",
    },
  ];
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <h3 className="text-5xl text-[#b806a3] text-center font-bold pt-[90px]">
     About Us
    </h3>
      <div className="flex gap-[30px] px-[50px]">
    
        {aboutdata.map((item) => (
          <AboutCard title={item.title} description={item.description} />
        ))}
      </div>
       <WebTeam/>
      <Footer />
    </div>
  );
};

export default About;
