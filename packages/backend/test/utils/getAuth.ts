import request from "supertest";

import app from "./app";

const getAuth = async () => {
  return await request(app)
    .post("/api/auth/signin")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .send({ password: import.meta.env.PASSWORD })
    .expect(200)
    .then((response) => response.body.token);
};

export default getAuth;