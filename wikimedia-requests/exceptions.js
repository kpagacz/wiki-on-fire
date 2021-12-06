class InvalidArgumentException extends Error {
  constructor(message) {
    super.message = message;
    this.name = "InvalidArgumentException";
  }
}

export { InvalidArgumentException };
