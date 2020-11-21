import CacheManager from "../db/connectors/cacheManager.js";
import extractContentOverview from "../services/extractContentOverview.js";
import contentDetailService from "../services/contentDetailService.js";
import seasonDetailService from "../services/seasonDetailService.js";
import episodeDetailService from "../services/episodeDetailService.js";

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
        console.log(`trending request : ${resultCount}\n resultCount should be 10 or 30`);
    }
    let contentOverviews = {};
    if(result.hasOwnProperty('results')){
        contentOverviews = result.results.map(extractContentOverview);
    }
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
        console.log(`new request : ${resultCount}\n resultCount should be 10 or 30`);
    }
    let contentOverviews = {};
    if(result.hasOwnProperty('results')){
        contentOverviews = result.results.map(extractContentOverview);
    }
    res.json({
        results: contentOverviews
    });
}

const getContentDetails = async(req, res, next)=>{
    const contentId = req.params.content_id;
    let result;
    try {
        result = await contentDetailService.getContentDetail(contentId);
    }
    catch(e){
        console.log(e);
        res.status(500);
        res.json({});
    }
    if('content_id' in result){
        res.status(200);
    }
    else{
        res.status(404);
    }
    res.json(result);
}

const getSeasonDetails = async(req, res, next)=>{
    const contentId = req.params.content_id;
    const seasonNumber = req.params.season_number;
    let result;

    try {
        result = await seasonDetailService.getSeasonDetail(contentId, seasonNumber);
    }
    catch(e){
        console.log(e);
        res.status(500);
        res.json({});
    }
    if('content_id' in result){
        res.status(200);
    }
    else{
        res.status(404);
    }
    res.json(result);
}

const getEpisodeDetails = async(req, res, next)=>{
    const contentId = req.params.content_id;
    const seasonNumber = req.params.season_number;
    const episodeNumber = req.params.episode_number;

    let result;
    try {
        result = await episodeDetailService.getEpisodeDetail(contentId, seasonNumber, episodeNumber);
    }
    catch(e){
        console.log(e);
        res.status(500);
        res.json({});
    }

    // console.log(result);
    if('content_id' in result){
        res.status(200);
    }
    else{
        res.status(404);
    }
    res.json(result);
}

export default  {
    getTrendingContents,
    getNewContents,
    getContentDetails,
    getSeasonDetails,
    getEpisodeDetails
}