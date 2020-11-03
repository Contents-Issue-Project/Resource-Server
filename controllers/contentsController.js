import CacheManager from "../db/connectors/cacheManager.js";
import extractContentOverview from "../services/extractContentOverview.js";

const manager = new CacheManager();


//TODO service layer로 분리.
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
            "message" : "resultCount should be 10 or 30",
            results : []
        });
    }
    const contentOverviews = result.map(extractContentOverview);
    res.json({
        results: contentOverviews
    });
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
            "message" : "resultCount should be 10 or 30",
            results : []
        });
    }
    const contentOverviews = result.map(extractContentOverview);
    res.json({
        results: contentOverviews
    });
}

export default  {
    getTrendingContents,
    getNewContents
}