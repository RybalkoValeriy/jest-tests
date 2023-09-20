user1Obj = {
  Name: "Alex",
  Address: {
    City: "Dresden",
    Street: "Kornmarked2",
    s: undefined,
  },
  Age: 22,
};

user2Obj = {
  Name: "Alex",
  Address: {
    City: "Dresden",
    Street: "Kornmarked2",
  },
  Age: 22,
};

userObject = {
  Name: "Alex",
  Address: "Kornmarked2"
}

arr1 = [
  1,
  2,
  3,
  "111",
  // , undefined
];
arr2 = [1, 2, 3, "111"];

function Fn(user, predicate){
  var result = predicate(user);
  return result;
}

function FnForSpy(){
  return Math.random(1,100)
}

function FnForSpyDate(){
  return Date.now;
}

module.exports = { FnForSpyDate, FnForSpy, Fn, userObject, user1Obj, user2Obj, arr1, arr2 };
