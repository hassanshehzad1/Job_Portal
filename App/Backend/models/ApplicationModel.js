// Application Model
import mongoose from "mongoose";

const applicationSchema = mongoose.Schema(
  {
    // Foregin key || ref job
    job: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Job",
    },

    // Foreign key || ref User
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const ApplicationModel = new mongoose.model("Application", applicationSchema);

export default ApplicationModel;
