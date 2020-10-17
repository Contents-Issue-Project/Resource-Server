import ContentModel from "../schemas/content.js";

const findContents = async(searchParams)=>{
    // 없을 경우 null
    return ContentModel.findOne(searchParams);
}

const addContent = async(contentData)=>{
    const content = new ContentModel(contentData);
    return content.save();
}

const deleteContent = async(contentId)=>{
    return ContentModel.deleteOne({content_Id : contentId});
}

export default {
    findContents,
    addContent,
    deleteContent
}