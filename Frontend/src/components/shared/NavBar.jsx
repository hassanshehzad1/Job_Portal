
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { setUser } from "@/redux/slices/authSlice";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Logout handler
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.response.data.message);
    }
  };
  // Update the navbar profile
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <header className="w-[100%] bg-[#014072]">
        <div className="flex justify-between items-center max-w-5xl mx-auto  h-14 text-white">
          {/* Left */}
          <div>
            <h1 className="text-white text-3xl font-medium">
              Transparent{" "}
              <span
                className="text-[rgb(0,164,224)] !important;
"
              >
                BPO
              </span>
            </h1>
          </div>
          {/* RIght */}

          {/* Show if user is not login */}
          {!user ? (
            <div className="flex gap-4">
              {/* Links the buttons */}
              <Link to="/login">
                <Button
                  variant="secondary"
                  className="bg-[rgb(0,164,224)] border-black text-white hover:bg-[rgb(0,194,280)] rounded-sm"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="bg-[#ffde7f] hover:bg-[#d8bc65]  text-black text-bolder"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <ul className="flex items-center text-xl gap-5 font-medium">
                {user && user?.role == "recruiter" ? (
                  <>
                    <Link to="/admin/companies" className="cursor-pointer">
                      Companies
                    </Link>
                    <Link to="/admin/jobs" className="cursor-pointer">
                      Admin Jobs
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/" className="cursor-pointer">
                      Home
                    </Link>
                    <Link to="/careers" className="cursor-pointer">
                      Careers
                    </Link>
                    <Link className="cursor-pointer">Browse</Link>
                  </>
                )}
              </ul>
              {/* PopOver */}
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
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
                   </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-64 bg-white ">
                  <div className="flex w-50 items-center">
                    <Avatar>
                      <AvatarImage src={user?.profile?.profilePic} />
                    </Avatar>

                    <div className="flex flex-col gap-0 ">
                      <h2 className="ml-5 ">
                        <strong
                          id=" username"
                          className="text-bold text-xl font-sans"
                        >
                          {" "}
                          {user?.username}
                        </strong>
                      </h2>
                      <blockquote className=" ml-5 text-sm italic font-thin ">
                        {user?.profile.bio}
                      </blockquote>
                    </div>
                  </div>
                  <div className="button flex items-center justify-start gap-0">
                    {user && user?.role === "student" && (
                      <>
                        <User />
                        <Link to="/profile">
                          {" "}
                          <Button variant="link" className="px-2">
                            View Profile
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="button flex items-center justify-start gap-0">
                    <LogOut />
                    <Button
                      variant="link"
                      className="px-2"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
export default NavBar;
