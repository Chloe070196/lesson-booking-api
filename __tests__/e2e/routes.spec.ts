import mockClient from "supertest";
import TestUtils from "../utils.ts";

describe("user/", () => {
  beforeAll(async () => {
    new TestUtils();
    await TestUtils.initializeApp();
  });

  describe("/register : POST", () => {
    test(" if the user is new, saves their details into the database and return a success (201) response containing their id and username in its data object", async () => {
      const mockUser = {
        password: process.env.TEST_USER_THREE_PASSWORD,
        username: "Danny1234",
        email: process.env.TEST_USER_THREE_EMAIL,
      };
      const response = await mockClient(TestUtils.app)
        .post("/user/register")
        .send(mockUser);

      expect(response.status).toEqual(201);
      expect(response.body).toHaveProperty("data");
      expect(response.body.data).toHaveProperty("id");
      expect(response.body.data.username).toEqual("Danny1234");
    });

    test(" if the user not new, sends a 400 error message", async () => {
      const mockUser = {
        password: process.env.TEST_USER_THREE_PASSWORD,
        username: "Danny1234",
        email: process.env.TEST_USER_THREE_EMAIL,
      };
      const response = await mockClient(TestUtils.app)
        .post("/user/register")
        .send(mockUser);

      expect(response.status).toEqual(400);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toEqual(
        "The email provided is already in use"
      );
      expect(response.body).toHaveProperty("status");
      expect(response.body.status).toEqual("fail");
    });
  });

  describe("/login :POST", () => {
    test(" if the credentials match, returns a jwt", async () => {
      const mockUser = {
        password: process.env.TEST_USER_THREE_PASSWORD,
        email: process.env.TEST_USER_THREE_EMAIL,
      };
      const response = await mockClient(TestUtils.app)
        .post("/user/login")
        .send(mockUser);

      expect(response.status).toEqual(201);
      expect(response.body).toHaveProperty("data");
      expect(response.body.data).toHaveProperty("token");
    });

    test(" if the credentials do not match, sends a generic error message", async () => {
      const mockUser = {
        password: process.env.TEST_USER_THREE_PASSWORD,
        email: process.env.TEST_USER_TWO_EMAIL,
      };
      const response = await mockClient(TestUtils.app)
        .post("/user/login")
        .send(mockUser);

        expect(response.status).toEqual(401);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toEqual(
          "Incorrect email or password"
        );
        expect(response.body).toHaveProperty("status");
        expect(response.body.status).toEqual("fail");
    });
  });
});
