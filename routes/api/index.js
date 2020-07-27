const router = require("express").Router();
const streetRoutes = require("./streets");
const driverRoutes = require("./drivers");


router.use("/streets", streetRoutes);
router.use("/drivers", driverRoutes);

module.exports = router;
