import CompanyModel from "../models/CompanyModel.js";

//! Register Company
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "Company name is required",
      });
    }

    // Check Company is already registered
    const companyExist = await CompanyModel.findOne({ name: companyName });

    if (companyExist) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "Company name is already regsitered",
      });
    }

    // Creating compnay
    const company = await CompanyModel.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      success: true,
      Request: "Request success",
      message: "Company  register successfully",
      company,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({
      success: false,
      Request: "Request Failed",
      message: "Internal Server Error",
    });
  }
};

//! Get Company
export const getCompany = async (req, res) => {
  try {
    const userId = req.id;

    const companies = await CompanyModel.find();
    if (!companies) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "No companies found",
      });
    }

    return res.status(200).json({
      success: true,
      Request: "Request success",

      companies,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({
      success: false,
      Request: "Request Failed",
      message: "Internal Server Error",
    });
  }
};

// ! Get compnay by id
export const getCompanyId = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await CompanyModel.findById(companyId);
    if (!company) {
      return res.status(400).json({
        success: true,
        Request: "Request Failed",
        message: "Compony does not exist",
      });
    }

    return res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Company Found " + company.name,
      company,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Internal Server Error",
    });
  }
};

// !Update Company
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    const updateCompany = { name, description, website, location };

    const company = await CompanyModel.findByIdAndUpdate(
      req.params.id,
      updateCompany,
      { new: true }
    );

    if (!company) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "Company does not exists",
      });
    }
    return res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Company update successfully",
      company,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Internal Server Error",
    });
  }
};
