import userModel from "../models/userModels.js";
import { hashPassword, comparePassword } from "../helpers/authHelpers.js";
import JWT from "jsonwebtoken";

//  REGISTER CONTROLLER
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Input validation
    const errors = [];
    
    // Name validation
    if (!name || name.trim().length < 3) {
      errors.push("Name must be at least 3 characters long");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.push("Please provide a valid email address");
    }

    // Password validation
    if (!password || password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }
    
    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phone || !phoneRegex.test(phone)) {
      errors.push("Please provide a valid phone number");
    }

    // Address validation
    if (!address || address.trim().length < 10) {
      errors.push("Please provide a complete address (minimum 10 characters)");
    }

    // Return all validation errors at once
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors
      });
    }

    // Check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered. Please login instead."
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = await new userModel({
      name: name.trim(),
      email: email.toLowerCase(),
      password: hashedPassword,
      phone: phone.trim(),
      address: address.trim(),
    }).save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Registration successful! Please login.",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });

  } catch (error) {
    console.error("Registration error:", error);
    
    // Handle specific MongoDB errors
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This email is already registered. Please login instead."
      });
    }

    // Generic error response
    res.status(500).json({
      success: false,
      message: "An error occurred during registration. Please try again.",
      // Include error details in development only
      ...(process.env.NODE_ENV === 'development' && { error: error.message })
    });
  }
};

// LOGIN CONTROLLER
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    // Compare password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

// TEST CONTROLLER
export const testController = (req, res) => {
  res.send("protected Routes");
};
