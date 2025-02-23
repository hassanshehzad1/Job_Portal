import React from "react";

function PersonalDetails({ user }) {
  return (
    <div className="container mx-auto p-4">
      {/* Basic Details Section */}
      <div className="Basic_Details mb-8">
        <h2 className="text-2xl font-bold mb-4">Basic Informations</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">User Name</h3>
            <blockquote className="text-light">{user?.username}</blockquote>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Email</h3>
            <blockquote className="text-light">{user?.email}</blockquote>
          </div>
        </div>
      </div>

      {/* Address Details Section */}
      <div className="Address_Details mb-8">
        <h2 className="text-2xl font-bold mb-4">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col col-span-2">
            <h3 className="font-bold"> Address</h3>
            <blockquote className="text-light">{user?.address}</blockquote>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="Contact_Details">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">Mobile</h3>
            <blockquote className="text-light">{user?.contact}</blockquote>
          </div>
        </div>
      </div>
      {/* Contact Details Section */}
      <div className="Contact_Details mt-20">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold">Bio</h3>
            <blockquote className="text-light">{user?.profile?.bio || "N/A"}</blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
