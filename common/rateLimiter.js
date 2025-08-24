const rateLimit = require("express-rate-limit");
const { rate_limit } = require("../config/config.js");
function createRateLimiter() {
  return rateLimit({
    windowMs: rate_limit.time,
    max: rate_limit.request,
    message: "Too many requests from this IP, please try again later.",
  });
}

module.exports = createRateLimiter;
