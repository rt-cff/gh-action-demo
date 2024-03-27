import { jest } from "@jest/globals";
import { lambdaHandler } from ".";

afterEach(() => {
  jest.restoreAllMocks();
});

test("should print log", () => {
  const logSpy = jest.spyOn(console, "log");
  lambdaHandler();
  expect(logSpy).toHaveBeenCalled();
});

test("should return JSON with statusCode as 200", async () => {
  expect(lambdaHandler()).resolves.toHaveProperty("statusCode", 200);
});

test("should return JSON with body as string", async () => {
  expect(lambdaHandler()).resolves.toHaveProperty("body", expect.any(String));
});
