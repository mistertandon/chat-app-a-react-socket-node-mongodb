const express = require("express");
const app = express();
const cors = require("cors");
const errorHandlers = require("./handlers/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Bring in CORS
app.use(cors());

//Bring in routes
app.use("/user", require("./routes/user"));
app.use("/chatroom", require("./routes/chatroom"));

app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);

if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
