module.exports = {
  request: async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw {
        name: 'UnauthorizedError',
        message: 'You are not authorized.',
        status: 401,
      };
    }

    next();
  },
};
