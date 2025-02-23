import { setAllAdminJobs } from "@/redux/slices/jobsSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAllAdminJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/admin/jobs`, {
          withCredentials: true,
        });

    
        if (res?.data?.success) {
         
          dispatch(setAllAdminJobs(res?.data?.jobs || [])); // Ensure empty array if undefined
        } else {
          console.error("API did not return success");
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    getAllAdminJobs();
  }, []);
}

export default useGetAllAdminJobs;
