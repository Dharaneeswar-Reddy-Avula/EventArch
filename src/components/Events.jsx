import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EventCard from "./EventCard";
import EventRegistrationForm from "./EventReg";
import { ToastContainer } from "react-toastify";
import { fetchEvents } from "../store/EventsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Events = () => {
  // const API_URL = "https://eventarch-backend.onrender.com/api";
    // const API_URL = import.meta.env.VITE_API_BASE_URL;
const dispatch = useDispatch()
  const [success, setSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const { events, loading, error } = useSelector((state) => state.events);

 
  const openRegistrationForm = (id) => {
    setSelectedEventId(id);
    setIsModalOpen(true);
  };

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="flex justify-center flex-col items-center">
      {/* Move ToastContainer here so it stays in the DOM */}
      <ToastContainer />
      
      <div className="flex justify-center">
      <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] mb-[50px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
 Upcoming Events
</h1>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 justify-center">
        {events.length > 0 ? (
          events.slice(0, 4).map((event) => (
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
  );
};

export default Events;