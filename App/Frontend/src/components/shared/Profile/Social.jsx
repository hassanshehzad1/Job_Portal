import { Facebook, Globe, Globe2Icon, Instagram, Twitter, WebcamIcon } from "lucide-react";
import React from "react";

function Social() {
  return (
    <div className="container mx-auto p-4">
      {/* Basic Details Section */}
      <div className="Basic_Details mb-8">
        <h2 className="text-2xl font-bold mb-4">Social Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">Facebook</h3>
            <div className="flex gap-1 items-center">
              <Facebook />
              <p className="font-bold cursor-pointer p-3">Example1234</p>
            </div>
          </div>
        </div>
      </div>
      {/* Basic Details Section */}
      <div className="Basic_Details mb-8">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">Twitter</h3>
            <div className="flex gap-1 items-center">
              <Twitter />
              <p className="font-bold cursor-pointer p-3">Example1234</p>
            </div>
          </div>
        </div>
      </div>
      {/* Basic Details Section */}
      <div className="Basic_Details mb-8">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">Instagram</h3>
            <div className="flex gap-1 items-center">
              <Instagram />
              <p className="font-bold cursor-pointer p-3">Example1234</p>
            </div>
          </div>
        </div>
      </div>
      {/* Basic Details Section */}
      <div className="Basic_Details mb-8">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">Website</h3>
            <div className="flex gap-1 items-center">
              <Globe />
              <p className="font-bold cursor-pointer p-3">Https:Random.com</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Social;
