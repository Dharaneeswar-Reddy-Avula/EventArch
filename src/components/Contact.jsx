import React from "react";
import AboutCard from "./AboutCard";
import { useState } from "react";
import { Helmet } from "react-helmet";
const Contact = () => {
  const [search, setSearch] = useState("");
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

  const filteredData = aboutdata.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>Contact Us - College Event Management System</title>
        <meta
          name="description"
          content="Get in touch with us for any queries related to event management or college events. We are here to help!"
        />
        <meta
          name="keywords"
          content="contact college event management, event management contact, event inquiries"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://event-arch.vercel.app/contact" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Contact Us - College Event Management System"
        />
        <meta
          property="og:description"
          content="Get in touch with us for any queries related to event management or college events. We are here to help!"
        />
        <meta
          property="og:image"
          content="https://event-arch.vercel.app/images/og-contact.jpg"
        />
        <meta
          property="og:url"
          content="https://event-arch.vercel.app/contact"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us - College Event Management System"
        />
        <meta
          name="twitter:description"
          content="Get in touch with us for any queries related to event management or college events. We are here to help!"
        />
        <meta
          name="twitter:image"
          content="https://event-arch.vercel.app/images/twitter-contact.jpg"
        />
      </Helmet>

      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="p-2 rounded-md mt-[50px] mx-[30px]"
      />
      <div className="flex flex-wrap lg:flex-nowrap px-[30px] gap-[30px] justify-center">
        {filteredData.map((item, index) => (
          <AboutCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;

// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact
