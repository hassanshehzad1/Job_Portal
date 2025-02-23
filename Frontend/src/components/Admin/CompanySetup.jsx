import { useEffect, useState } from "react";
import NavBar from "../shared/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useSingleCompanyByID from "@/hooks/useSingleCompanyByID";

function CompanySetup() {
  const params = useParams();
  useSingleCompanyByID(params.id);

  const navigate = useNavigate();
  const { singleCompany } = useSelector((store) => store.company);
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const submitHandle = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("name", inputs.name);
    form.append("description", inputs.description);
    form.append("website", inputs.website);
    form.append("location", inputs.location);

    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  //UseEffect
  useEffect(() => {
    setInputs({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
    });
  }, [singleCompany]);
  return (
    <>
      <NavBar />

      <section className="CompanySetup">
        <div className=" bg-white mt-10 max-w-5xl mx-auto px-10 py-4  text-black items-center">
          <div className="flex justify-evenly">
            <div className="">
              <Button
                type="Submit"
                className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
                onClick={() => navigate("/admin/companies/create")}
              >
                Go Back
              </Button>
            </div>
            <div className="">
              <h2 className="text-black text-2xl font-bold">Company Setup</h2>
            </div>
          </div>

          <form onSubmit={submitHandle}>
            <div className="flex flex-wrap mt-5 justify-evenly">
              <div className="inputBox flex items-center">
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="border-2 border-solid border-gray-100"
                  value={inputs.name}
                  onChange={handleInputs}
                />
              </div>
              <div className="inputBox flex items-center">
                <Input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="border-2 border-solid border-gray-100 "
                  value={inputs.description}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-5 justify-evenly">
              <div className="inputBox flex items-center">
                <Input
                  name="website"
                  type="text"
                  placeholder="Website"
                  className="border-2 border-solid border-gray-100 "
                  value={inputs.website}
                  onChange={handleInputs}
                />
              </div>
              <div className="inputBox flex items-center">
                <Input
                  name="location"
                  type="text"
                  placeholder="Location"
                  className="border-2 border-solid border-gray-100 "
                  value={inputs.location}
                  onChange={handleInputs}
                />
              </div>
            </div>

            {/* Submit Details  */}
            <div className="flex justify-evenly mt-5">
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
                  className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
                >
                  Submit Details
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CompanySetup;
