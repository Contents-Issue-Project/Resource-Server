const possibleTypes = ["movie", "drama", "all"];
const dateRe = new RegExp(/[0-9]{4}-(0[1-9]|1[0-2])/);

const checkSearchValidation = (contentType, searchBody)=>{
    const validationInfo = {
        result : true,
        err_message : []
    }

    const {search_word, date_range} = searchBody;

    if(contentType === undefined || !(possibleTypes.includes(contentType))){
        validationInfo.result = false;
        validationInfo.err_message.push("contentType");
    }

    if(search_word === undefined){
        validationInfo.result = false;
        validationInfo.err_message.push("searchWord");
    }

    if(date_range === undefined || !(checkDateValidation(date_range))){
        validationInfo.result = false;
        validationInfo.err_message.push("dateRange");
    }

    return validationInfo
}

const checkDateValidation = (dateRangeObj)=>{

    if(dateRangeObj.start_date === undefined || dateRangeObj.end_date === undefined){
        return false;
    }

    return (dateRe.test(dateRangeObj.start_date)) && (dateRe.test(dateRangeObj.end_date));
}

export default {
    checkSearchValidation,
    checkDateValidation
}