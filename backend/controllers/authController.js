const User = require("../models/user-model");
const generateToken = require("../utils/generateToken");
const jwt = require("jsonwebtoken");
const blacklist= require("../models/blacklist");
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ name, email, password });
        generateToken(res, user._id);

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        generateToken(res, user._id);
        // console.log("loginUser", user._id);
        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

const logoutUser = async (req, res) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(400).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Store the token in the blacklist with its expiry time
        await blacklist.create({ token, expiresAt: new Date(decoded.exp * 1000) });
        
        // Clear the cookie
        res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });

        res.json({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


module.exports = { registerUser, loginUser, logoutUser };
