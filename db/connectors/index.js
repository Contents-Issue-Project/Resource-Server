import connectMongo from './mongoConnector.js';
import CacheManager from "./cacheManager.js";

const connector = {
    connectMongo,
    CacheManager
}

export default connector;