import contentDAO from "../db/dao/contentDAO.js";

const getContentDetail = async(contentId)=>{
    const searchParam = {
        "content_id" : contentId
    }
    let result = await contentDAO.findContent(searchParam);
    if(result === undefined || result === null)
    {
        result = {}
    }
    return result;
}

export default {
    getContentDetail
}