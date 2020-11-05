import EpisodeModel from "../schemas/episode.js"

const findEpisode = async(searchParams)=>{
    return EpisodeModel.findOne(searchParams);
}

export default {
    findEpisode
}