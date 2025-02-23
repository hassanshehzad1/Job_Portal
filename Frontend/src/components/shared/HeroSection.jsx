
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

// Image
import background from "../../../public/Images/background.jpg";
import { useDispatch } from "react-redux";
import { Input } from "../ui/input";
import { setSearchByJob } from "@/redux/slices/jobsSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function HeroSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, searchByName] = useState("");

  const searchHandler = () => {
    dispatch(setSearchByJob(search));
    navigate("/jobs/Browse");
  };
  return (
    <>
      {/* Main */}
      <main>
        {/* Full div */}
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover", // Adjusts the image to cover the entire area
            backgroundPosition: "center", // Centers the image
            height: "80vh", // Full viewport height
            width: "100%", // Full width
            filter: "brightness(0.9)", // Reduces brightness to make the image dull
            position: "relative", // Enables absolute positioning for overlay
          }}
          className="mt-4 "
        >
          {/* Overlay */}
          <div className="flex justify-between items-center max-w-5xl mx-auto mt-4">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent dark overlay
              }}
            ></div>

            {/* Content div */}
            <div
              style={{
                position: "relative", // Ensures the content appears above the overlay
                zIndex: 1, // Places content above the overlay
              }}
              className="mt-12"
            >
              <div className="w-[44rem]">
                <h1 className="text-white  text-5xl font-bold mb-4">
                  Explore open career opportunities.
                </h1>
                <p className="text-md text-gray-50">
                  We commit to exceptional company culture and outstanding
                  benefits
                </p>
              </div>
              {/* Search */}
              <div className="flex bg-white mt-6 py-5 items-center justify-around rounded b-2 solid border-r-black">
                <h2 className="text-2xl font-semibold text-black ">
                  Find the job that best suits you.
                </h2>
                {/* Options */}
                <div className="">
                  <Input
                    type="text"
                    placeholder="Search job"
                    className="p-2 border-b border-b-gray-300 rounded-t"
                    name="search"
                    onChange={(e) => searchByName(e.target.value)}
                  ></Input>
                </div>

                {/* Button */}
                <Button
                  onClick={searchHandler}
                  className="bg-[rgb(0,164,224)] px-8 hover:bg-[rgb(0,164,224)] text-white rounded"
                >
                  Search
                </Button>
              </div>

              {/* Discover images */}
              <div className="mt-6 flex justify-between ">
                <span className="flex items-center justify-between p-3  rounded bg-[#ffde7f] w-[45%]">
                  <p className="text-lg font-semibold">Discover Recent News</p>
                  <ArrowRight />
                </span>
                <span className="flex items-center justify-between p-3  rounded bg-[#ffde7f] w-[45%]">
                  <p className="text-lg font-semibold">Known Our Process</p>
                  <ArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
