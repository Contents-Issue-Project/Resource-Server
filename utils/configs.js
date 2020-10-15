// 로컬 config와, deploy config 분리.
import dotenv from "dotenv";

const config = {};

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}
config.mongoURL = process.env.MONGO_URL;
config.redisURL = process.env.REDIS_URL;

export default config;