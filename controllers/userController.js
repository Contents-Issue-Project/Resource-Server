import userDAO from "../db/dao/userDAO.js";
import CacheManager from "../db/connectors/cacheManager.js";

const manager = new CacheManager();

const getUserBookmarks = async(req, res, next)=>{

    //TODO result_number가 아니라 updated인지, 전부 받아오는건지 구분해야 한다.
    //TODO updated는 이제 서비스로 분리해야지.
    const resultNumber = req.query["result_number"];
    const authToken = req.get('Authentication');

    //TODO token으로부터 id 추출하기
    const bookmarkResult = await userDAO.getBookmarks(authToken);
    //TODO 결과로부터 실제 content 내용 재요청해야지 친구야

    const result = await manager.getValue("trending10");

    result.bookamrks = bookmarkResult;
    result.auth = authToken;

    res.json(result);
}

const addUserBookmark = async(req, res, next)=>{

    const authToken = req.get('Authentication');
    const targetContentId = req.body["target_content_id"];

    await userDAO.addBookmark(authToken, targetContentId);

    res.json({
        "message" : "OK"
    });
}

const deleteUserBookmark = async(req, res, next)=>{
    const authToken = req.get('Authentication');
    const targetContentId = req.body["target_content_id"];

    await userDAO.deleteBookmark(authToken, targetContentId);

    res.json({
        "message" : "OK"
    });
}


export default  {
    getUserBookmarks,
    addUserBookmark,
    deleteUserBookmark
}