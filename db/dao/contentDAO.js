import ContentModel from "../schemas/content.js";

const findContent = async(searchParams)=>{
    return ContentModel.findOne(searchParams);
}

const findContents = async(searchParams)=>{
    // 없을 경우 null
    return ContentModel.find(searchParams);
}

const addContent = async(contentData)=>{
    const content = new ContentModel(contentData);
    return content.save();
}

const deleteContent = async(contentId)=>{
    return ContentModel.deleteOne({content_Id : contentId});
}

export default {
    findContent,
    findContents,
    addContent,
    deleteContent
}