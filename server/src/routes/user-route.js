'use strict';

const router = require("express").Router();
const controller = require("../controllers/user-controller");

router.get("/:page/:limit", controller.get);

module.exports = router;