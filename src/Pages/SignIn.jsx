import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin, UserRegister } from "../store/AuthSlice";

const SignIn = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
const navigate = useNavigate();
const { loading } = useSelector((state) => state.auth);

  // const onSubmitHandler = async (e) => {
  //   try {
  //     e.preventDefault();
  //     axios.defaults.withCredentials = true;
  //     if (state === "Sign Up") {
  //       const { data } = await axios.post(backendUrl + "/auth/register", {
  //         name,
  //         email,
  //         password,
  //       });
  //       if (data.success) {
  //         setIsLoggedIn(true);
  //         navigate("/");
  //       } else {
  //         toast.error(error.message);
  //       }
  //     } else {
  //       const { data } = await axios.post(backendUrl + "/auth/login", {
  //         email,
  //         password,
  //       });
  //       if (data.success) {
  //         setIsLoggedIn(true);
  //         getUserData()
  //       //   navigate("/");
  //       navigate("/");

  //       } else {
  //         toast.error(error.message);
  //       }
  //     }
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || error.message || "Something went wrong"
  //     );
  //   }
  // };


const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    const payload = { name, email, password };

    const action = state === "Sign Up"
  ? await dispatch(UserRegister(payload))
  : await dispatch(UserLogin({ email, password }));

console.log("Returned action:", action);


    if (UserLogin.fulfilled.match(action) || UserRegister.fulfilled.match(action)) {
      toast.success(`${state} successful`);
      navigate("/");
    } else {
      toast.error(action.payload || `${state} failed`);
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0f0f1a] text-white font-poppins">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-[#1a1a2e]">
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16 mx-auto mb-2" />
          <h2 className="text-3xl font-bold neon-text mb-1">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </h2>
          <p className="text-gray-400">
            {state === "Sign Up"
              ? "Create your account below"
              : "Login to your account"}
          </p>
        </div>
        <form className="space-y-5" onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-pink-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 px-4 py-3 rounded-lg bg-[#0f0f1a] border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 neon-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}
          <div className="relative">
            <MdEmail className="absolute top-4 left-3 text-pink-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 px-4 py-3 rounded-lg bg-[#0f0f1a] border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 neon-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute top-4 left-3 text-pink-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 px-4 py-3 rounded-lg bg-[#0f0f1a] border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 neon-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          {state === "Login" && (
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-pink-400 hover:underline"
                onClick={() => navigate("/resetPassword")}
              >
                Forgot Password?
              </a>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#ce2eff] hover:bg-pink-700 transition-colors shadow-md neon-button"
          >
            {state === "Sign Up" ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p
            className="cursor-pointer text-sm text-gray-400 hover:text-pink-400"
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
          >
            {state === "Sign Up"
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </p>
        </div>
        <div className="mt-6 text-center">
          <a
            href="http://localhost:5000/api/auth/google"
            className="flex items-center justify-center gap-3 py-2 px-2 rounded-full bg-transparent border border-pink-500 hover:bg-pink-500 neon-button transition-colors"
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
