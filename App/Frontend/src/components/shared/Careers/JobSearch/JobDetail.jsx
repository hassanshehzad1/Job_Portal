import React, { useEffect, useState } from "react";
import JobResult from "./JobResult";
import Summary from "./Summary";
import Cards from "../Cards";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JOB_API_END_POINT, APPLIC_API_END_POINT } from "@/utils/constant";
import { setJobByID } from "@/redux/slices/jobsSlice";
import { User } from "lucide-react";
import { toast } from "sonner";

function JobDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { jobById } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  //Check job is applied
  const initiallyApplied = jobById?.applications?.some((application) => {
    return application?.applicant?._id?.toString() === user?._id?.toString();
  });

  const [isApplied, setIsApplied] = useState(initiallyApplied);
    console.log("Ini",isApplied);
  // Apply job
  const applyJob = async () => {
    try {
      const res = await axios.get(`${APPLIC_API_END_POINT}/applyjob/${id}`, {
        withCredentials: true,
      });
      console.log(res.data.message);

      if (res.data.success) {
        setIsApplied(true); // Update the variable
        const updateSingleJob = {
          ...jobById,
          applications: [
            ...(jobById?.applications || []),
            { applicant: user?.id },
          ],
        };
        dispatch(setJobByID(updateSingleJob)); //Dispatch single job
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchById = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${id}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setJobByID(res.data.job));

          // Update the variable
          setIsApplied(
            res?.data?.job?.applications?.some((application) => {
              return application?.applicant?._id?.toString() === user?._id?.toString();
            })
          );
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchById();
  }, [id, dispatch, user?.id]);

  return (
    <section className="job_Details grid grid-cols-1 md:grid-cols-4 gap-6 w-[83%] max-w-screen-xl mx-auto px-4 mt-5">
      {/* JobResult: Main Content, 75% width */}
      <div className="md:col-span-3">
        {user ? (
          <JobResult
            job={jobById}
            applyJob={applyJob}
            isApplied={isApplied}
          />
        ) : (
          "Login First"
        )}
      </div>

      {/* Summary and Cards: 25% width */}
      <div className="flex flex-col md:col-span-1 space-y-6">
        <Summary />
        <Cards />
      </div>
    </section>
  );
}

export default JobDetail;
