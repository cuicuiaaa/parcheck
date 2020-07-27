const router = require("express").Router();
const driversController = require("../../controllers/driversController");

router.route("/")
    .post(driversController.create)

module.exports = router;