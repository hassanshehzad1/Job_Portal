import React, { useState } from "react";
import DashNavBar from "./DashNavBar";
import { createBrowserRouter } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";

import ID from "./ID";
import Social from "./Social";
import Skills from "./Skills";
import AppliedJobs from "./AppliedJobs";

function Dashboard({user}) {
  const [activeTab, setActiveTab] = useState("personal details");

  // Switch
  const renderComponent = () => {
    switch (activeTab) {
      case "Personal Details":
        return <PersonalDetails user={user}/>;

      case "Applied Jobs":
        return <AppliedJobs user={user} />;

      case "IDs":
        return <ID user={user} />;

      case "Social":
        return <Social user={user} />;
      case "Skills":
        return <Skills user={user}/>;
      default:
        return <PersonalDetails user={user}/>;
    }
  };
  return (
    <section className="dashboard w-[90%] mx-auto  bg-white">
      <DashNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Dynamically render the content */}
      {renderComponent()}
    </section>
  );
}

export default Dashboard;
