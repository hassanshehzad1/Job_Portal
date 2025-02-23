import express from "express";
import {
  getCompany,
  getCompanyId,
  registerCompany,
  updateCompany,
} from "../controllers/CompanyController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get/company").get(isAuthenticated, getCompany);
router.route("/get/company/:id").get(isAuthenticated, getCompanyId);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;
