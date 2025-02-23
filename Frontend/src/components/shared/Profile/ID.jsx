import React from "react";

function ID() {
  return (
    <div className="container mx-auto p-4">
      {/* Basic Details Section */}
      <div className="Basic_Details mb-8">
        <h2 className="text-2xl font-bold mb-4">ID's Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">SSN</h3>
            <blockquote className="text-light">N/A</blockquote>
          </div>
        </div>
      </div>

      {/* Address Details Section */}
      <div className="Address_Details mb-8">
        <h2 className="text-2xl font-bold mb-4">NIS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col col-span-2">
            <blockquote className="text-light">N/A</blockquote>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="Contact_Details">
        <h2 className="text-2xl font-bold mb-4">Card Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <blockquote className="text-light">N/A</blockquote>
          </div>
        
       
        </div>
      </div>
    </div>
  );
}

export default ID;
