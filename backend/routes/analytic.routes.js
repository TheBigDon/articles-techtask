const express = require("express");
const router = express.Router();

const analyticController = require("../controllers/analytic.controller");

router.get("/analytic/comments", analyticController.getCommentsByPeriod);

module.exports = router;
