import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    nickName:{
        type: String,
        required: true
    },
    bookmarks:[String],
    recentlyWatched:[String]
});

export default mongoose.model('User', userSchema);