const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkingLotSchema = new Schema({
  locationId: {
    type: Number
  },
  occupied: {
    type: Boolean,
    default: false
  },
  drivers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Driver"
    }
  ]
});

const ParkingLot = mongoose.model("ParkingLot", parkingLotSchema);

module.exports = ParkingLot;