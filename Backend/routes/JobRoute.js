import express from "express";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  jobPost,
} from "../controllers/JobController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, jobPost);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/get/admin/jobs").get(isAuthenticated, getAdminJobs);

export default router;
