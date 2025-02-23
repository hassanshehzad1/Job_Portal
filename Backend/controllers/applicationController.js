import ApplicationModel from "../models/ApplicationModel.js";
import JobModel from "../models/JobModel.js";

// ! Apply job
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "please click the job",
      });
    }

    const existingJob = await ApplicationModel.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingJob) {
      return res.status(400).json({
        Sucess: false,
        Request: "Request Failed",
        message: "You have already apply for this job",
      });
    }

    const job = await JobModel.findById(jobId);
    if (!job) {
      return res.status(400).json({
        Sucess: false,
        Request: "Request Failed",
        message: "Sorry:job does not exist",
      });
    }

    const newApp = await ApplicationModel.create({
      job: jobId,
      applicant: userId,
    });

    // Update jobs applications
    job.applications.push(newApp._id);
    await job.save();
    return res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Apply successfully",
      newApp,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      Sucess: false,
      Request: "Request Failed",
      message: "Internal Server Error",
    });
  }
};

// !Get Applied jobs
export const getAppliedJobs = async (req, res) => {
  try {
    console.log("re");
    const userId = req.id;
    const applications = await ApplicationModel.find({
      applicant: userId,
    })
      .sort({ createdBy: -1 })
      .populate({
        path: "job",
        options: { sort: { createdBy: -1 } },

        populate: {
          path: "company",
          options: { sort: { createdBy: -1 } },
        },
      });

    if (!applications) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "You have not apply for any job yet",
      });
    }

    return res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Your applied jobs",
      applications,
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

// ! Get Appplicants
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;

    const applications = await JobModel.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdBy: -1 } },
      populate: {
        path: "applicant",
        options: { sort: { createdBy: -1 } },
      },
    });

    if (!applications) {
      return res.status(404).json({
        success: false,
        Request: "Request Failed",
        message: "Sorry no jobs found",
      });
    }
    return res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Applications " + applications.applications.length,
      applications,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Internal Server Error ",
    });
  }
};

// !Update Status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "Status is required",
      });
    }

    const applicationId = await req.params.id;

    const applications = await ApplicationModel.findOne({ _id: applicationId });
    if (!applications) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "Not Found",
      });
    }

    applications.status = status.toLowerCase();
    await applications.save();
    return res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Status Updated successfully",
      applications,
    });
  } catch (error) {}
};
