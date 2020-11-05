import mongoose from "mongoose";

const { Schema } = mongoose;
const seasonSchema = new Schema({

    content_id:{ // imdb
        type:String,
        required:true
    },
    season_number:{
        type: Number,
        required: true
    },
    episode_count : {
        type : Number,
        required :true
    },

    season_statistics : [
        {
            statistics_type : String,
            statistics_name : String,
            url : String
        }
    ]
});

export default mongoose.model('Season', seasonSchema);