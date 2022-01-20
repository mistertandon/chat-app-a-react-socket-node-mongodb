exports.catchErrors = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      console.log(err);
      if (typeof err === "string") {
        res.status(400).json({ message: err });
      } else {
        next(err);
      }
    });
  };
};

exports.mongooseErrors = (err, req, res, next) => {
  if (!err.errors) {
    return next(err);
  }

  const errorKeys = Object.keys(err.errors);
  let message = "";

  errorKeys.forEach((key) => {
    return (message += err.errors[key].message + ", ");
  });

  message.substring(0, message.length - 2);

  res.status(400).json({ message });
};

exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || "";
  const errorDetails = {
    messgae: err.message,
    status: err.status,
    stack: err.stack,
  };

  res.status(err.status || 500).json(errorDetails);
};

exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "Something went wrong | Production",
  });
};

exports.notFound = (req, res, next) => {
  res.status(404).json({
    message: "Resource not found",
  });
};
