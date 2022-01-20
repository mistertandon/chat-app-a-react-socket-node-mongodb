const router = require("express").Router();
const chatroomController = require("./../controllers/chatroomController");
const { catchErrors } = require("./../handlers/errorHandler");

const auth = require("./../middlewares/auth");

router.post("/create", auth, catchErrors(chatroomController.createChatroom));

module.exports = router;
