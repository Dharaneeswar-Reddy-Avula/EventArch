import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EmailVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.defaults.withCredentials = true;

    try {
      // Replace this with your backend API call
      console.log("Verifying OTP:", otp);
      const res = await axios.post(backendUrl + "/auth/verifyEmail", { otp });
      if (res.data.success) {
        alert("OTP verified successfully!");
        navigate("/")
        // Optionally redirect to home or login
      } else {
        alert(res.data.message || "Verification failed");
      }
    } catch (error) {
      alert("Invalid OTP or verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Email Verification
        </h2>

        <label className="block mb-2">Enter OTP</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </form>
    </div>
  );
};

export default EmailVerify;
