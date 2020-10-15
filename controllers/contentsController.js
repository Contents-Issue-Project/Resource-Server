import CacheManager from "../db/connectors/cacheManager.js";

const manager = new CacheManager();

const getTrendingContents = async(req, res, next)=>{
    const resultCount = req.params['result_count'];
    let result;
    if(resultCount === "10"){
        result = await manager.getValue("trending10");
    }
    else if(resultCount === "30"){
        result = await manager.getValue("trending30");
    }
    else{
        res.status(400);
        res.json({
            "message" : "resultCount should be 10 or 30"
        });
    }
    res.json(result);
}

const getNewContents = async(req, res, next)=>{
    const resultCount = req.params['result_count'];
    let result;
    if(resultCount === "10"){
        result = await manager.getValue("new10");
    }
    else if(resultCount === "30"){
        result = await manager.getValue("new30");
    }
    else{
        res.status(400);
        res.json({
            "message" : "resultCount should be 10 or 30"
        });
    }
    res.json(result);
}

export default  {
    getTrendingContents,
    getNewContents
}