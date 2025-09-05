// import upstash ratelimiter config
const { rateLimit } = require('../configs/upstash.js');

// rate limiter middleware 
/**
 *  check if the request is within the rate limit
 *  if it is, then allow the request
 *  else, return a 429 status code
 *  and a message that the user has exceeded the rate limit
 */

module.exports.rateLimiter = async (req, res, next) => {
    try {
        // check if the request is within the rate limit
        const { success } = await rateLimit.limit("my-limit-key");
        // else, there are too many requests so return a 429 status code
        // and a message that the user has exceeded the rate limit
        if(!success) return res.status(429).json({message: "Too many requests"});
        // if the request is within the rate limit, then allow the request
        next();
    } catch (error) {
        console.error("Error in rateLimiter middleware", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};