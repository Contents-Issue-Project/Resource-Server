import UserModel from "../schemas/user.js";

const findUser = async(userId)=>{
    // 없을 경우 null
    return UserModel.findOne({userId : userId});
}

const addUser = async(userId, email, nickName)=>{
    const user = new UserModel({
        userId : userId,
        email : email,
        nickName : nickName,
        bookmarks : [],
        recentlyWatched : []
    });
    return user.save();
}

const deleteUser = async(userId)=>{
    return UserModel.deleteOne({userId : userId});
}

// const updateNickName = async(userId, nickName)=>{
//
// }

const addBookmark = async(userId, targetContentId)=>{
    return UserModel.findOneAndUpdate(
        {userId : userId},
        {$push : {'bookmarks': targetContentId}}
    );
}

const deleteBookmark = async(userId, targetContentId)=>{
    return UserModel.findOneAndUpdate(
        {userId : userId},
        {$pull : {'bookmarks': targetContentId}}
    );
}

const getBookmarks = async(userId)=>{
    const result = await findUser(userId);
    if(result == null){
        return null
    }
    else{
        return result.bookmarks
    }
}
//
// const addRecentlyWatched = async()=>{
//
// }
//
// const deleteRecentlyWatched = async()=>{
//
// }

export default {
    findUser,
    deleteUser,
    addUser,
    addBookmark,
    deleteBookmark,
    getBookmarks
}