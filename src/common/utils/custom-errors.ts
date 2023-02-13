class HttpError extends Error {
  statusCode: number;

  constructor({ message, statusCode }: { message?: string; statusCode?: number }) {
    super(message);

    this.statusCode = statusCode;
  }
}

class BadRequestError extends HttpError {
  statusCode: number = 400;
}

class UnauthorizedError extends HttpError {
  statusCode: number = 401;
}

class ValidationError extends HttpError {
  errors: string[];

  constructor({ message, errors }: { message: string; errors?: string[] }) {
    super({ message, statusCode: 422 });

    this.errors = errors ?? [];
  }
}

class NotFoundError extends HttpError {
  statusCode: number = 404;
}

export { HttpError, BadRequestError, UnauthorizedError, ValidationError, NotFoundError };
