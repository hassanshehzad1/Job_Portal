import React from "react";

function DashNavBar({ activeTab, setActiveTab }) {
  const tabs = ["Personal Details", "Applied Jobs", "IDs", "Social","Skills"];

  return (
    <div className="DashNavBar w-full border-b border-gray-300">
      <nav className="navBar w-[70%] mx-auto">
        <ul className="flex gap-12 mt-4">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              } hover:text-blue-400 pb-2`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DashNavBar;
