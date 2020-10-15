import CacheManager from "../db/connectors/cacheManager.js";
import userDAO from "../db/dao/userDAO.js";

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

const addUser = async(req, res, next)=>{
    const userId = req.body['user_id'];
    const email = req.body['email'];
    const nickName = req.body['nick_name'];

    await userDAO.addUser(userId, email, nickName);
    res.json({
        "message" : "OK"
    });
}

export default  {
    getRedisData,
    deleteRedisData,
    setRedisData,
    addUser
}