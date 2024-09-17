const { STATUS, ERROR } = require('../constants');

const respond = {
  do: async (res, status, message = 'Success', data = {}) => {
    let code = STATUS.OK;
    if (status === 401) {
      code = STATUS.UNAUTHORIZED;
    } else if (status === 400 || status === 500 || status === 404) {
      code = STATUS.ERROR;
    }

    return res.status(status).send({
      code,
      message,
      data: data || {},
    });
  },

  withError: (res, err) => {
    if (err.name === 'UnauthorizedError') {
      return respond.do(res, 401, 'Invalid token or disabled.');
    } else {
      return respond.do(
        res,
        err.status || 500,
        err.message || ERROR.MSG.SOMETHING_WRONG
      );
    }
  },
};
module.exports = respond;
