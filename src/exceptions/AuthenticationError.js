const ClientError = require('./ClientError');

class AuthenticationError extends ClientError {
  constructor(message) {
    super(message, 400);
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationError;
