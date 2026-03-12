const request = require("supertest");
const app = require("../src/app");

describe("GET /users", () => {
  it("returns empty array initially", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});

describe("POST /users", () => {
  it("returns 400 when fields are missing", async () => {
    const res = await request(app).post("/users").send({});
    expect(res.status).toBe(400);
  });

  it("returns 400 for invalid email", async () => {
    const res = await request(app)
      .post("/users")
      .send({ username: "alice", email: "not-an-email" });
    expect(res.status).toBe(400);
  });
});
