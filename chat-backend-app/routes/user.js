const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandler");

const userController = require("../controllers/userController");

router.post("/register", catchErrors(userController.register));
router.post("/login", catchErrors(userController.login));

module.exports = router;
