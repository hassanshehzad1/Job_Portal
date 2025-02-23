import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
function CreateJob() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    experienceLevel: "",
    salary: "",
    jobType: "",
    position: "",
    company: "",
    location: "",
    requirements: "",
  });

  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);
  const handleInputs = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("salary", inputs.salary);
    formData.append("experienceLevel", inputs.experienceLevel);
    formData.append("description", inputs.description);
    formData.append("position", inputs.position);
    formData.append("jobType", inputs.jobType);
    formData.append("location", inputs.location);
    formData.append("company", inputs.company);
    formData.append("requirements", inputs.requirements);

    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}//post`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.error(error?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  // Select a company
  const selectCompany = (value) => {
    const findCompany = companies.find(
      (company) => company?.name?.toLowerCase() === value
    );
    setInputs({ ...inputs, company: findCompany?._id });
  };
  return (
    <>
      <NavBar />
      <section className="CompanySetup">
        <div className="bg-white mt-10 max-w-3xl mx-auto px-6 py-6 text-black">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <Button
              type="button"
              className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)]"
              onClick={() => Navigate("/admin/jobs")}
            >
              Go Back
            </Button>
            <h2 className="text-black text-2xl font-bold text-center">
              Job Setup
            </h2>
          </div>

          {companies.length === 0 ? (
            "Please Registered Company first. Then create a job."
          ) : (
            <>
              <form className="space-y-4" onSubmit={submitHandler}>
                <Input
                  type="text"
                  placeholder="Job Title"
                  name="title"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.title}
                  onChange={handleInputs}
                />

                <Input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.description}
                  onChange={handleInputs}
                />

                <Input
                  name="experienceLevel"
                  type="number"
                  placeholder="Experience Level"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.experienceLevel}
                  onChange={handleInputs}
                />

                <Input
                  name="salary"
                  type="number"
                  placeholder="Salary"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.salary}
                  onChange={handleInputs}
                />
                <Input
                  name="requirements"
                  type="text"
                  placeholder="requirements"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.requirements}
                  onChange={handleInputs}
                />

                <Input
                  name="location"
                  type="text"
                  placeholder="Location"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.location}
                  onChange={handleInputs}
                />

                <Input
                  name="jobType"
                  type="text"
                  placeholder="Job Type"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.jobType}
                  onChange={handleInputs}
                />

                <Input
                  name="position"
                  type="number"
                  placeholder="Position"
                  className="border-2 border-gray-300 w-full p-2"
                  value={inputs.position}
                  onChange={handleInputs}
                />

                {/* Select */}
                <Select onValueChange={selectCompany}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies?.map((company) => {
                        return (
                          <SelectItem
                            key={company._id}
                            className="bg-black text-white"
                            value={company?.name?.toLowerCase()}
                          >
                            {company?.name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {loading ? (
                  <Button
                    type="submit"
                    className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
                  >
                    <Loader2 />
                    Please Wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-[rgb(0,164,224)] mx-auto text-white hover:bg-[rgb(0,194,224)] "
                  >
                    Create Job
                  </Button>
                )}
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default CreateJob;
