import { Button } from "@/components/ui/button";
import {  Bookmark } from "lucide-react";
import {  useNavigate } from "react-router-dom";

function Card({
  title,
  description,
  experienceLevel,
  id,
  salary,
  location,
  jobType,
}) {
  const navigate = useNavigate();
  const handleSingleJob = () => {
    navigate(`/singlejob/${id}`);
  };

  return (
    <div
      className="each_card p-5 rounded-md shadow-md flex flex-col gap-6 bg-white"
      id={id}
    >
      {/* Card Header */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex text-[10px] gap-2">{jobType}</div>
        </div>
        <Bookmark />
      </div>

      {/* Card Content */}
      <div className="content text-[0.9rem]">{description}.</div>
      <div className="text bold">
        <span className="flex">
          <p>Experience Level:</p>
          <p className="font-bold"> {experienceLevel}</p>
        </span>
      </div>

      {/* Salary Section */}
      <div className="flex justify-between">
        <h3 className="text-[xl] font-bold">{salary}/month</h3>
        <h3 className="text-sm">{location}</h3>
      </div>
      
      {/* Salary Section */}
      <div className="flex justify-between">
        <h3 className="text-[xl] font-bold">{salary}/month</h3>
        <h3 className="text-sm">{location}</h3>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-2">
        <Button
          className="bg-[rgb(0,164,224)] border-black text-white hover:bg-[rgb(0,194,280)] rounded-sm"
          onClick={() => handelJobCom()}
        >
          Apply Now
        </Button>{" "}
        <Button
          variant="secondary"
          className="bg-gray-200 border-black text-black hover:bg-[rgb(0,194,280)] rounded-sm"
          onClick={handleSingleJob}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}

export default Card;
