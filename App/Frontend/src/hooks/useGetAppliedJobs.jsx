import { setAppliedJobs } from "@/redux/slices/applicantsSlice";
import { APPLIC_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAppliedJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLIC_API_END_POINT}/get/appliedjobs`, {
          withCredentials: true,
        });

        if (res?.data?.success) {
    
          dispatch(setAppliedJobs(res?.data?.applications));
        }
      } catch (error) {
        console.error(error?.message);
      }
    };
    fetchAppliedJobs();
  }, []);
}

export default useGetAppliedJobs;
