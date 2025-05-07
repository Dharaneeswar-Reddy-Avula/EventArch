import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";
import WebTeam from "../components/Teamcard";
import Accordion from "../components/Accordion"; // Import the Accordion component

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

  const faqs = [
    {
      title: "What types of events are available on this website?",
      content:
        "We host a variety of events, including conferences, workshops, webinars, cultural festivals, networking meetups, and more. Check our events page for upcoming and past events.",
      isOpenByDefault: true, // First accordion open by default
    },
    {
      title: "I'm facing issues while registering. What should I do?",
      content:
        "If you encounter any technical issues, try refreshing the page or using a different browser. If the problem persists, contact our support team for assistance.",
    },
    {
      title: "Can I get event reminders?",
      content:
        "Yes! You will receive reminder emails or notifications before the event starts if you have opted in for notifications.",
    },
    {
      title: "Are there any age restrictions for events?",
      content:
        "Some events have age restrictions, which will be mentioned in the event details. If an event is marked “All Ages,” anyone can participate.",
    },
  ];

  return (
    <div className=" min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <div className="flex justify-center">
      <h3 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
  About Us
</h3>
</div>
      <div className="flex flex-wrap lg:flex-nowrap px-[30px] gap-[30px]  justify-center">
        {aboutdata.map((item, index) => (
          <AboutCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* Web Team Section */}
      <WebTeam />

      {/* FAQ Section */}
      <div className="flex justify-center">
      <h3 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] mb-[50px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
  Frequently Asked Questions
</h3>
</div>
      <div className="w-full max-w-3xl mx-auto px-4 mb-12">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            content={faq.content}
            isOpenByDefault={faq.isOpenByDefault}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;