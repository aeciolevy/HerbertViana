const STATUS_CODE = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    UNPROCESSABLE: 422,
    INTERNAL: 500,
    UNAVAILABLE: 503,
};

class ErrorRequest extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = { ErrorRequest, STATUS_CODE };
