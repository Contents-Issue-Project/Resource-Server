import Redis from 'ioredis';
import config from '../../../utils/configs.js';


class RedisCache{
    constructor(){
        this.client = new Redis(config.redisURL);
        return this;
    }
    async getValue(key){
        const redisPromise = this.client.get(key);

        return redisPromise.then((data)=>{
            return new Promise(((resolve, reject) => {
                resolve(JSON.parse(data));
            }))
        })
    }
    async setValue(key, value){
        let target;
        if(typeof(value) === "object"){
            target = JSON.stringify(value);
        }
        else{
            target = value;
        }
        return this.client.set(key, target);
    }
    //TODO delete 구현하기
    async deleteValue(key){
        return this.client.del(key);
    }
}

export default RedisCache;