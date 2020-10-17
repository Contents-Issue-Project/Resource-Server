import mongoose from "mongoose";

const { Schema } = mongoose;
const contentSchema = new Schema({
    /*////////////////////////////////////////*/
    /*////////start of contents overview//////*/
    /*////////////////////////////////////////*/
    content_id:{
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
    /*////////////////////////////////////////*/
    /*/////////end of contents overview///////*/
    /*////////////////////////////////////////*/
    sub_type : [String],
    single_statistics : [String],

    type_additional_data : Schema.Types.Mixed,
    series_additional_data : {
        season_count : Number,
        season_id : [Schema.Types.ObjectId]
    }
});

export default mongoose.model('Content', contentSchema);