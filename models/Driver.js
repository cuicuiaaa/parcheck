const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const time = new Date().getTime();

const driverSchema = new Schema({
    
    email: {
      type: String,
      trim: true,
      required: true
    },
    googleId: {
      type: String,
      trim: true,
      required: true
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    startTime: {
      type: Number,
      default: time
    },
    endTime: {
      type: Number
    }
    
});



const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;

