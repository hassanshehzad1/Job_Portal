// Importing packages
import { createSlice } from "@reduxjs/toolkit";

// Auth slice
const authSlice = createSlice({
  // Initial states
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },

  //   Reducers
  reducers: {
    //  Actions

    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
