const express = require("express");
const app = express();
const errorHandlers = require("./handlers/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(require("cors"));

//Bring in routes
app.use("/user", require("./routes/user"));

app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);

if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
