import should from "should";
import request from "supertest";
import app from "../../app.js";
import connector from '../../db/connectors/index.js';

describe('server fundamentals', ()=>{
    it('health check test', (done)=>{
        request(app)
            .get('/hello')
            .end((err,res)=>{
                console.log(err);
                res.body.should.containEql({"result":"hello!"});
                done();
            });
    });

    // it('db sync test', (done)=>{
    //     connector.connectMongo();
    //     done();
    // })
});
