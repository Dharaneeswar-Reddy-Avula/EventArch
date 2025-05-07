import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Workshopcard from "../components/Workshopcard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Workshops = () => {
  const API_URL = "https://eventarch-backend.onrender.com/api";
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchEvents = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/workshops`);
      setEvents(data?.Workshops || data); // Adjust based on API response
    } catch (error) {
      toast.error("Error fetching events!");
      console.error(
        "Error fetching events:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Workshops - College Event Management System</title>
        <meta
          name="description"
          content="Explore and register for workshops organized by your college. Learn new skills and expand your knowledge."
        />
        <meta
          name="keywords"
          content="college workshops, college skills workshops, event registration, workshops registration"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://event-arch.vercel.app/workshops" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Workshops - College Event Management System"
        />
        <meta
          property="og:description"
          content="Explore and register for workshops organized by your college. Learn new skills and expand your knowledge."
        />
        <meta
          property="og:image"
          content="https://event-arch.vercel.app/images/og-workshops.jpg"
        />
        <meta
          property="og:url"
          content="https://event-arch.vercel.app/workshops"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Workshops - College Event Management System"
        />
        <meta
          name="twitter:description"
          content="Explore and register for workshops organized by your college. Learn new skills and expand your knowledge."
        />
        <meta
          name="twitter:image"
          content="https://event-arch.vercel.app/images/twitter-workshops.jpg"
        />
      </Helmet>

      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] mb-[50px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
            Upcoming Workshops
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-fit mx-auto justify-items-center">
          {events.length > 0 ? (
            events.map((event) => (
              <Workshopcard
                key={event._id}
                id={event._id}
                image={event.image}
                category={event.category}
                name={event.name}
                time={event.time}
                setIsModalOpen={setIsModalOpen}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 mt-10">No events found.</p>
          )}
          {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Event Registration</h2>
                <p className="text-gray-600">Register for this event now!</p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Close
                </button>
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

export default Workshops;
