import episodeDAO from "../db/dao/episodeDAO.js";

const getEpisodeDetail = async(contentId, seasonNumber, episodeNumber)=>{
    const searchParam = {
        content_id : contentId,
        season_number : seasonNumber,
        episode_number : episodeNumber
    }
    let result = await episodeDAO.findEpisode(searchParam);
    if(result === undefined || result === null)
    {
        result = {}
    }
    console.log(result)
    return result;
}

export default {
    getEpisodeDetail
}