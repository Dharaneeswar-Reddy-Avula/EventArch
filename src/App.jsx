import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Workshops from "./Pages/Workshops";
import About from "./Pages/About";
import Contact from "./components/Contact";
import Sponsors from "./Pages/Sponsors";
import SignIn from "./Pages/SignIn";
import EmailVerify from "./Pages/EmailVerify";
import ResetPassword from "./Pages/ResetPassword";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { useSelector } from "react-redux";
const App = () => {
    
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      <Router>
          <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home />:<Navigate to="/signIn"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/verifyEmail" element={<EmailVerify />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
