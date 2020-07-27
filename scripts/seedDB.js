const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/parcheck"
);

const date = new Date().getTime();

db.Street.create({
  name: "88-90 Houston Rd"
})

db.Street.create({
  name: "King St"
})

db.Street.create({
  name: "13 Rainbow St"
})

db.Street.create({
  name: "Anzac Pde & Sturt St"
})


db.ParkingLot.create({
  locationId: 3,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 4,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 5,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 6,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });



db.ParkingLot.create({
  locationId: 1,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "King St"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 2,
  occupied: true
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "King St"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 7,
  occupied: false
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "King St"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 8,
  occupied: true
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "Anzac Pde & Sturt St"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.Driver.create({
  
  email: "clare@gmail.com",
  googleId: "2378109579346",
  name: "Charlie Ge"
  
})
  .then(({_id}) => db.ParkingLot.findOneAndUpdate({locationId: 2}, { $push: { drivers: _id } }))
  .then(dbParkingLot => {
    console.log(dbParkingLot);
  })
  .catch(err => {
    console.log(err);
  });

db.Driver.create({
  
  email: "clareee@gmail.com",
  googleId: "238791573480976890",
  name: "Han Han"
  
})
  .then(({_id}) => db.ParkingLot.findOneAndUpdate({locationId: 1}, { $push: { drivers: _id } }))
  .then(dbParkingLot => {
    console.log(dbParkingLot);
  })
  .catch(err => {
    console.log(err);
  });

db.Driver.create({
  
  email: "clareee@gmail.com",
  googleId: "327583945946",
  name: "Jennie Dutton"
  
})
  .then(({_id}) => db.ParkingLot.findOneAndUpdate({locationId: 8}, { $push: { drivers: _id } }))
  .then(dbParkingLot => {
    console.log(dbParkingLot);
  })
  .catch(err => {
    console.log(err);
  });

  db.Driver.create({
  
    email: "clare@gmail.com",
    googleId: "327583945946",
    name: "Nini Wang"
    
  })
    .then(({_id}) => db.ParkingLot.findOneAndUpdate({locationId: 3}, { $push: { drivers: _id } }))
    .then(dbParkingLot => {
      console.log(dbParkingLot);
    })
    .catch(err => {
      console.log(err);
    });  


