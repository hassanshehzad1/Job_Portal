import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#002f5b] py-8 text-white w-full">
        {/* Main Content */}
        <div className="four_divs w-[90%] max-w-[1200px] mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Each Div */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <h1 className="text-white text-3xl font-medium">
                Transparent <span className="text-[rgb(0,164,224)]">BPO</span>
              </h1>
            </div>
            {/* Subheading */}
            <div>
              <h2 className="text-[1.2rem] relative inline-block font-bold">
                Outsourcing Transformed
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ffe17f]"></span>
              </h2>
              {/* Nav List */}
              <ul className="flex flex-col gap-2 mt-4">
                <li className="cursor-pointer text-gray-200">
                  Customized Solutions.
                </li>
                <li className="cursor-pointer text-gray-200">
                  Passionate Culture.
                </li>
                <li className="cursor-pointer text-gray-200">
                  Committed to your success.
                </li>
              </ul>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <span className="p-3 rounded-[10px] shadow-md cursor-pointer bg-[#ffe17f] text-black">
                <TwitterIcon />
              </span>
              <span className="p-3 rounded-[10px] shadow-md cursor-pointer bg-[#ffe17f] text-black">
                <FacebookIcon />
              </span>
              <span className="p-3 rounded-[10px] shadow-md cursor-pointer bg-[#ffe17f] text-black">
                <LinkedinIcon />
              </span>
              <span className="p-3 rounded-[10px] shadow-md cursor-pointer bg-[#ffe17f] text-black">
                <YoutubeIcon />
              </span>
            </div>
          </div>

          {/* Other Divs */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-[1.5rem] relative inline-block font-bold">
                Jobs by Service
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ffe17f]"></span>
              </h2>
            </div>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="cursor-pointer text-gray-200">Inbound Voice</li>
              <li className="cursor-pointer text-gray-200">Outbound Voice</li>
              <li className="cursor-pointer text-gray-200">
                Multi-channel Support
              </li>
              <li className="cursor-pointer text-gray-200">
                Back-office Support
              </li>
              <li className="cursor-pointer text-gray-200">
                Work-Secure Suite
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-[1.5rem] relative inline-block font-bold">
                Jobs by Location
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ffe17f]"></span>
              </h2>
            </div>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="cursor-pointer text-gray-200">
                Corporate Headquarters
              </li>
              <li className="cursor-pointer text-gray-200">Belize</li>
              <li className="cursor-pointer text-gray-200">Jamaica</li>
              <li className="cursor-pointer text-gray-200">Philippines</li>
              <li className="cursor-pointer text-gray-200">Canada</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-[1.5rem] relative inline-block font-bold">
                Jobs by Setup
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ffe17f]"></span>
              </h2>
            </div>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="cursor-pointer text-gray-200">Remote</li>
              <li className="cursor-pointer text-gray-200">On-site</li>
              <li className="cursor-pointer text-gray-200">Hybrid</li>
            </ul>
            <div className="flex flex-col gap-6 mt-8">
              <div>
                <h2 className="text-[1.5rem] relative inline-block font-bold">
                  Jobs by Employment
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ffe17f]"></span>
                </h2>
              </div>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="cursor-pointer text-gray-200">Full-Time</li>
                <li className="cursor-pointer text-gray-200">Part-Time</li>
                <li className="cursor-pointer text-gray-200">Contractual</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 w-[90%] max-w-[1200px] mx-auto pb-4">
          <hr className="w-full bg-white h-[2px] rounded-md" />
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
            <p>&copy; Built in 2025</p>
            <ul className="flex items-center gap-4 text-gray-200">
              <li className="cursor-pointer">About TBPO</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms of Use</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
