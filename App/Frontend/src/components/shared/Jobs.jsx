import { LocateIcon, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Jobs() {
  // Fetching jobs
  const { allJobs } = useSelector((store) => store.job);
const navigate =  useNavigate();
  


  return (
    <>
      <section className="w-[65rem] mt-12 mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-extrabold font-sans">
            Latest Featured Jobs
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold "
           >Explore More</p>
            <MoveRight className="mt-2 tet-3xl cursor-pointer "   onClick={()=>navigate("/jobs/browse")}/>
          </div>
        </div>

        {/* Iterate Jobs */}

        <div className="cards_section mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {allJobs?.length > 0 ? (
            allJobs?.slice(0, 3)?.map((job) => (
              <div
                key={job?.id}
                className="cards flex flex-col rounded-[12px] w-[90%] mx-auto gap-4 shadow-md"
              >
                {/* Content */}
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="flex flex-col px-4 gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold">{job?.title}</h3>
                      <span>
                        <blockquote className="font-light">
                          {job?.jobType}
                        </blockquote>
                      </span>
                    </div>
                    <div className="content text-[0.9rem]">
                      <h3 className="text-xl font-bold">Description</h3>
                      <p>{job?.description}</p>
                    </div>
                    <div className="Type">
                      <span className="flex items-center gap-3 mb-1">
                        <p className="text-xl font-bold">Experience Level</p>
                        <p>{job?.experienceLevel}</p>
                      </span>
                      <span className="flex items-center gap-3 mt-1">
                        <LocateIcon />
                        <p>{job?.location}</p>
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <Button className="bg-[rgb(0,164,224)] px-8 hover:bg-[rgb(0,164,224)] w-full text-white rounded"  onClick={()=>navigate(`/singlejob/${job?._id}`)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-2xl">No Jobs Available</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Jobs;
