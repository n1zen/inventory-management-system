// import packages and libraries
const { Ratelimit } = require('@upstash/ratelimit');
const { Redis } = require('@upstash/redis');

// import dotenv and use .env file
const dotenv = require('dotenv');
dotenv.config();

// ratelimit 100 requests per minute
module.exports.rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, '60 s')
});