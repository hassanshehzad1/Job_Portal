import JobModel from "../models/JobModel.js";

// For Admin
export const jobPost = async (req, res) => {
  try {
    const {
      title,
      description,
      experienceLevel,
      requirements,
      salary,
      location,
      jobType,
      company,
      position,
    } = req.body;

    if (
      !title |
      !location |
      !jobType |
      !description |
      !salary |
      !experienceLevel |
      !requirements |
      !company |
      !position
    ) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "All fields are required",
      });
    }

    const createdBy = req.id;

    // Check it is already registered
    const job = await JobModel.create({
      title,
      description,
      experienceLevel,
      requirements: requirements.split(","),
      salary,
      location,
      jobType,
      company,
      createdBy,
      position,
    });

    return res.status(201).json({
      success: true,
      Request: "Request success",
      message: "JOb created successfully",
      job,
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

// ! Get all jobs
// For students
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    // Query to search incase-senstive in dbs
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { descripition: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await JobModel.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        success: false,
        Request: "Request Failed",
        Message: "This type of jobs doesn't exists",
      });
    }

    return res.status(200).json({
      success: true,
      Reques: "Request success",
      Message: "Jobs found",
      jobs,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      Reques: "Request Failed",
      Message: "Internal Server Error",
    });
  }
};

// !Search by id
// For students
export const getJobById = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await JobModel.findById(id).populate({
      path: "applications",
      populate: { path: "applicant" },
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        Request: "Request Failed",
        message: "Sorry: No job found!",
      });
    }

    res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Job found",
      job,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Internal Server Error",
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const id = req.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User ID is missing in request",
      });
    }

    const jobs = await JobModel.find({ createdBy: id }).populate({
      path: "company",
      createdAt: -1,
    });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No jobs found for this user",
      });
    }

    res.status(200).json({
      success: true,
      message: "Jobs Found",
      jobs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
