/**
 * This module exports custom exceptions.
 *
 * @module src/errors
 */

/**
 * Represents an exception when something is not found.
 *
 * @extends Error
 */
class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundException";
  }
}

/**
 * Represents an exception thrown when an invalid argument is passed to a function.
 *
 * @extends Error
 */
class InvalidArgumentException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidArgumentException";
  }
}

/**
 * Represents an exception thrown when an invalid password is passed to a function.
 *
 * @extends Error
 */
class InvalidPasswordException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidPasswordException";
  }
}

export {
  NotFoundException,
  InvalidArgumentException,
  InvalidPasswordException,
};
