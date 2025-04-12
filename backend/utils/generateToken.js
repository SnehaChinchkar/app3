const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    console.log("Token generated:", token);
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.COOKIE_SECURE === "true", // Use secure in production
        sameSite: "None", // Allows cross-origin requests
        maxAge: 1 * 60 * 60 * 1000, // 7 days
    });
};

module.exports = generateToken;
