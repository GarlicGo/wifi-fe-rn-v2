export class ServiceError extends Error {
  readonly #status: number;

  readonly #message: string;

  constructor(status: number, message: string) {
    super(message);
    this.#status = status;
    this.#message = message;
  }

  get status() {
    return this.#status;
  }

  get message() {
    return this.#message;
  }

  toString() {
    const status = this.#status;
    let errDetail: string;

    if (status >= 500) {
      errDetail = 'Internal Server Error';
    } else if (status >= 400 && status < 500) {
      errDetail = 'Bad Request';
    } else if (status >= 300 && status < 400) {
      errDetail = 'Redirect';
    } else {
      errDetail = 'Unknown Error';
    }

    return `${this.#status} ${errDetail} ${this.#message}`;
  }
}

export class BizError extends Error {
  readonly #code: number;

  readonly #message: string;

  constructor(code: number, message: string) {
    super(message);
    this.#code = code;
    this.#message = message;
  }

  get code() {
    return this.#code;
  }

  get message() {
    return this.#message;
  }

  toString() {
    return `${this.#code} ${this.#message}`;
  }
}
