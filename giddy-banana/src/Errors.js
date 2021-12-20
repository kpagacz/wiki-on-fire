class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundException";
  }
}

class InvalidArgumentException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidArgumentException";
  }
}

class InvalidPasswordException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidPasswordException";
  }
}

export { NotFoundException, InvalidArgumentException, InvalidPasswordException };
