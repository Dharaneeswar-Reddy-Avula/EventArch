import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EventRegistrationForm from "../components/EventReg";
import { ToastContainer } from "react-toastify";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Events = () => {
  const API_URL = "https://eventarch-backend.onrender.com/api";
  const [events, setEvents] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/events`);
      setEvents(data?.events || data);
    } catch (error) {
      toast.error("Error fetching events!");
      console.error(
        "Error fetching events:",
        error.response?.data || error.message
      );
    }
  };

  const openRegistrationForm = (id) => {
    setSelectedEventId(id);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Events - College Event Management System</title>
        <meta
          name="description"
          content="View and register for upcoming college events. Our event management system helps you track events, participants, and more."
        />
        <meta
          name="keywords"
          content="upcoming college events, event registration, college event calendar, event participation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://event-arch.vercel.app/events" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Events - College Event Management System"
        />
        <meta
          property="og:description"
          content="View and register for upcoming college events. Our event management system helps you track events, participants, and more."
        />
        <meta
          property="og:image"
          content="https://event-arch.vercel.app/images/og-events.jpg"
        />
        <meta
          property="og:url"
          content="https://event-arch.vercel.app/events"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Events - College Event Management System"
        />
        <meta
          name="twitter:description"
          content="View and register for upcoming college events. Our event management system helps you track events, participants, and more."
        />
        <meta
          name="twitter:image"
          content="https://event-arch.vercel.app/images/twitter-events.jpg"
        />
      </Helmet>

      <div>
        {" "}
        <Navbar />
      </div>
      <div className="flex justify-center flex-col items-center">
        {/* Move ToastContainer here so it stays in the DOM */}
        <ToastContainer />

        <div className="flex justify-center">
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
            Upcoming Events
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-4 justify-center">
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard
                key={event._id}
                id={event._id}
                image={event.image}
                category={event.category}
                name={event.name}
                time={event.time}
                setIsModalOpen={setIsModalOpen}
                openRegistrationForm={openRegistrationForm}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 mt-10">No events found.</p>
          )}
          {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="w-96">
                {/* Remove ToastContainer from here */}
                <EventRegistrationForm
                  setSuccess={setSuccess}
                  setIsModalOpen={setIsModalOpen}
                  eventID={selectedEventId}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Events;
