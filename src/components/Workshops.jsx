import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Workshopcard from "./Workshopcard";
import { useSelector,useDispatch } from "react-redux";
import { fetchWorkshops } from "../store/WorkshopSlice";
const Workshops = () => {
  // const API_URL = "https://eventarch-backend.onrender.com/api";
    // const API_URL = import.meta.env.VITE_API_BASE_URL;

  // const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const fetchEvents = async () => {
  //   try {
  //     const { data } = await axios.get(`${API_URL}/workshops`);
  //     setEvents(data?.Workshops || data); // Adjust based on API response
  //   } catch (error) {
  //     toast.error("Error fetching events!");
  //     console.error(
  //       "Error fetching events:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

const dispatch = useDispatch();
 const {workshops,loading,error} = useSelector((state)=>state.workshops)
  useEffect(() => {
    dispatch(fetchWorkshops());
  }, [dispatch]);


  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] mb-[50px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
          Upcoming Workshops
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-fit mx-auto justify-items-center">
        {workshops.length > 0 ? (
          workshops
            .slice(0, 4)
            .map((workshops) => (
              <Workshopcard
                key={workshops._id}
                id={workshops._id}
                image={workshops.image}
                category={workshops.category}
                name={workshops.name}
                time={workshops.time}
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
  );
};

export default Workshops;
