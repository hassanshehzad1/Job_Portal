import { createSlice } from "@reduxjs/toolkit";

// Job Slice
const jobsSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    jobById: null,
    allAdminJobs: [],
    searchJobText: "",
    searchByJob: "",
  },

  //Set all jobs
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setJobByID: (state, action) => {
      state.jobById = action.payload;
    },

    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobText: (state, action) => {
      state.searchJobText = action.payload;
    },
    setSearchByJob: (state, action) => {
      state.searchByJob = action.payload;
    },
  },
});

export const { setAllJobs, setJobByID, setAllAdminJobs, setSearchJobText, setSearchByJob } =
  jobsSlice.actions;
export default jobsSlice.reducer;
