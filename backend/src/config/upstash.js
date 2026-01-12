import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv"

dotenv.config();
//creating a ratelimiter that allows 10 requests per 20s.

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"10 s")
});

export default ratelimit;