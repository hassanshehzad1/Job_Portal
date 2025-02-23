import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";

function ProfilePhoto({user}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {console.log(user)}
      <h2 className="text-xl font-bold my-2">Home/Profile</h2>

      <div className="profile_photo bg-white shadow-sm border-black w-full max-w-sm rounded-[26px] p-5 flex flex-col justify-evenly gap-3 items-center mx-auto sm:mx-0">
        <div className="img_prof flex items-center justify-center w-20 flex-col">
          <img
            src={
              user?.profile?.profilePic
                ? user?.profile?.profilePic
                : "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            }
            className="rounded-full w-20 h-20 object-cover"
          />

          <span className="prof_email mt-2">
            <blockquote className="text-sm text-center">
              {user?.email}{" "}
            </blockquote>
          </span>
        </div>

        <div className="edit_prof w-full">
          <Button
            onClick={() => setOpen(true)}
            variant="secondary"
            className="bg-gray-300 cursor-pointer border-black text-[rgb(0,164,224)] hover:bg-[rgb(0,194,280)] rounded-md w-full"
          >
            <Edit className="mr-2" />
            Edit profile
          </Button>
        </div>
      </div>

      {/* Update profile */}
      <UpdateProfile open={open} setOpen={setOpen} />
    </>
  );
}

export default ProfilePhoto;
