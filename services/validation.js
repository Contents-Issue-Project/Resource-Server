const possibleTypes = ["movie", "drama", "all"];
const dateRe = new RegExp(/[0-9]{4}-(0[1-9]|1[0-2])/);
const definedDramaSubTypes = ["fantasy", "animation", "adventure", "comedy", "action", "drama",
"crime", "war", "family", "western", "mystery", "documentary", "sci-fi"]
const definedMovieSubTypes = ["fantasy", "animation", "adventure", "comedy", "action", "drama",
    "crime", "war", "family", "western", "mystery", "documentary", "sci-fi", "history", "horror", "music", "romance", "thriller", "tv"]

const setError = (resultObj, errMessage)=>{
    resultObj.result = false;
    resultObj.err_message.push(errMessage);
}

// 하나만 설정되어있으면 잘못설정한거지만, 둘다 비어있다면 안적은거겠지.
const checkDateEmpty = (dateObj)=>{
    if(dateObj === undefined ||
        (dateObj.start_date === undefined && dateObj.end_date === undefined)){
        return true;
    }
    else{
        return false;
    }
}

const checkSearchValidation = (contentType, searchBody)=>{
    const validationInfo = {
        result : true,
        err_message : []
    }

    const {search_word, date_range} = searchBody;

    if(contentType === undefined || !(possibleTypes.includes(contentType))){
        setError(validationInfo, "contentType");
    }

    if(search_word === undefined){
        setError(validationInfo, "searchWord");
    }

    if(!checkDateEmpty(date_range) && !(checkDateValidation(date_range))){
        setError(validationInfo, "dateRange");
    }

    switch(contentType){
        case 'movie':
            if(!checkMovieParamValidation(searchBody.sub_type, searchBody.type_additional_data)){
                setError(validationInfo, "additional");
            }
            break
        case 'drama':
            if(!checkDramaParamValidation(searchBody.sub_type, searchBody.type_additional_data)){
                setError(validationInfo, "additional");
            }
            break
        //TODO 원래 all만의 subtype따로 검증해야 함
        case 'all':
            if(!checkMovieParamValidation(searchBody.sub_type, searchBody.type_additional_data)){
                setError(validationInfo, "additional");
            }
            break
    }

    return validationInfo
}

const checkDateValidation = (dateRangeObj)=>{

    if(dateRangeObj.start_date === undefined || dateRangeObj.end_date === undefined){
        return false;
    }

    return (dateRe.test(dateRangeObj.start_date)) && (dateRe.test(dateRangeObj.end_date));
}

const checkSubTypeValidation = (subTypes, desiredSubTypes)=>{
    if(subTypes === undefined){
        return true;
    }

    return subTypes.every((element)=>desiredSubTypes.includes(element));
}

const checkMovieParamValidation = (subTypes, additional)=>{
    //TODO 이후 movie specific 조건 검증 필요
    return checkSubTypeValidation(subTypes, definedMovieSubTypes);
}

const checkDramaParamValidation = (subTypes, additional)=>{
    //TODO 이후 drama specific 조건 검증 필요
    return checkSubTypeValidation(subTypes, definedDramaSubTypes);
}

// const checkAllParamValidation = (subTypes, additional)=>{
//     //TODO 불필요한 요청데이터가 들어왔는지를 우선 단순하게 드라마, 영화 case에 부합하는 경우로 정의
//     //다만 현재는 additional 비어있어도 실패판정 나므로 주석처리
//     return (!checkMovieParamValidation(subTypes, additional) &&!checkDramaParamValidation(subTypes,additional));
// }

export default {
    checkSearchValidation,
    checkDateValidation,
    checkMovieParamValidation,
    checkDramaParamValidation,
    checkSubTypeValidation
}