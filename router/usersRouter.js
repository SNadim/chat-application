// external imports
const express = require("express");

// inter imports
const { getUSers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUSers);

module.exports = router;
