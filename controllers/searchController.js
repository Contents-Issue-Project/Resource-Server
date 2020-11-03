import validation from "../services/validation.js";
import searchService from "../services/searchService.js";

const searchContents = async(req,res,next)=>{
    const contentType = req.params.contentType;
    const searchParams = req.body;

    const validationResult = validation.checkSearchValidation(contentType, searchParams);
    if(validationResult.result === false){
        res.status(400);
        res.json({
            message : validationResult.err_message
        });
        return;
    }

    let searchResult;
    switch(contentType){
        case 'movie':
            searchResult = await searchService.searchMovie(searchParams);
            break;
        case 'drama':
            searchResult = await searchService.searchDrama(searchParams);
            break;
        // case 'sports':
        //     searchResult = searchService.searchContents(searchParams);
        case 'all':
            searchResult = await searchService.searchAll(searchParams);
            break;
    }
    res.json({
        results: searchResult
    });
}

export default {
    searchContents
}