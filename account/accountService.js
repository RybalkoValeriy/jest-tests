const { BusinessExceptionError } = require("../exceptions.js");
const userModule = require('../user/UserService.js');

async function createUserAccount(userName) {
  const userAny = await userModule.getUserByName(userName);

  return new Promise((resolve, reject) => {
    if (!userAny) {
      resolve({
        data: {
          userId: userModule.createUserId(),
          userName: userName,
        },
      });
    } else {
      reject("user with this name already exists");
    }
  });
}

function validateAccountForUser(userId) {
  const response = userModule.getUser(userId);

  const user = new userModule.User(
    response.name,
    response.address,
    response.age
  );

  if (user.Age < 18) {
    throw new BusinessExceptionError("Dose not allowed for this user");
  }

  return user;
}

module.exports = { validateAccountForUser, createUserAccount };
