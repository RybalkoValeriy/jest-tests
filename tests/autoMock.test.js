// test it self
const userModule = require("../user/User");
const accountModule = require("../account/account");
const { BusinessExceptionError } = require("../exceptions.js");
jest.mock("../user/User");

describe("Auto mock", () => {
  test("Test with overriding implementation", () => {
    const userId = 15;

    expect(() => accountModule.validateAccountForUser(userId)).toThrow(
      new BusinessExceptionError("Dose not allowed for this user")
    );
  });

  test("Test with overriding implementation via spy On", () => {
    jest
      .spyOn(userModule, 'getUser')
      .mockReturnValue({ name: "Alex", address: "Dresden", age: 30 });
    const userId = 15;
    
    const userEx = new userModule.User('Alex', 'Dresden', 30);
    const userAct = accountModule.validateAccountForUser(userId); 
    expect(userAct).toEqual(userEx);
  });

  test("get item", () => {
    const items = userModule.getItems();
    const expectRes = [1, 1, 1, 1];

    expect(items).toStrictEqual(expectRes);
  });
});
