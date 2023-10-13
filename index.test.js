const request = require("supertest");
const app = require("./index");

describe("Test the root path", () => {
  test("GET '/' should return 200 OK status", async () => {
    const response = await request(app).get("/");
    expect(response.text).toContain("<!DOCTYPE html>");
  });
});

describe("Test the places controller path", () => {
  test("GET '/places' should return 200 OK status", async () => {
    const response = await request(app).get("/places");
    expect(response.text).toContain("<!DOCTYPE html>");
  });
});

describe("Test the catch-all/wildcard route", () => {
  test("GET '/*' should return 404 Not found status", async () => {
    return request(app).get("/*").expect(404);
  });
});
