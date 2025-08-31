// src/store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Async thunk for Login
export const UserLogin = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/login", credentials);
      console.log("Login API full response:", res); // Log full response
      console.log("Login API response data:", res.data); // Log response data

      const { user, token } = res.data;
      if (!user || !token) {
        console.error("Missing fields in response:", { user, token });
        throw new Error(
          `Invalid response structure: missing ${!user ? "user" : ""}${
            !user && !token ? " and " : ""
          }${!token ? "token" : ""}`
        );
      }

      return { user, token };
    } catch (error) {
      console.error("Login error:", error); // Log error details
      const message =
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please check your credentials and try again.";
      return rejectWithValue(message);
    }
  }
);

// Async thunk for Registration
export const UserRegister = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/register", userData);
      console.log("Register API response:", res.data); // Debug log
      const { user, token } = res.data;
      if (!user || !token) {
        throw new Error("Invalid response structure: missing user or token");
      }
      return { user, token };
    } catch (error) {
      console.error("Register error:", error); // Debug log
      const message =
        error.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again.";
      return rejectWithValue(message);
    }
  }
);

// Async thunk for fetching user data
export const fetchUserData = createAsyncThunk(
  "auth/user",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/user/data");
      console.log("Fetch user data API response:", res.data); // Debug log
      // Normalize response structure
      const user = res.data.data?.user || res.data.user || res.data;
      if (!user) {
        throw new Error("Invalid response structure: missing user");
      }
      return { user };
    } catch (error) {
      console.error("Fetch user data error:", error); // Debug log
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch user data.";
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder
      .addCase(UserLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(UserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // REGISTER
    builder
      .addCase(UserRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(UserRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // FETCH USER DATA
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;