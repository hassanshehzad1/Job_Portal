import  { useState } from "react";
import NavBar from "../shared/NavBar";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/slices/companySlice";

function CreateCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");

  // Register company
  const registerCompany = async () => {
    if (!companyName) {
      toast.error("Company name is required");
      return;
    }
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res?.data?.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/company/${companyId}`);
      }
    } catch (error) {
      console.error("API Error:", error.response?.data);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };
  return (
    <>
      <NavBar />
      <section className="bg-white  gap-10 flex flex-col justify-evenly fle mt-10 max-w-5xl mx-auto px-6 sm:px-10 py-4 text-black">
        {/* Top Section */}
        <div className="top mt-1 text-center sm:text-left">
          <h1 className="text-blue text-3xl font-bold">Your Company Name</h1>
          <blockquote className="text-gray-600 text-sm sm:text-base">
            What would you like to give your company name?
          </blockquote>
        </div>

        {/* Center Section */}
        <div className="center ">
          <h1 className="text-blue text-xl font-bold">Company Name</h1>

          {/* Input Box with Search Icon */}
          <div className="relative w-full mt-1">
            <Input
              type="text"
              placeholder="Google, Microsoft Flipkart etc"
              className="border-2 w-full border-solid border-gray-200 pl-10 py-2 text-sm sm:text-base"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>

        {/* Button Section */}
        <div className="down mt-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Button
              variant="Secondary"
              className="bg-[rgb(0,164,224)] border-black text-white hover:bg-[rgb(0,194,280)] rounded-sm w-full sm:w-auto"
              onClick={() => navigate("/admin/company")}
            >
              Cancel
            </Button>

            <Button
              variant="outline"
              className="bg-[#ffde7f] hover:bg-[#d8bc65] text-black font-bold w-full sm:w-auto"
              onClick={registerCompany}
            >
              Continue
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateCompany;
