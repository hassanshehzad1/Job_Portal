// Packages
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
        Success: false,
        Request: "Request Failed",
        message: "User no authenticte for this action",
      });
    }

    // Decode token
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(400).json({
        Success: false,
        Request: "Request Failed",
        messsage: "User not authorized for this action",
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    console.error("Error: " + error.message);
    return res.status(500).json({
      Success: false,
      Request: "Request Failed",
      messsage: "Internal Server Error",
    });
  }
};

export default isAuthenticated;
