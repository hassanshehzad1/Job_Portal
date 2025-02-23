// Packages
import express from "express";

// Files
import {
  updateProfile,
  registration,
  login,
  logout,
} from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, registration);
router.route("/login").post(login);
router.route("/logout").get(isAuthenticated, logout);
router.route("/profile/update").put(isAuthenticated,singleUpload, updateProfile);

export default router;
