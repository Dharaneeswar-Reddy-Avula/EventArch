import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Async thunk for fetching events
export const fetchWorkshops = createAsyncThunk(
  'workshops/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/workshops");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const workshopSlice = createSlice({
  name: 'workshops',
  initialState: {
    workshops: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkshops.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkshops.fulfilled, (state, action) => {
        state.loading = false;
        state.workshops = action.payload;
      })
      .addCase(fetchWorkshops.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default workshopSlice.reducer;
