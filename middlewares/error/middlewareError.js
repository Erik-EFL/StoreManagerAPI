const pass = 'length must be at least';

const middlewareError = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(message.includes(pass) ? 422 : 400).json({ message }); break;
    case 'NotFoundError': res.status(404).json({ message }); break;
    default: console.warn(err); res.sendStatus(500);
  }
};

module.exports = middlewareError;
