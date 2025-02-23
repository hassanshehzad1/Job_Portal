import Filter from "@/components/shared/Careers/Filter";
import Heading from "@/components/shared/Careers/Heading";
import JobDetail from "@/components/shared/Careers/JobSearch/JobDetail";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import React, { useState } from "react";

function Careers() {
  const [jobSelect, useJobSelect] = useState(null);

  const handleJobCom = (job) => {
    useJobSelect(job);
  };
  return (
    <>
      <NavBar />
      <Heading />
      {!jobSelect ? <Filter handleJobCom={handleJobCom} /> : <JobDetail />}
      <Footer />
    </>
  );
}

export default Careers;
