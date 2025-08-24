const express = require("express");
const { loginUser } = require("../controllers");
const createRateLimiter = require("../common/rateLimiter");

const router = express.Router();

router.post("/login", createRateLimiter(), loginUser);

module.exports = router;
