import { setSingleCompany } from "@/redux/slices/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import  { useEffect } from "react";
import { useDispatch } from "react-redux";

function useSingleCompanyByID(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompanyID = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get/${id}`, {
          withCredentials: true,
        });

        if (res?.data?.success) {
          dispatch(setSingleCompany(res?.data?.company));
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchSingleCompanyID();
  }, [id, dispatch]);
}

export default useSingleCompanyByID;
