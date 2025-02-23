import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DonutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
function AdminJobs() {
  const navigate = useNavigate();
  const { allAdminJobs, searchJobText } = useSelector((store) => store.job);

  const [filters, setFilterJob] = useState(allAdminJobs);
  useEffect(() => {
    const filter =
      allAdminJobs?.length > 0 &&
      allAdminJobs?.filter((job) => {
        if (!searchJobText) {
          return true;
        }

        return job?.title?.toLowerCase().includes(searchJobText.toLowerCase());
      });

    setFilterJob(filter);
  }, [allAdminJobs, searchJobText]);
  return (
    <>
      {/* Table */}
      {filters?.length === 0 ? (
        <p>You have not upload any job yet.</p>
      ) : (
        <Table>
          <TableCaption>allAdminJobs Details .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Company Name</TableHead>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filters?.map((job) => {
              return (
                <TableRow key={job?._id}>
                  <TableCell className="font-medium">
                    {job?.company?.name}
                  </TableCell>
                  <TableCell className="font-medium">{job?.title}</TableCell>
                  <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
                  <TableCell>{job?.location}</TableCell>
                  <TableCell>{job?.jobType}</TableCell>
                  <TableCell className="text-right">
                    {/* PopOver */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <DonutIcon className="cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="w-64 bg-white text-black flex flex-col gap-2 p-3 rounded-lg shadow-lg border border-gray-200">
                        <span
                          onClick={() => navigate(`/admin/job/${job?._id}`)}
                          className="cursor-pointer flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
                        >
                          ✏️ Edit
                        </span>
                        <span
                          onClick={() =>
                            navigate(`/admin/jobs/${job?._id}/applicants`)
                          }
                          className="cursor-pointer flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
                        >
                          📄 Applicants
                        </span>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default AdminJobs;
