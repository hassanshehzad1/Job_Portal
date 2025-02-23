import React from "react";
import NavBar from "../NavBar";
import ProfilePhoto from "./ProfilePhoto";
import WorkRecently from "./WorkRecently";
import DashNavBar from "./DashNavBar";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  // Destructure user
  const { user } = useSelector((store) => store.auth);
 
  return (
    <>
      <NavBar />
      <section className="Profile_Pages w-[88%] mx-auto mt-5 bg-[#ebf1fa] grid grid-cols-1 md:grid-cols-[25%_75%] gap-4 p-5">
        <div className="left flex flex-col gap-4">
          <ProfilePhoto user={user} />
          <WorkRecently user={user} />
        </div>
        <div className="right rounded-[20px] shadow-md bg-white">
          <Dashboard user={user} />
        </div>
      </section>
    </>
  );
};

export default Profile;
