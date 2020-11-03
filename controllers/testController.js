import CacheManager from "../db/connectors/cacheManager.js";
import userDAO from "../db/dao/userDAO.js";
import contentDAO from "../db/dao/contentDAO.js";

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

const addContent = async(req, res, next)=>{
    //TODO 원래는 에러 처리도 service layer에서 수행해야 한다
    const addBody = req.body;
    try{
        await contentDAO.addContent(addBody);
    }
    catch(e){
        console.log(e);
        res.status(400);
        res.json({message: "error"});
        return;
    }
    res.json({message : "OK"});
}

const deleteContent = async(req, res, next)=>{
    const deleteID = req.body['content_id'];
    try{
        await contentDAO.deleteContent(deleteID);
    }
    catch(e){
        console.log(e);
        res.status(400);
        res.json({message : "error"});
        return;
    }
    res.json({message : "OK"});
}

export default  {
    getRedisData,
    deleteRedisData,
    setRedisData,
    addUser,
    addContent,
    deleteContent
}