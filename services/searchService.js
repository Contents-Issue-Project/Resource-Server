import contentDAO from "../db/dao/contentDAO.js";
import extractContentOverview from "./extractContentOverview.js";


const extractCommonParams = (params)=>{
    const commonParams = {}
    if(params.hasOwnProperty('search_word')){
        commonParams["$or"] = [{"title_kr" : {$regex:params.search_word}},
            {"title_en" : {$regex:params.search_word, $options:"i"}}]
    }
    if(params.hasOwnProperty('sub_type') && params.sub_type.length > 0){
        commonParams.sub_type = {$in:params.sub_type}
    }
    if(params.hasOwnProperty('date_range')){
        commonParams.release_date = {"$gte":params.date_range.start_date, "$lte":params.date_range.end_date};
    }
    return commonParams;
}

//TODO class 이용해서 중복 없앨 수 있지 않았나? 팩토리 메서드 패턴?
const searchMovie = async(searchParams)=>{
    // TODO movie만의 specific 조건 검증 + 검색 위한 param화
    // 현재 상황에서는 content type을 parameter 지정하고 3개 메서드 합칠 수 있지만, 차후 분리 가능성 고려.
    try {
        const adaptedSearchParams = extractCommonParams(searchParams);
        adaptedSearchParams.content_type = "movie";
        //TODO type additional data 검색 조건 추가
        
        const searchResult = await contentDAO.findContents(adaptedSearchParams);

        console.log(searchResult);

        if(searchResult.length > 0){
            const contentOverviews = searchResult.map(extractContentOverview);
            return contentOverviews;
        }
        else{
            return [];
        }
    }
    catch(e){
        console.log(e);
        return [];
    }
}

const searchDrama = async(searchParams)=>{
    try {
        const adaptedSearchParams = extractCommonParams(searchParams);
        adaptedSearchParams.content_type = "drama";

        const searchResult = await contentDAO.findContents(adaptedSearchParams);

        console.log(searchResult);

        if(searchResult.length > 0){
            const contentOverviews = searchResult.map(extractContentOverview);
            return contentOverviews;
        }
        else{
            return [];
        }
    }
    catch(e){
        console.log(e);
        return [];
    }
}

const searchAll = async(searchParams)=>{
    try {
        const adaptedSearchParams = extractCommonParams(searchParams);

        const searchResult = await contentDAO.findContents(adaptedSearchParams);

        console.log(searchResult);

        if(searchResult.length > 0){
            const contentOverviews = searchResult.map(extractContentOverview);
            return contentOverviews;
        }
        else{
            return [];
        }
    }
    catch(e){
        console.log(e);
        return [];
    }
}

export default {
    searchMovie,
    searchDrama,
    searchAll
}