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
import { Apple, Facebook, Loader2, Plane } from "lucide-react";
import axios from "axios";

// Importing files
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/slices/authSlice";
import store from "@/redux/store/store";

function Login() {
  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { loading } = useSelector((store) => store.auth);
  // Usestate
  const [values, updateValue] = useState({
    email: "",
    password: "",

    role: "",
  });

  // OnChange
  const onChangeEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    updateValue({
      ...values,
      [name]: value,
    });
  };

  //   Submit form
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      // Dispatch loader
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, values, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.user));
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);

      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  
  return (
    <>
      <NavBar />

      {/* div*/}
      <div className="flex w-[80%] mx-auto justify-center items-start my-7">
        {/* Left */}
        <div className="img w-[32%] ">
          <img src={image} width="100%" />
        </div>

        {/* Right */}

        <div className="form w-[33%] ml-2 ">
          <form
            action=""
            className="flex flex-col w-[100%] gap-3 rounded-sm  border-gray-100-300 justify-between h-[100%]"
            onSubmit={submitForm}
          >
            <div className="flex flex-col">
              <span className="flex gap-4">
                <h2 className="text-2xl font-bold">Login to your account</h2>
                <div className="w-10 flex justify-center items-center">
                  <img src={logo} width="100%" />
                </div>
              </span>
              <p>Explore open career opportunities</p>
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
                className="border-2 border-solid border-gray-100 "
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
                className="border-2 border-solid border-gray-100 "
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
                  />
                </div>
              </RadioGroup>
            </div>

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
                Login
              </Button>
            )}
          </form>

          {/* Buttons */}
          <div className="flex flex-col mt-2">
            <Button
              type="Submit"
              className="border-2 border-solid border-gray-100  text-black hover:bg-white m-1"
            >
              <Apple className="text-black" /> continue with Apple
            </Button>
            <Button
              type="Submit"
              className=" border-2 border-solid border-gray-100  text-black hover:bg-white m-1"
            >
              <Facebook className="text-blue" /> continue with Facebook
            </Button>
            <Button
              type="Submit"
              className=" border-2 border-solid border-gray-100  text-black hover:bg-white m-1"
            >
              <Plane className="text-yellow" /> continue with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
