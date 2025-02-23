import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLIC_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const status = ["Accepted", "rejected", "pending"];
function ApplicantsTables() {
  const { applications } = useSelector((store) => store.applications);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLIC_API_END_POINT}/status/update/${id}`,
        { status }
      );
      if (res?.data?.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.error(error?.data?.message);
      toast.error(error?.data?.message);
      console.error(error?.message)
    }
  };
  return (
    <div className="overflow-x-auto w-full">
      <Table className="min-w-full border border-gray-200">
        <TableCaption className="text-lg font-semibold p-3">
          Applicants List
        </TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[150px] p-3">Full Name</TableHead>
            <TableHead className="w-[200px]">Email</TableHead>
            <TableHead className="w-[120px]">Resume</TableHead>
            <TableHead className="w-[150px]">Contact</TableHead>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead className="text-right w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications?.applications?.map((applicant) => (
            <TableRow key={applicant?.applicant?._id} className="border-b">
              <TableCell className="p-3">
                {applicant?.applicant?.username}
              </TableCell>
              <TableCell>{applicant?.applicant?.email}</TableCell>
              <TableCell>
                {applicant?.applicant?.profile?.resume ? (
                  <a
                    href={applicant?.applicant?.profile?.resume}
                    className="text-blue-500 cursor-pointer underline"
                    target="_blank"
                  >
                    View Resume
                  </a>
                ) : (
                  <span>Empty</span>
                )}
              </TableCell>
              <TableCell>{applicant?.applicant?.contact}</TableCell>
              <TableCell>
                {applicant?.applicant?.createdAt?.split("T")[0]}
              </TableCell>
              <TableCell className="text-right">
                {/* PopOver */}
                <Popover>
                  <PopoverTrigger asChild>
                    <MoreHorizontal className="cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent className="w-64 bg-white text-black flex flex-col gap-2 p-3 rounded-lg shadow-lg border border-gray-200">
                    {status?.map((value, index) => {
                      return (
                        <div
                          key={index}
                          onClick={()=>statusHandler(value, applicant._id)}
                          className="cursor-pointer flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
                        >
                          {value}
                        </div>
                      );
                    })}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplicantsTables;
