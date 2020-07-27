const router = require("express").Router();
const streetsController = require("../../controllers/streetsController");

// Matches with "/api/streets"
router.route("/")
  .get(streetsController.findAll)
  

router
  .route("/:id")
  .get(streetsController.findById)
  .put(streetsController.update)

module.exports = router;
