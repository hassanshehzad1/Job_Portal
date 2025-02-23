import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";


function AppliedJobs() {
  const { appliedJobs } = useSelector((store) => store.applications);

  return (
    <div className="overflow-x-auto w-full">
      <Table className="min-w-full border border-gray-200">
        <TableCaption className="text-lg font-semibold p-3">
          Applied Jobs List
        </TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[200px] p-3">Job Title</TableHead>
            <TableHead className="w-[150px]">Salary</TableHead>
            <TableHead className="w-[200px]">Location</TableHead>
            <TableHead className="w-[150px]">Job Type</TableHead>
            <TableHead className="w-[200px]">Company</TableHead>
            <TableHead className="w-[150px]">Applied Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs && appliedJobs.length > 0 ? (
            appliedJobs.map((job) => (
              <TableRow key={job?.job?._id} className="border-b">
                <TableCell className="p-3 font-semibold">{job?.job?.title}</TableCell>
                <TableCell>{job?.job?.salary || "N/A"}</TableCell>
                <TableCell>{job?.job?.location || "N/A"}</TableCell>
                <TableCell>{job?.status || "N/A"}</TableCell>
                <TableCell>{job?.job?.company?.name || "N/A"}</TableCell>
                <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6" className="text-center text-red-500 py-4">
                You have not applied for any job yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobs;
