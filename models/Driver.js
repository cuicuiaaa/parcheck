const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    }
    
});



const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;

