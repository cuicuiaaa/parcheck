const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/parcheck"
);

const date = new Date().getTime();

db.Street.create({
  name: "88-90 Houston Rd - Kingsford"
})

db.Street.create({
  name: "King St - Sydney"
})

db.Street.create({
  name: "Anzac Pde & Sturt St - Kingsford"
})

db.Street.create({
  name: "Abercrombie Lane - Sydney"
})

db.Street.create({
  name: "Bathurst Street - Sydney"
})

db.Street.create({
  name: "Clement Ln - Sydney"
})

db.Street.create({
  name: "Darling Drive - Sydney"
})

db.Street.create({
  name: "Elizabeth Street - Sydney"
})

db.ParkingLot.create({
  locationId: 1,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "Elizabeth Street - Sydney"
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
  name: "Elizabeth Street - Sydney"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 3,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
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
    name: "88-90 Houston Rd - Kingsford"
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
    name: "Abercrombie Lane - Sydney"
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
    name: "88-90 Houston Rd - Kingsford"
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
  name: "Elizabeth Street - Sydney"
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
  name: "Abercrombie Lane - Sydney"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 9,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "Elizabeth Street - Sydney"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 10,
  occupied: true
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "Elizabeth Street - Sydney"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 11,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 12,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 13,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 14,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 15,
  occupied: false
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "Elizabeth Street - Sydney"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 16,
  occupied: true
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "Anzac Pde & Sturt St - Kingsford"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 17,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "Bathurst Street - Sydney"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 18,
  occupied: true
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "Elizabeth Street - Sydney"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 19,
  occupied: true
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 20,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 21,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "Elizabeth Street - Sydney"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 22,
  occupied: false
})
  .then(({_id}) => db.Street.findOneAndUpdate({
    name: "88-90 Houston Rd - Kingsford"
  }, { $push: { parkingLots: _id } }))
  .then(dbStreet => {
    console.log(dbStreet);
  })
  .catch(err => {
    console.log(err);
  });

db.ParkingLot.create({
  locationId: 23,
  occupied: false
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "King St - Sydney"
}, { $push: { parkingLots: _id } }))
.then(dbStreet => {
  console.log(dbStreet);
})
.catch(err => {
  console.log(err);
});

db.ParkingLot.create({
  locationId: 24,
  occupied: true
})
.then(({_id}) => db.Street.findOneAndUpdate({
  name: "Anzac Pde & Sturt St - Kingsford"
}, { $push: { parkingLots: _id  } }))
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


