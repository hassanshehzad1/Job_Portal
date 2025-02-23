import  { useEffect, useState } from "react";
import Card from "./CardData";
import { useSelector } from "react-redux";

function Cards() {
  const { allJobs, searchByJob } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchByJob === "All") {
      setFilterJobs(allJobs);
    } else if (searchByJob) {
      const filterResult = allJobs.filter((job) => {
        return (
          job?.title?.toLowerCase().includes(searchByJob.toLowerCase()) ||
          job?.description?.toLowerCase().includes(searchByJob.toLowerCase()) ||
          job?.jobType?.toLowerCase().includes(searchByJob.toLowerCase()) ||
          job?.location?.toLowerCase().includes(searchByJob.toLowerCase())
        );
      });

      setFilterJobs(filterResult);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, filterJobs]);
  return (
    <div className="flex flex-col my-5">
      {/* Header */}
      <h2 className="text-xl font-bold text-left">
        Showing results: {filterJobs?.length}
      </h2>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-4">
        {filterJobs?.map((card, index) => (
          <Card
            key={index}
            id={card._id}
            title={card?.title}
            description={card?.description}
            experienceLevel={card?.experienceLevel}
            salary={card?.salary}
            location={card?.location}
            jobType={card?.jobType}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
