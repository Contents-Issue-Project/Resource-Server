import RedisCache from '../dao/caching/redisCache.js'
import LocalCache from '../dao/caching/localCache.js'

class CacheManager{
    constructor(){
        if(!CacheManager.instance){
            CacheManager.init()
        }
        return CacheManager.instance;
    }
    static init(){
        if (process.env.NODE_ENV !== 'production'){
            CacheManager.instance =  new LocalCache();
        }
        else{
            CacheManager.instance =  new RedisCache();
        }
    }
}

export default CacheManager