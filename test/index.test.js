import app from "../src/main";
import request from "supertest";

describe("Test App index", ()=>{

    test('Test GET /', () => { 
        request(app)
            .get("/")
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
     })

    test('Test No Path', () => { 
        request(app)
            .get("/undefined")
            .then((response) => {
                expect(response.statusCode).toBe(404);
            });
     })
})