const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const streetSchema = new Schema({
  name: { type: String },
  parkingLots: [
    {
      type: Schema.Types.ObjectId,
      ref: "ParkingLot"
    }
//     {
//       locationId: {
//         type: Number
//       },
//       occupied: {
//         type: Boolean,
//         default: false
//       },
//       drivers: [
//         // {
//         //   type: Schema.Types.ObjectId,
//         //   ref: "Driver"
//         // }
//         {
//           plate: {
//             type: String,
//             trim: true,
//             required: "Enter your vehicle registration plate"
//           },
//           email: {
//             type: String,
//             trim: true,
//             required: true
//           },
//           password: {
//             type: String,
//             trim: true,
//             required: true
//           },
//           startTime: {
//             type: Number,
//             require: true
//           },
//           leaveTime: {
//             type: Number
//           }
//       }
//       ]
//     }
  ]
});

const Street = mongoose.model("Street", streetSchema);

module.exports = Street;
