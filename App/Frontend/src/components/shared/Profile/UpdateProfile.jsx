import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@radix-ui/react-label";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Button } from "@/components/ui/button";
import { setLoading } from "@/redux/slices/authSlice";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
function UpdateProfile({ open, setOpen }) {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  // Usestate
  const [values, updateValue] = useState({
    username: user?.username,
    email: user?.email,
    contact: user?.contact,
    bio: user?.profile?.bio,
    address: user?.address,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile.resume,
  });

  const onChangeEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    updateValue({
      ...values,
      [name]: value,
    });
  };

  //   Change file handler
  const changeFileEvent = (e) => {
    updateValue({
      ...values,
      file: e.target.files?.[0],
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("contact", values.contact);
    formData.append("bio", values.bio);
    formData.append("skills", values.skills);
    formData.append("address", values.address);

    if (values.file) {
      formData.append("file", values.file);
    }
    // Using axios
    try {
      dispatch(setLoading(true));
      const res = await axios.put(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          Headers: {
            Content_Type: "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        navigator("/");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <Dialog open={open} className="bg-white">
      <DialogContent
        className="bg-white"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogDescription>
            <div className="form">
              <form
                action=""
                className="flex flex-col w-[100%] gap-3 rounded-sm  border-gray-300 justify-between h-[100%]"
                onSubmit={submitForm}
              >
                <div className="flex flex-col">
                  <span className="flex gap-4">
                    <h2 className="text-2xl font-bold">Update Profile</h2>
                  </span>
                  <p>Update Profile</p>
                </div>
                {/* Username */}
                <div className="inputBox">
                  <Input
                    type="name"
                    placeholder="Username"
                    id="username"
                    name="username"
                    value={values.username}
                    onChange={onChangeEvent}
                    className="w-[100%] border-2 border-solid border-gray bg-white "
                  />
                </div>
                <div className="inputBox">
                  <Input
                    type="text"
                    placeholder="Bio"
                    id="bio"
                    name="bio"
                    value={values.bio}
                    onChange={onChangeEvent}
                    className="w-[100%] border-2 border-solid border-gray bg-white "
                  />
                </div>
                {/* Email */}
                <div className="inputBox">
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={onChangeEvent}
                    className="w-[100%] border-2 border-solid border-gray "
                  />
                </div>

                <div className="inputBox">
                  <Input
                    type="tel"
                    placeholder="123-456-7890"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{5}"
                    id="contact"
                    name="contact"
                    value={values.contact}
                    onChange={onChangeEvent}
                    className="w-[100%] border-2 border-solid border-gray "
                  />
                </div>
                <div className="inputBox">
                  <Input
                    placeholder="Address"
                    id="address"
                    name="address"
                    type="text"
                    value={values.address}
                    onChange={onChangeEvent}
                    className="w-[100%] border-2 border-solid border-gray "
                  />
                </div>
                <div className="inputBox">
                  <Input
                    type="text"
                    placeholder="skills"
                    id="skills"
                    name="skills"
                    value={values.skills}
                    onChange={onChangeEvent}
                    className="w-[100%] border-2 border-solid border-gray "
                  />
                </div>
                <div className="inputBox">
                  <Input
                    placeholder="Resume"
                    id="file"
                    name="file"
                    type="file"
                    accept="application/json"
                    onChange={changeFileEvent}
                    className="w-[100%] border-2 border-solid border-gray "
                  />
                </div>

                {/* Buttons */}
                {/* Buttons */}

                <Button
                  type="Submit"
                  className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
                >
                  {loading ? (
                    <span className="flex gap-2">
                      <Loader2 /> <p>Please wait</p>
                    </span>
                  ) : (
                    <p>Update profile</p>
                  )}
                </Button>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateProfile;
