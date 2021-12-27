const errorMiddlewareHandler = (err, req, res, next) => {
  const errorStatusCode = res.statusCode === 200 ? 5000 : res.statusCode;
  res.status(errorStatusCode);
  res.json({
    message: err.message,
  });

  next();
};

module.exports = { errorMiddlewareHandler };
