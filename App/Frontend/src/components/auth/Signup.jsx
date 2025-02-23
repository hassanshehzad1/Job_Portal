import React, { useState } from "react";
import NavBar from "../shared/NavBar";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

// Image
import image from "../../../public/Images/Login.png";
import logo from "../../../public/Images/Logo.png";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Importing files
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setLoading } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { loading } = useSelector((state) => state.auth);
  // Usestate
  const [values, updateValue] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    role: "",
    file: "",
    address: "",
  });

  // OnChange
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

  const clear = () => {
    values.email = "";
    values.password = "";
    values.username = "";
    values.role = "";
    values.contact = "";
    values.file = "";
    values.address = "";
  };
  //   Submit form
  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("contact", values.contact);
    formData.append("role", values.role);
    formData.append("address", values.address);

    if (values.file) {
      formData.append("file", values.file);
    }
    // Using axios
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        Headers: {
          Content_Type: "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        console.log(res);
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }

    // Clear
    clear();
  };

  return (
    <>
      <NavBar />

      {/* div*/}
      <div className="flex w-[80%] mx-auto justify-center items-start my-7">
        {/* Left */}
        <div className="img w-80 ">
          <img src={image} width="100%" />
        </div>

        {/* Right */}

        <div className="form w-[40%] ml-2 ">
          <form
            action=""
            className="flex flex-col w-[100%] gap-3 rounded-sm  border-gray-300 justify-between h-[100%]"
            onSubmit={submitForm}
          >
            <div className="flex flex-col">
              <span className="flex gap-4">
                <h2 className="text-2xl font-bold">Register with us</h2>
                <div className="w-10 flex justify-center items-center">
                  <img src={logo} width="100%" />
                </div>
              </span>
              <p>Explore open career opportunities</p>
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
                className="w-[100%] border-2 border-solid border-gray "
                required
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
                required
                className="w-[100%] border-2 border-solid border-gray "
              />
            </div>

            <div className="inputBox">
              <Input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={values.password}
                onChange={onChangeEvent}
                required
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
                required
                className="w-[100%] border-2 border-solid border-gray "
              />
            </div>
            <div className="inputBox">
              <Input
                placeholder="Address"
                id="address"
                name="address"
                rows="10"
                cols="5"
                value={values.address}
                onChange={onChangeEvent}
                required
                className="w-[100%] border-2 border-solid border-gray "
              />
            </div>

            <div className="">
              <RadioGroup className="flex" defaultValue="student">
                <h2 className="text-xl font-bold mr-5">Role</h2>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="r1">Student</Label>
                  <input
                    className="w-3 h-3 mt-1"
                    type="radio"
                    value="student"
                    name="role"
                    id="r1"
                    onChange={onChangeEvent}
                    checked={values.role === "student"}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="r2">Recruiter</Label>
                  <input
                    type="radio"
                    value="recruiter"
                    name="role"
                    onChange={onChangeEvent}
                    id="r2"
                    checked={values.role === "recruiter"}
                    className="w-3 h-3 mt-1"
                    required
                  />
                </div>
              </RadioGroup>
            </div>
            {/* Profile */}

            <div className="profile flex gap-2 items-center">
              <Label className="text-xl font-bold ">Profile</Label>
              <Input
                onChange={changeFileEvent}
                accept="image/*"
                type="file"
                name="file"
                className="cursor-pointer w-[60%]"
              />
            </div>

            {/* Buttons */}
            {/* Buttons */}
            {loading ? (
              <Button
                type="Submit"
                className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
              >
                <Loader2 />
                Please wait
              </Button>
            ) : (
              <Button
                type="Submit"
                className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
              >
                Register
              </Button>
            )}

            {/* Already accountet */}
            <p>
              <Link to="/login">
                Already have an account?
                <Link className="text-[rgb(0,164,224)]">Login</Link>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
