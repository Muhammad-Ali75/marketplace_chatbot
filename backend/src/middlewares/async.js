const respond = require('../utils/respond').do;

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next)
      .then((payload) => {
        if (payload?.error) {
          next(
            {
              name: payload?.error?.name,
              status: payload?.error?.status,
              message: payload?.error?.message,
            },
            req,
            res
          );
        } else {
          return respond(
            res,
            payload?.status || 200,
            payload?.message,
            payload?.data
          );
        }
      })
      .catch(next);
  };
};
