import seasonDAO from "../db/dao/seasonDAO.js";

const getSeasonDetail = async(contentId, seasonNumber)=>{
    const searchParam = {
        content_id : contentId,
        season_number : seasonNumber
    }
    let result = await seasonDAO.findSeason(searchParam);
    if(result === undefined || result === null)
    {
        result = {}
    }
    return result;
}

export default {
    getSeasonDetail
}