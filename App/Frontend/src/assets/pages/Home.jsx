import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Jobs from "@/components/shared/Jobs";
import Joinus from "@/components/shared/Joinus";
import Locations from "@/components/shared/Locations";
import NavBar from "@/components/shared/NavBar";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  useGetAllJobs();

  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user && user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, [user]);
  return (
    <>
      {/* Components */}
      <NavBar />

      <HeroSection />
      <Jobs />
      <Joinus />
      <Locations />
      <Footer />
      {/* >
       */}
    </>
  );
}

export default Home;
