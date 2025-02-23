import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/applicationController.js";

const router = express.Router();
router.route("/applyjob/:id").get(isAuthenticated, applyJob);
router.route("/get/appliedjobs").get(isAuthenticated, getAppliedJobs);
router.route("/get/applicants/:id").get(isAuthenticated, getApplicants);
router.route("/status/update/:id").post(isAuthenticated, updateStatus);
export default router;
