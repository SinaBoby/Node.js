import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });
});
describe("Test the root path", () => {
  it("It should response the GET method", () => {
    return request
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        
      });
  });
});
describe("POST /weather", () => {
  describe('when passing correct cityName', () => {
    test("It should response with 200 statusCode", () => {
     return request
        .post("/weather")
        .send({cityName:`Amsterdam`})
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  }),
  describe('when passing correct cityName', () => {
    test("It should response with cityName contained", () => {
     return request
        .post("/weather")
        .send({cityName:`Amsterdam`})
        .then(response => {
          expect(response.headers['content-type']).toEqual(expect.stringContaining('html')),
          expect(response.text).toEqual(expect.stringContaining('Amsterdam'))
        });
    });
  }),
  describe('when passing No cityName', () => {
    test("It should response with 404 statusCode", ()=> {
     return request
        .post("/weather")
        .send({cityName:``})
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  }),
  describe('when passing gibberish cityName', () => {
    test("It should response with 404 statusCode", () => {
      return request
        .post("/weather")
        .send({cityName:`dgfgfhghgh`})
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  })
  
});
