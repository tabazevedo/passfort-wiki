export class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}

export class ResponseError extends Error {
  constructor(response) {
    super(`${response.url} : Server responsed with a ${response.status} (${response.statusText})`);
    this.name = 'ResponseError';
    this.response = response;
  }
}
