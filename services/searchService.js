import contentDAO from "../db/dao/contentDAO.js";

const extractContentOverview =
    ({content_id, title_kr, title_en, release_date, content_type, is_single, poster_url, top_words})=>
        ({content_id, title_kr, title_en, release_date, content_type, is_single, poster_url, top_words});

const extractCommonParams = (params)=>{
    const commonParams = {
        "$or" : [{"title_kr" : {$regex:params.search_word}},
            {"title_en" : {$regex:params.search_word}}]
    };
    if(params.hasOwnProperty('sub_type') && params.sub_type.length > 0){
        commonParams.sub_type = {$in:params.sub_type}
    }
    if(params.hasOwnProperty('date_range')){
        commonParams.release_date = {"$gte":params.date_range.start_date, "$lte":params.date_range.end_date};
    }
    return commonParams;
}

const searchMovie = async(searchParams)=>{
    // TODO movie만의 specific 조건 검증 + 검색 위한 param화
    // 현재 상황에서는 content type을 parameter 지정하고 3개 메서드 합칠 수 있지만, 차후 분리 가능성 고려.
    try {
        const adaptedSearchParams = extractCommonParams(searchParams);
        adaptedSearchParams.content_type = "movie";

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