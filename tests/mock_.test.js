const { User } = require("../User");
const { Fn } = require("../objects");
describe("learn mock here", () => {
  test("lest mock simple fun", () => {
    var mockFn = jest.fn((user) => user.Age > 18);

    var userLess18 = new User("Alex", "Dresden", 15);
    var userMore18 = new User("Alex2", "Dresden", 20);
    var user18 = new User("Alex3", "Dresden", 18);

    var res1 = Fn(userLess18, mockFn);
    var res2 = Fn(userMore18, mockFn);
    var res3 = Fn(user18, mockFn);

    expect(res1).toBe(false);
    expect(res2).toBe(true);
    expect(res3).toBe(false);
  });
});
