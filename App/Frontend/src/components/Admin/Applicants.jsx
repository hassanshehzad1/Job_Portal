import axios from "axios";
import NavBar from "../shared/NavBar";
import ApplicantsTables from "./ApplicantsTables";
import { useParams } from "react-router-dom";
import { APPLIC_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setApplicants } from "@/redux/slices/applicantsSlice";

function Applicants() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLIC_API_END_POINT}/get/applicants/${params.id}`,
          {
            withCredentials: true,
          }
        );

        if (res?.data?.success) {
          dispatch(setApplicants(res?.data?.applications));
        }
      } catch (error) {
        console.error(error?.response?.data?.message);
      }
    };

    fetchAllApplicants();
  }, []);

  const { applications } = useSelector((store) => store?.applications);

  return (
    <div>
      {/* Applicants */}
      <NavBar />
      <div className=" bg-white mt-10 max-w-5xl mx-auto px-10 py-4  text-black ">
        {applications && applications?.applications?.length > 0 ? (
          <>
            <h1>Total Applicants: {applications?.applications?.length}</h1>

            <ApplicantsTables />
          </>
        ) : (
          <h1>No Applicants applied for this job</h1>
        )}
      </div>
    </div>
  );
}

export default Applicants;
