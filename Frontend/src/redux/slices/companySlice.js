// Importing packages
import { createSlice } from "@reduxjs/toolkit";

// Auth slice
const companySlice = createSlice({
  // Initial states
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
    searchCompanyText: "",
  },

  //   Reducers
  reducers: {
    //  Actions

    setSingleCompany: (state, actions) => {
      state.singleCompany = actions.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompanyText: (state, action) => {
      state.searchCompanyText = action.payload;
    },
  },
});

export const { setSingleCompany, setCompanies, setSearchCompanyText } =
  companySlice.actions;
export default companySlice.reducer;
