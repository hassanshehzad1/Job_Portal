import { setCompanies } from "@/redux/slices/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAllCompanies() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get/company`, {
          withCredentials: true,
        });
        if (res?.data?.success) {
          dispatch(setCompanies(res?.data?.companies));
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getAllCompanies();
  }, []);
}

export default useGetAllCompanies;
