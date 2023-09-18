const { someFunction, m2 } = require("../M.js");

// beforeAll(() => {});
// afterAll(() => {});

// beforeEach(() => {});
// afterEach(() => {});

describe("someFuction tests", () => {
  let input;

  beforeEach(() => {
    input = 1;
  });

  test("check if input equals 1", () => {
    const testFunction = someFunction(input);

    expect(testFunction).toBe(1);
  });

  test("check if imput any value except 1", () => {
    const testFunction = someFunction(input);

    expect(testFunction).toBe(1);
  });
});

describe("m2 test", () => {
  let a;
  let b;

  beforeEach(() => {
    a = 1;
    b = 1;
  });

  afterEach(() => {
    b = a + 1;
  });

  test("check if m2 return correct sum of items", () => {
    expect(m2(a, b)).toBe(2);
  });
});
