import app from "@test/utils/app";
import request from "supertest";

describe("Sign in API - POST", () => {
  it("should not return token if password is wrong", async () => {
    const testValues = [undefined, null, true, false, "password", 1, "password1", "pass word"];

    for (const testValue of testValues) {
      await request(app)
        .post("/api/auth/signin")
        .send({ user: testValue, password: testValue })
        .expect(401);
    }
  });
});
