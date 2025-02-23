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
import { Button } from "../ui/button";
import { Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
function CompaniesResult() {
    
  const navigate = useNavigate();
  const { companies, searchCompanyText } = useSelector(
    (store) => store.company
  );
  const [filters, setFilterCompany] = useState(companies);
  useEffect(() => {
    const filters =
      companies.length > 0 &&
      companies.filter((company) => {
        if (!searchCompanyText) {
          return true;
        }

        return company?.name
          ?.toLowerCase()
          .includes(searchCompanyText.toLowerCase());
      });

    setFilterCompany(filters);
  }, [companies, searchCompanyText]);
  return (
    <>
      {/* Table */}
      {filters?.length === 0 ? (
        <p>You have not registered any company yet..</p>
      ) : (
        <Table>
          <TableCaption>Companies Details .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filters?.map((company) => {
              return (
                <TableRow key={company?._id}>
                  <TableCell className="font-medium">{company?.name}</TableCell>
                  <TableCell>{company?.createdAt?.split("T")[0]}</TableCell>
                  <TableCell>{company?.location}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      type=""
                      variant="outline"
                      className="bg-[rgb(0,164,224)] text-white hover:bg-[rgb(0,194,224)] "
                      onClick={() => navigate(`/admin/company/${company?._id}`)}
                    >
                      <Edit2 />
                    </Button>
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

export default CompaniesResult;
