const request = require("supertest");
const app = require("../src/app");

describe("GET /tasks", () => {
  it("returns incomplete tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /tasks/:id", () => {
  it("returns a specific task", async () => {
    const res = await request(app).get("/tasks/1");
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Set up project");
  });

  it("returns 404 for missing task", async () => {
    const res = await request(app).get("/tasks/999");
    expect(res.status).toBe(404);
  });
});
