import should from "should";
import request from "supertest";
import app from "../../app.js";
import dbConnector from '../../db/connectors/index.js'

dbConnector.connectMongo();

//TODO db 연결
describe('contentRouter', ()=>{
    describe('content detail', ()=>{

        it('content detail valid id',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f789')
                .expect(200);

            result.body.content_id.should.eql("f789");
        });
        it('content detail invalid id',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f7890')
                .expect(404);

        });
    });

    describe('season detail',()=>{
        it('season detail valid request',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f789/season/1')
                .expect(200);

            result.body.content_id.should.eql("f789");
        });
        it('season detail invalid id',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f7891/season/1')
                .expect(404);

        });
        it('season detail invalid number',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f789/season/3')
                .expect(404);

        });
    });

    describe('episode detail', ()=>{
        it('episode detail valid request',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f789/season/1/episode/1')
                .expect(200);

            result.body.content_id.should.eql("f789");
        });
        it('episode detail invalid id',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f7891/season/1/episode/1')
                .expect(404);


        });
        it('episode detail invalid number',async()=>{
            const agent = request(app);

            const result = await agent
                .get('/v1/contents/f789/season/1/episode/5')
                .expect(404);


        });
    });
});