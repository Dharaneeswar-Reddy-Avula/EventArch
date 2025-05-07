import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const API_URL = "https://eventarch-backend.onrender.com/api/events"; // Updated base URL

const EventRegistrationForm = ({ setSuccess, setIsModalOpen, eventID }) => {
  const [formData, setFormData] = useState({
    idNumber: "",
    eventID: eventID || "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/${eventID}/register`, {  // Updated endpoint
        IdNum: formData.idNumber,
        name: formData.name,
      });
      console.log("Registration Response:", response.data);
      setSuccess(true);
      toast.success("Registration Successful!", {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3500);
    } catch (error) {
      toast.error("Registration Failed!", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error("Registration Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl">
      <div className="w-full bg-black bg-opacity-40 shadow-xl border border-blue-500 rounded-2xl p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl text-white font-bold text-center mb-4">
            Event Registration
          </h2>
          <div className="close text-white text-3xl">
            <IoMdClose onClick={() => setIsModalOpen(false)} className="font-bold" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={handleChange}
            className="w-full p-3 text-white bg-transparent border border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 text-white bg-transparent border border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg text-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;