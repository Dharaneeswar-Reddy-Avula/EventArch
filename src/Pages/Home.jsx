import React from "react";
import Footer from "../components/Footer";
import About from "./About";
import Workshops from "../components/Workshops";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="bg-[#12122d]">
      <Helmet>
        <title>College Event Management System - Home</title>
        <meta
          name="description"
          content="Manage all your college events with ease using our Event Management System. Simplify event planning, track participants, and more."
        />
        <meta
          name="keywords"
          content="event management, college events, event planner, event registration, event tracker, college event organizer"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://event-arch.vercel.app/" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="College Event Management System - Home"
        />
        <meta
          property="og:description"
          content="Manage all your college events with ease using our Event Management System. Simplify event planning, track participants, and more."
        />
        <meta
          property="og:image"
          content="https://event-arch.vercel.app/images/og-image.jpg"
        />
        <meta property="og:url" content="https://event-arch.vercel.app/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="College Event Management System - Home"
        />
        <meta
          name="twitter:description"
          content="Manage all your college events with ease using our Event Management System. Simplify event planning, track participants, and more."
        />
        <meta
          name="twitter:image"
          content="https://event-arch.vercel.app/images/twitter-image.jpg"
        />
      </Helmet>

      <Navbar />
      <Workshops />
      <Events />

      <Footer />
    </div>
  );
};

export default Home;
