import { Button } from "@/components/ui/button";
import { Download, Edit } from "lucide-react";
import { useSelector } from "react-redux"; // Import Redux selector

function WorkRecently({ user }) {
  const { appliedJobs } = useSelector((store) => store.applications); // Fetch applied jobs

  return (
    <>
      <div className="work_recently mb-2 flex flex-col gap-4 items-center sm:items-start">
        <div className="rounded-xl shadow-md bg-white border-black flex flex-col gap-2 p-5 w-full max-w-md">
          <div className="work_exp">
            <div className="head flex justify-between items-center">
              <h2 className="text-xl text-[rgb(0,164,224)] font-bold">
                Work Experience
              </h2>
              <Edit />
            </div>

            {/* Static Work Experience (Can be dynamic if needed) */}
            {["Senior Web Developer", "UI/UX Designer", "Backend Developer"].map(
              (job, index) => (
                <div className="sen flex items-center justify-between mt-2" key={index}>
                  <span className="Left flex flex-col">
                    <h3 className="font-bold text-[0.85rem]">{job}</h3>
                    <blockquote className="text-[0.65rem]">
                      Company ABC - Full Time
                    </blockquote>
                  </span>
                  <p className="time text-xs">2h Ago</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="Applied_Jobs mb-2 flex flex-col gap-4 items-center sm:items-start">
        <div className="rounded-xl shadow-md bg-white border-black flex flex-col gap-2 p-5 w-full max-w-md">
          <div className="work_exp">
            <div className="head flex justify-between items-center">
              <h2 className="text-xl text-[rgb(0,164,224)] font-bold">
                Applied Jobs
              </h2>
              <Edit />
            </div>

            {/* Applied Jobs from Redux */}
            {appliedJobs && appliedJobs.length > 0 ? (
              appliedJobs.map((job, index) => (
                <div className="sen flex items-center justify-between mt-2" key={index}>
                  <span className="Left flex flex-col">
                    <h3 className="font-bold text-[0.85rem]">{job?.job?.title}</h3>
                    <blockquote className="text-[0.65rem]">
                      {job?.company?.name || "Unknown Company"} - {job?.job?.jobType || "N/A"}
                    </blockquote>
                  </span>
                  <p className="time text-xs cursor-pointer">View</p>
                </div>
              ))
            ) : (
              <p className="text-red-500 text-sm">You have not applied for any jobs yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Resume Upload/Download Button */}
      <div className="Button w-full max-w-md">
        <Button
          variant="outline"
          className="px-4 py-2 bg-[#ffde7f] text-sm rounded-lg flex items-center justify-center gap-2 w-full"
        >
          {user?.profile?.resume ? (
            <a href={user?.profile?.resume} target="_blank" rel="noopener noreferrer">
              {user?.profile?.resumeOriginalName || "Download Resume"}
            </a>
          ) : (
            <span>Upload Resume</span>
          )}
          <Download />
        </Button>
      </div>
    </>
  );
}

export default WorkRecently;
