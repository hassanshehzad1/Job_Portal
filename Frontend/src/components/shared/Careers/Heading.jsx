import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Cross,
  CrossIcon,
  Locate,
  MoveRight,
  Search,
  TimerIcon,
  Type,
} from "lucide-react";
import React from "react";

function Heading() {
  return (
    <>
      <div className="bg-[#014072] text-white h-[8rem] mb-4">
        <h2 className="ml-32 pt-4 text-3xl font-bold">Careers</h2>
        <p className="ml-32 pt-2 text-xl">Home / Careers</p>
      </div>

      <section className="w-[83%] mx-auto">
        <div className="mt-4 grid grid-cols-[1fr,1fr,1fr,1fr,auto] gap-4 items-center">
          <span className="relative flex items-center">
            {/* Search Icon */}
            <span className="absolute left-3 text-gray-500">
              <Search />
            </span>

            {/* Input Field */}
            <Input
              type="text"
              placeholder="Job Name"
              className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Cross Icon */}
            <span className="absolute right-3 text-gray-500 cursor-pointer">
              <CrossIcon />
            </span>
          </span>

          <span className="relative flex items-center">
            {/* Timer Icon */}
            <span className="absolute left-3 text-gray-500">
              <TimerIcon />
            </span>

            {/* Input Field */}
            <Input
              type="text"
              placeholder="Job Time"
              className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Cross Icon */}
            <span className="absolute right-3 text-gray-500 cursor-pointer">
              <CrossIcon />
            </span>
          </span>

          <span className="relative flex items-center">
            {/* Locate Icon */}
            <span className="absolute left-3 text-gray-500">
              <Locate />
            </span>

            {/* Input Field */}
            <Input
              type="text"
              placeholder="Country"
              className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Cross Icon */}
            <span className="absolute right-3 text-gray-500 cursor-pointer">
              <CrossIcon />
            </span>
          </span>

          <span className="relative flex items-center">
            {/* Type Icon */}
            <span className="absolute left-3 text-gray-500">
              <Type />
            </span>

            {/* Input Field */}
            <Input
              type="text"
              placeholder="Job Type"
              className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Cross Icon */}
            <span className="absolute right-3 text-gray-500 cursor-pointer">
              <CrossIcon />
            </span>
          </span>

          {/* Right Arrow */}
          <div className="flex items-center justify-center w-[50px] h-[50px] bg-[rgb(0,164,224)] text-white rounded-full cursor-pointer shadow-md hover:translate-x-1 transition-transform duration-200">
            <ArrowRight />
          </div>
        </div>
      </section>
    </>
  );
}

export default Heading;
