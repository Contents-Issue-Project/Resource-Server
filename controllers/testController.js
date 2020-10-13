import CacheManager from "../db/connectors/cacheManager.js";

const manager = new CacheManager();

const getRedisData = async(req, res, next)=>{
    const searchKey =req.query['key'];
    // console.log(`get key is ${searchKey}`)
    const result = await manager.getValue(searchKey);

    res.json(result);
}

const setRedisData = async(req, res, next)=>{
    const {key, value} = req.body;
    // console.log(`set key is ${key}`);
    // console.log(`set value is ${JSON.stringify(value)}`);
    const result = await manager.setValue(key, value);

    res.json({"result":"OK"});
}

const deleteRedisData = async(req, res, next)=>{
    const {key} = req.body;
    const result = await manager.deleteValue(key);

    res.json({"result":"OK"});
}

export default  {
    getRedisData,
    deleteRedisData,
    setRedisData
}