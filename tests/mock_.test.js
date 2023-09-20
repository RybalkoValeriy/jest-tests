const { User } = require("../User");
const { Fn, FnForSpy, FnForSpyDate } = require("../objects");

describe("learn mock here", () => {
  test("lest mock simple fun", () => {
    var mockFn = jest.fn(user => user.Age > 18);

    var userLess18 = new User("Alex", "Dresden", 15);
    var userMore18 = new User("Alex2", "Dresden", 20);
    var user18 = new User("Alex3", "Dresden", 18);

    var res1 = Fn(userLess18, mockFn);
    var res2 = Fn(userMore18, mockFn);
    var res3 = Fn(user18, mockFn);

    expect(res1).toBe(false);
    expect(res2).toBe(true);
    expect(res3).toBe(false);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn.mock.calls.length).toBe(3);
  });

  test('test spy here', () => {
    var expected = 2;
    jest.spyOn(global.Math, 'random').mockReturnValue(expected);

    var res = FnForSpy();

    expect(res).toBe(expected);
  });

  test('test spy with data ', () => {
    function TestableFn(){
      return Date.now;
    }
    var expected = new Date(2020,6,7);
    jest.useFakeTimers().setSystemTime(expected);
    // jest.setSystemTime(expected);
    var res = TestableFn();
    
    expect(res).toBe(expected);
  });
});
