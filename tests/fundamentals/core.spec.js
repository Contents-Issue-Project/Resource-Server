import should from "should";
import request from "supertest";
import app from "../../app.js";
import connector from '../../db/connectors/index.js';

describe('server fundamentals', ()=>{
    it('health check test', (done)=>{
        request(app)
            .get('/hello')
            .end((err,res)=>{
                if(err){
                    console.log(err);
                }
                res.body.should.containEql({result:"hello"});
                done();
            });
    });

    // it('db sync test', (done)=>{
    //     connector.connectMongo();
    //     done();
    // })

    it('cache sync test', async()=>{
        const cacheClient = new connector.CacheManager();
        await cacheClient.setValue("key", "value");
        const result = await cacheClient.getValue("key");
        result.should.eql("value");
    });
});
