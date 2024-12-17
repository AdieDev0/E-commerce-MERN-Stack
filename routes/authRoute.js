import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";

const router = express.Router();

// Register Route
router.post("/register", registerController);

// Login Route
router.post("/login", loginController);

// TEST ROUTES
router.get("test", testController);

export default router;
