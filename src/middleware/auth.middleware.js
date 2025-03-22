import "dotenv/config";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protectRoute = async (req, res, next) => {
  try {
    // get token from header
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "No authentication token, access denied" });
    }

    //   verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //   find user
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Token is not valid" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("error in protect route middleware", error.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default protectRoute;
