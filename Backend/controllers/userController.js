// Packages
import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/claudinary.js";

//! Registration
export const registration = async (req, res) => {
  try {
    const { username, email, contact, password, role, address } = req.body;

    const file = req.file;

    if (!username || !email || !contact || !password || !role || !address) {
      return res.status(400).json({
        success: false,
        Request: "Request failed",
        message: "Please input all the fields ",
      });
    }

    // Check if user with this alread exist
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(404).json({
        success: false,
        Request: "Request failed",
        message: "User with this email already registered",
      });
    }
    // Handling file
    let cloudinaryResponse = "";
    if (file) {
      const fileUri = getDataUri(file);
      cloudinaryResponse = await cloudinary.uploader.upload(fileUri.content);
    }

    // Hashing password
    const hashPass = await bcrypt.hash(password, 12);

    // Creating user
    const user = await UserModel.create({
      username,
      email,
      password: hashPass,
      contact: contact,
      role,
      address,
      profile: {
        profilePic: cloudinaryResponse.secure_url,
      },
    });

    return res.status(201).json({
      success: true,
      Request: "Request Suceesfull",
      message: "User Registered successfully",
      user: user,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Server Error",
    });
  }
};

//! Login
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Fields required
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "All fields are required",
      });
    }

    // Not exist
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "Email and password doesn't exist",
      });
    }

    // If exist matching password
    const matchPass = await bcrypt.compare(password, userExist.password);
    if (!matchPass) {
      return res.status(404).json({
        success: false,
        Request: "Request Failed",
        message: "Email and password doesn't match",
      });
    }

    // Checking
    if (role != userExist.role) {
      return res.status(400).json({
        success: false,
        Request: "Request Failed",
        message: "Account doesn't exists with this role",
      });
    }

    // Generate jwt token
    const setToken = {
      userId: userExist._id,
      userEmail: userExist.email,
    };

    const token = jwt.sign(setToken, process.env.SECRET_KEY.trim(), {
      expiresIn: "10d",
    });

    // Login success
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 10 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({
        success: true,
        Response: "Request successfull",
        message: `Login successfully \nWelcome back ${userExist.username} `,
        user: userExist,
      });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Server Error",
    });
  }
};

//! Logout

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      Request: "Request successfull",
      message: "Logout successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Server Error",
    });
  }
};

//! Updated Profile
export const updateProfile = async (req, res) => {
  try {
    const { username, email, contact, bio, skills, address } = req.body;
    const file = req.file;
    let cloudRespons = "";
    if (file) {
      const fileUri = getDataUri(file);
      cloudRespons = await cloudinary.uploader.upload(fileUri.content);
    }
    // Skilled array
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(" ");
    }
    const userId = req.id; //Middle Ware

    let user = await UserModel.findById(userId);

    // Updating data
    if (username) {
      user.username = username;
    }
    if (email) {
      user.email = email;
    }
    if (contact) {
      user.contact = contact;
    }
    if (address) {
      user.address = address;
    }
    if (bio) {
      user.profile.bio = bio;
    }
    if (skills) {
      user.profile.skills = skillsArray;
    }

    if (file && cloudRespons) {
      user.profile.resume = cloudRespons.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }
    await user.save();

    return res.status(200).json({
      success: true,
      Request: "Request success",
      message: "Profile Updated Successfully",
      user,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      Request: "Request Failed",
      message: "Server Error",
    });
  }
};
