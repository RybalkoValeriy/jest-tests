const accountService  = require("../account/accountService");
const userModule  = require("../user/UserService.js");
describe("test async example", () => {
  const userName = "Alex";

  beforeEach(() => {
    jest.spyOn(userModule, 'getUserByName').mockResolvedValue(null);

    jest
      .spyOn(userModule, "createUserId")
      .mockReturnValue(111);
  });

  test("create user successfully", () => {
    
    // expect.hasAssetions();
    
    return accountService.createUserAccount(userName).then((account) => {
      expect(account).toStrictEqual({data:{ userId: 111, userName: userName }});
    });
  });
});
