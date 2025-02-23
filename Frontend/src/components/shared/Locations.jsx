import { MoveRight } from "lucide-react";

import image from "../../../public/Images/Sydny.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Locations() {
  const { allJobs } = useSelector((store) => store.job);
  const  navigate =  useNavigate();

  // Count on the basis of location
  const countLocation = allJobs?.reduce((previous, current) => {
    const matchIndex = previous?.findIndex(
      (item) => item?.location == current?.location
    );

    if (matchIndex > -1) {
      previous[matchIndex].count += 1;
    } else {
      previous.push({ country: current?.location, count: 1 });
    }

    return previous;
  }, []);

  return (
    <>
      <section className="w-[65rem] mt-12 mx-auto mb-8 location_section">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-extrabold font-sans">Our Locations</h2>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">View all locations</p>
            <MoveRight className="mt-2 tet-3xl cursor-pointer "   onClick={()=>navigate("/jobs/browse")}/>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards_section mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* Card */}
          {countLocation?.slice(0,4).map((item, index) => (
            <div
              key={index}
              className="cards flex items-center p-6 rounded-[12px] shadow-md w-full h-[10rem] bg-cover bg-center text-white relative"
              style={{
                backgroundImage: `url(${image})`, // Replace with actual images
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[12px]"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-2xl font-bold">{item.country}</h3>
                <p className="text-lg font-light">{item.count} Jobs</p>
              </div>

              {/* Arrow */}
              <MoveRight className="relative z-10 text-3xl ml-auto cursor-pointer" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Locations;
