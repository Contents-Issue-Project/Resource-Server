import SeasonModel from "../schemas/season.js"

const findSeason = async(searchParams)=>{
    return SeasonModel.findOne(searchParams);
}

export default {
    findSeason
}