import axios from "axios";

export default {
  getStreets: function() {
    return axios.get("/api/streets");
  },

  getStreet: function(id) {
    return axios.get("/api/streets/" + id);
  },

  updateParkingLot: function(id, data) {
    
    return axios.put("/api/streets/" + id, data);
  },

  createDriver: function(data) {
    return axios.post("/api/drivers", data)
  }
};
