const request = require("supertest");
const app = require("./index");

describe("Test the root path", () => {
  test("GET '/' should return 200 OK status", async () => {
    return request(app).get("/").expect(200);
  });
});

describe("Test the places controller path", () => {
  test("GET '/places' should return 200 OK status", async () => {
    return request(app).get("/places").expect(200);
  });
});

describe("Test the catch-all/wildcard route", () => {
  test("GET '/*' should return 404 Not found status", async () => {
    return request(app).get("/*").expect(404);
  });
});
