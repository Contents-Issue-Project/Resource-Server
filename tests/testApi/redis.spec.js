import should from "should";
import request from "supertest";
import app from "../../app.js";
import testData from '../testData.js';

describe('redis test', ()=>{

    it('delete redis', async()=>{
        const agent = request(app);
        await agent
            .post('/test/redis')
            .send({
                "key" : "contentsOverview",
                "value" : testData.contentsOverview
            })
            .set('Accept', 'application/json')
            .expect(200)

        await agent
            .delete('/test/redis')
            .send({
                "key" : "contentsOverview"
            })
            .set('Accept', 'application/json')
            .expect(200)

        const result = await agent
            .get('/test/redis/?key=contentsOverview')
            .expect(200);

        console.log(result.body);
    })

    it('set redis', async()=>{
        const agent = request(app);
        await agent
            .post('/test/redis')
            .send({
                "key" : "contentsOverview",
                "value" : testData.contentsOverview
            })
            .set('Accept', 'application/json')
            .expect(200)

        const result = await agent
            .get('/test/redis/?key=contentsOverview')
            .expect(200);

        console.log(result.body);
    });

});
