import { Button } from "@/components/ui/button";
import { Dot, BaggageClaim } from "lucide-react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function JobResult({ job, applyJob,  isApplied}) {
  const { user } = useSelector((store) => store.auth);

  // Getting jobs hours
  const jobTime = (mongodbTime) => {
    const createdAt = new Date(job?.createdAt);
    const currentTime = new Date();
    const timeDiff = currentTime - createdAt;

    return Math.floor(timeDiff / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="job_Results flex flex-col gap-6">
      {/* Heading */}
      <div className="heading">
        <h2 className="text-2xl md:text-3xl font-extrabold">{job?.title}</h2>
      </div>

      {/* Description */}
      <div className="job_description">
        <h3 className="text-lg md:text-xl font-bold">Job Description</h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {job?.description}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="responsibilities">
        <h3 className="text-lg md:text-xl font-bold">Salary</h3>
        <ul className="flex flex-col gap-4">{job?.salary}</ul>
      </div>
      {/* Responsibilities */}
      <div className="responsibilities">
        <h3 className="text-lg md:text-xl font-bold">Location</h3>
        <ul className="flex flex-col gap-4">{job?.location}</ul>
      </div>

      <div className="responsibilities">
        <h3 className="text-lg md:text-xl font-bold">Job Type</h3>
        <ul className="flex flex-col gap-4">{job?.jobType}</ul>
      </div>
      <div className="responsibilities">
        <h3 className="text-lg md:text-xl font-bold">Position</h3>
        <ul className="flex flex-col gap-4">{job?.position}</ul>
      </div>
      <div className="responsibilities">
        <h3 className="text-lg md:text-xl font-bold">Experience Level</h3>
        <ul className="flex flex-col gap-4">{job?.experienceLevel}</ul>
      </div>

      {/* Requirements */}
      <div className="requirenments">
        <h3 className="text-lg md:text-xl font-bold">Requirements</h3>
        <ul className="text-sm md:text-base text-gray-700 leading-relaxed">
          {job?.requirements?.map((value, index) => (
            <li className="" key={index}>
              {value}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-4"></ul>
      </div>

      <div className="responsibilities">
        <h3 className="text-lg md:text-xl font-bold">Created At</h3>
        <ul className="flex flex-col gap-4">
          {jobTime(job?.createdAt) === 0
            ? "Today"
            : `${jobTime(job?.createdAt)} days ago`}
        </ul>
      </div>
      
      <div className="responsibilities">
        <h3 className="text-lg md:text-xl font-bold">Applications</h3>
           {job?.applications?.length}
      </div>
      {/* Apply Button */}
      <div>
        {!isApplied ? (
          <Button
            onClick={isApplied ? null : applyJob} // 🔹 'onClick' sahi kar diya
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm md:text-base"
          >
            <BaggageClaim className="mr-2" />
            Apply for this position
          </Button>
        ) : (
          <Button
            className="bg-yellow-900
         hover:bg-yellow-500 text-black font-semibold text-sm md:text-base"
            disabled
          >
            <BaggageClaim className="mr-2" />
            Applied
          </Button>
        )}
      </div>
    </div>
  );
}

export default JobResult;
