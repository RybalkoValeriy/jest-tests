class InvalidArgumentError extends Error {
  constructor(error) {
    super(error);
  }
}

class BusinessExceptionError extends Error {
  constructor(error) {
    super(error);
  }
}

module.exports = { InvalidArgumentError, BusinessExceptionError };
