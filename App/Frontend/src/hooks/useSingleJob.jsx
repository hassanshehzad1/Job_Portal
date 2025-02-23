import { setAllJobs, setJobByID } from "@/redux/slices/jobsSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useSingleJob() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleJob = async (id) => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${id}`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setJobByID(res.data.json));
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchSingleJob();
  }, []);
}

export default useSingleJob;
