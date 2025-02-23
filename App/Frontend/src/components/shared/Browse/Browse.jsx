
import NavBar from "../NavBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Careers/CardData";
import { setSearchByJob } from "@/redux/slices/jobsSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useEffect } from "react";

function Browse() {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  // Clear the store
  useEffect(() => {
    return () => {
      dispatch(setSearchByJob(""));
    };
  }, [dispatch]);

  return (
    <>
      <NavBar />
      
      <section className="w-[90%] max-w-screen-xl mx-auto px-4 mt-5">
        {/* Header */}
        <h2 className="text-xl font-bold text-left my-5">
          Showing results: {allJobs.length}
        </h2>

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allJobs.map((card, index) => (
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
      </section>
    </>
  );
}

export default Browse;
