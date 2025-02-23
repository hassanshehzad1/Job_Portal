
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setSearchByJob } from "@/redux/slices/jobsSlice";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ArrowBigDown } from "lucide-react";
import { useEffect, useState } from "react";

const filters = [
  {
    id: "jobType",
    title: "Job Type",
    options: ["All", "Full-Time", "Part-Time", "Contractual", "Internship", "Basics", "Intermediate", "Advanced"],
  },
  {
    id: "jobLocation",
    title: "Job Location",
    options: ["America", "Canada", "Australia"],
  },
 
  {
    id: "expLevel",
    title: "Job Experience",
    options: ["1+", "2-3+", "4-5+", "6+"],
  },
];

function SideBar() {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState(""); // String value

  const [openSections, setOpenSections] = useState({
    jobType: true,
    jobLocation: false,
    jobSetup: false,
    expLevel: false,
    salaryRange: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleRadioChange = (label) => {
    setSelectedFilter(label);

 
  };


  useEffect(()=>{
    dispatch(setSearchByJob(selectedFilter))
  }, [selectedFilter])
  return (
    <div className="w-72 p-4 bg-white shadow-lg rounded-md my-4">
      {/* Header */}
      <div className="head_top flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filters</h2>
        <Button
          className="text-xl bg-white text-blue-500 shadow-md"
          onClick={() => {
            setSelectedFilter("");
            dispatch(setSearchByJob("")); // Reset in Redux
          }}
        >
          Reset
        </Button>
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu>
        {filters.map((filter) => (
          <Collapsible key={filter.id} open={openSections[filter.id]} className="group/collapsible mb-4">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <div
                  onClick={() => toggleSection(filter.id)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="font-semibold">{filter.title}</h3>
                  <ArrowBigDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      openSections[filter.id] ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="mt-2">
                  {filter.options.map((option, index) => (
                    <SidebarMenuSubItem key={index} className="mb-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="filter"
                          value={option}
                          checked={selectedFilter === option}
                          onChange={() => handleRadioChange(option)}
                          className="h-4 w-4"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </div>
  );
}

export default SideBar;
