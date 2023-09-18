const { userObject, user1Obj, user2Obj, arr1, arr2 } = require("../objects.js");
const { User } = require("../User.js");
const { InvalidArgumentError } = require("../exceptions.js");

describe("Object comparations", () => {
  test("case 1 for objects", () => {
    const u1 = user1Obj;
    const u2 = user2Obj;

    expect(u1).toEqual(u2);
  });

  test("case 2 for arrays", () => {
    const array1 = arr1;
    const array2 = arr2;

    expect(array1).toStrictEqual(array2);
  });

  test("describe two objects by type", () => {
    const usrAsObject = userObject;
    const user = new User(usrAsObject.Name, usrAsObject.Address);

    // will not working due to check Object and Class
    // expect(user).toStrictEqual(usrAsObject);
  });

  test("check toContain", () => {
    const str = "abc abc aa abc";
    const ex = "aa";

    expect(str).toContain(ex);
    expect(str).toMatch(ex);
  });

  test("check toContain in array", () => {
    const strArr = [1,2,33];
    const ex = 2;

    expect(strArr).toContain(ex);
  });

  test("check toMatch", () => {
    function generateUserName(userName) {
      return `${userName}-USER-${Math.random().toString().substring(2, 5)}`;
    }

    const userName = "Alex";
    const updatedUserName = generateUserName(userName);

    expect(updatedUserName).toMatch(/Alex-USER-\d+/);
  });

  test("toBeTruthy", () => {
    function getNullOrValue(inpValue) {
      if (inpValue === "A") return null;

      return inpValue + "A";
    }

    const inp = "A2";
    const res = getNullOrValue(inp);

    expect(res).toBeTruthy();
  });

  test("toBeFalsy", () => {
    function getNullOrValue(inpValue) {
      if (inpValue === "A") return null;

      return inpValue + "A";
    }

    const inp = "A";
    const res = getNullOrValue(inp);

    expect(res).toBeFalsy();
    expect(res).toBeNull();
  });

  test("check to Throw event", () => {
    function throwIfInvalid(input) {
      if (typeof input !== "string" || input.length > 200) {
        throw new InvalidArgumentError("msg");
      }
    }

    const inp = 12;

    expect(() => throwIfInvalid(inp))
    .toThrow(new InvalidArgumentError("msg"));
  });
});
