import NavBar from "../shared/NavBar";

import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSearchCompanyText } from "@/redux/slices/companySlice";
import AdminJobs from "./AdminJobs";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchJobText } from "@/redux/slices/jobsSlice";
function Jobs() {
  useGetAllAdminJobs();
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  // UseEffects hooks
  useEffect(() => {
    dispatch(setSearchJobText(input));
  }, [input]);
  return (
    <>
      {/* Navbar  */}
      <NavBar />
      <div className=" bg-white mt-10 max-w-5xl mx-auto px-10 py-4  text-black ">
        <div className="flex justify-between  items-center">
          {/* Links the buttons */}
          <div className="inputBox flex items-center">
            <Input
              type="text"
              placeholder="Filter Jobs"
              className="border-2 border-solid border-gray-100 "
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <Button
              type="Submit"
              className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
              onClick={() => navigate("/admin/create/job")}
            >
              New Job
            </Button>
          </div>
        </div>
        <AdminJobs />
      </div>
    </>
  );
}

export default Jobs;
