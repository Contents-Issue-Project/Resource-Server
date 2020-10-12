import Redis from 'ioredis';
import config from '../../../utils/configs.js';


class RedisCache{
    constructor(){
        this.client = new Redis(config.redisURL);
        return this;
    }
    async getValue(key){
        return this.client.get(key);
    }
    async setValue(key, value){
        return this.client.set(key, value);
    }
}

export default RedisCache;