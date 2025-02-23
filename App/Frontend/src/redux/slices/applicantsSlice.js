// Importing packages
import { createSlice } from "@reduxjs/toolkit";

// Auth slice
const applicantsSlice = createSlice({
  // Initial states
  name: "applications",
  initialState: {
    applications: [],
    appliedJobs: [],
  },

  //   Reducers
  reducers: {
    //  Actions
    setApplicants: (state, actions) => {
      state.applications = actions.payload;
    },

    setAppliedJobs: (state, actions) => {
      state.appliedJobs = actions.payload;
    },
  },
});

export const { setApplicants, setAppliedJobs } = applicantsSlice.actions;
export default applicantsSlice.reducer;
