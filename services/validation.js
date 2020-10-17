const possibleTypes = ["movie", "drama", "all"];
const dateRe = new RegExp(/[0-9]{4}-(0[1-9]|1[0-2])/);
const definedSubTypes = ["fantasy", "romance", "horror", "comedy", "action", "thriller"]

const setError = (resultObj, errMessage)=>{
    resultObj.result = false;
    resultObj.err_message.push(errMessage);
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

    if(date_range === undefined || !(checkDateValidation(date_range))){
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
        // case 'all':
        //     if(!checkAllParamValidation(searchBody.sub_type, searchBody.type_additional_data)){
        //         setError(validationInfo, "additional");
        //     }
        //     break
    }

    return validationInfo
}

const checkDateValidation = (dateRangeObj)=>{

    if(dateRangeObj.start_date === undefined || dateRangeObj.end_date === undefined){
        return false;
    }

    return (dateRe.test(dateRangeObj.start_date)) && (dateRe.test(dateRangeObj.end_date));
}

const checkSubTypeValidation = (subTypes)=>{

    return subTypes.isEmpty() || subTypes.every((element)=>definedSubTypes.includes(element));
}

const checkMovieParamValidation = (subTypes, additional)=>{
    //TODO 이후 movie specific 조건 검증 필요
    return checkSubTypeValidation(subTypes);
}

const checkDramaParamValidation = (subTypes, additional)=>{
    //TODO 이후 drama specific 조건 검증 필요
    return checkSubTypeValidation(subTypes);
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