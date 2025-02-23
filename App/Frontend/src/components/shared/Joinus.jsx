import React from "react";
import background from "../../../public/Images/join.jpg";
import { Button } from "../ui/button";
function Joinus() {
  return (
    <>
      {/* Main */}
      <section className="mt-14 join-section mb-4">
        {/* Full div */}
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover", // Adjusts the image to cover the entire area
            backgroundPosition: "center", // Centers the image
            height: "50vh", // Full viewport height
          }}
          className="relative"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h3 className="text-3xl sm:text-4xl w-[49rem] px-44 font-bold mb-4">
              We're more than just a workplace. We're a family.
            </h3>

            <Button className="bg-[rgb(0,164,224)] px-8 hover:bg-[rgb(0,164,224)] text-white rounded">
              Join Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Joinus;
