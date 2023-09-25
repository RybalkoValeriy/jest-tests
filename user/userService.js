// Module target to mock
class User {
  constructor(name, address, age) {
    this.Name = name;
    this.Address = address;
    this.Age = age;
    this.Id = 123;
  }

  info() {
    return `${this.Id} ${this.Name} ${this.Age} ${this.Address}`;
  }
}

function getUser(userId) {
  const url = new URL("http://localhost:5000/users/");
  url.searchParams.append("userId", userId);

  const request = new XMLHttpRequest();
  request.open("GET", url.toString());

  return request.response;
}

async function getUserByName(userName) {
  const url = new URL("http://localhost:5000/users/");
  url.searchParams.append("userName", userName);

  const request = new XMLHttpRequest();
  request.open("GET", url.toString());

  return request.response;
}

function createUserId() {
  return 1234;
}

function getItems() {
  return [1, 2, 3];
}

module.exports = 
{ 
  User, 
  getUser, 
  getItems, 
  getUserByName, 
  createUserId 
};