import mongoose from "mongoose";

const { Schema } = mongoose;
const episodeSchema = new Schema({

    content_id:{ // imdb
        type:String,
        required:true
    },
    season_number:{
        type: Number,
        required: true
    },
    episode_number : {
        type : Number,
        required :true
    },

    episode_statistics : [
        {
            statistics_type : String,
            statistics_name : String,
            url : String
        }
    ]
});

export default mongoose.model('Leaf_episode', episodeSchema);