require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://mistertandon:${"0291moJI**"}@clustera.nxyjw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error", err.message);
});

mongoose.connection.once("open", () => {
  console.log("Mongodb connected");
});

// Bring in the models
require("./models/User");
require("./models/Chatroom");
require("./models/Message");

const app = require("./app");

app.listen(3000, () => {
  console.log("BE app is listening at 8000");
});
