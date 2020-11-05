import mongoose from "mongoose";

const { Schema } = mongoose;
const contentSchema = new Schema({
    /*////////////////////////////////////////*/
    /*////////start of contents overview//////*/
    /*////////////////////////////////////////*/
    content_id:{ // imdb
        type:String,
        required:true,
        unique:true
    },
    title_kr: String,
    title_en:{
        type: String,
        lowercase : true,
        required: true
    },
    release_date : {
        type : String,
        required :true
    },
    content_type : {
        type : String,
        required : true
    },
    is_single : {
        type : Boolean,
        required : true
    },
    poster_url : {
        type : String,
        required : true
    },
    top_words : [{type : String, lowercase: true}],
    sub_type : [String],
    /*////////////////////////////////////////*/
    /*/////////end of contents overview///////*/
    /*////////////////////////////////////////*/

    type_additional_data : Schema.Types.Mixed, //content_type에 따라 다름

    is_hot : Boolean,

    season_data : { // is_single이 false일때만 적용.
        season_count : Number
    },

    single_statistics : [ // is_single이 true일때만 적용.
        {
            statistics_type : String,
            statistics_name : String,
            url : String
        }
    ]
});

export default mongoose.model('Content', contentSchema);