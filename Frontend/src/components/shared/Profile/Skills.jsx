import React from "react";
import { useSelector } from "react-redux";

function Skills() {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="container mx-auto p-4">
      {/* Basic Details Section */}
      <div className="Basic_Details mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {user?.profile?.skills?.length > 0 ? (
            user?.profile?.skills.map((skill, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="font-bold">{skill}</h3>
                <blockquote className="text-light">Advance</blockquote>
              </div>
            ))
          ) : (
            <p>No Skills</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
