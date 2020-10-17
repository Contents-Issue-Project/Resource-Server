import should from "should";
import validation from "../../services/validation.js";

describe('validation', ()=>{
    describe('dateValidation', ()=>{
        it('undefined date', (done)=>{
            const dateObj = {};
            validation.checkDateValidation(dateObj).should.eql(false);
            done();
        });
        it('wrong format1', (done)=>{
            const dateObj = {
                start_date : "22-1234-5678",
                end_date : "22-1234-5678"
            };
            validation.checkDateValidation(dateObj).should.eql(false);
            done();
        });
        it('wrong format2', (done)=>{
            const dateObj = {
                start_date : "3456789323",
                end_date : "1234567890"
            };
            validation.checkDateValidation(dateObj).should.eql(false);
            done();
        });
        it('similar format', (done)=>{
            const dateObj = {
                start_date : "1995-20-30",
                end_date : "2500-12-31"
            };
            validation.checkDateValidation(dateObj).should.eql(false);
            done();
        });
        it('correct format', (done)=>{
            const dateObj = {
                start_date : "2020-10-17",
                end_date : "1995-02-15"
            };
            validation.checkDateValidation(dateObj).should.eql(true);
            done();
        });
    });
    describe('searchValidation', ()=>{
        it('content not defined', (done)=>{
            const requestObj = {
                search_word : "harry potter",
                date_range: {
                    start_date : "2020-10-16",
                    end_date : "2020-10-17"
                }
            };
            const validationResult = validation.checkSearchValidation(undefined, requestObj);
            validationResult.result.should.eql(false);
            validationResult.err_message.should.containEql("contentType");
            done();
        });
        it('content not matching', (done)=>{
            const contentType = "movies";
            const requestObj = {
                search_word : "harry potter",
                date_range: {
                    start_date : "2020-10-16",
                    end_date : "2020-10-17"
                }
            };
            const validationResult = validation.checkSearchValidation(contentType, requestObj);
            validationResult.result.should.eql(false);
            validationResult.err_message.should.containEql("contentType");
            done();
        });
        it('searchword not defined', (done)=>{
            const contentType = "movie";
            const requestObj = {
                date_range: {
                    start_date : "2020-10-16",
                    end_date : "2020-10-17"
                }
            };
            const validationResult = validation.checkSearchValidation(contentType, requestObj);
            validationResult.result.should.eql(false);
            validationResult.err_message.should.containEql("searchWord");
            done();
        });
        it('daterange not defined', (done)=>{
            const contentType = "movie";
            const requestObj = {
                search_word : "harry potter"
            };
            const validationResult = validation.checkSearchValidation(contentType, requestObj);
            validationResult.result.should.eql(false);
            validationResult.err_message.should.containEql("dateRange");
            done();
        })
        it('dateformat not matching', (done)=>{
            const contentType = "movie";
            const requestObj = {
                search_word : "harry potter",
                date_range: {
                    start_date : "20202-10-16",
                    end_date : "12345678"
                }
            };
            const validationResult = validation.checkSearchValidation(contentType, requestObj);
            validationResult.result.should.eql(false);
            validationResult.err_message.should.containEql("dateRange");
            done();
        })
        it('correct request format', (done)=>{
            const contentType = "movie";
            const requestObj = {
                search_word : "harry potter",
                date_range: {
                    start_date : "2020-10-16",
                    end_date : "2020-10-17"
                }
            };
            const validationResult = validation.checkSearchValidation(contentType, requestObj);
            validationResult.result.should.eql(true);
            validationResult.err_message.should.be.empty();

            done();
        })
    })
});
