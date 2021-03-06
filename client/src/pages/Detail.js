import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../utils/API";

import "./pages.css";


function Detail(props) {
  const [street, setStreet] = useState("");
  const [parkingLots, setParkingLots] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    loadStreet();
  }, [])

  function loadStreet() {
    console.log(props);
    API.getStreet(id)
      .then(res => {
        
        console.log(res);
        setStreet(res.data.name);
        setParkingLots(res.data.parkingLots);

      })
      .catch(err => console.log(err));
  }

  function onClick(id) {
    console.log(id);
    API.updateParkingLot(id, {
      
      occupied: true,
      driver: [{
        email: props.driver.email,
        name: props.driver.name,
        googleId: props.driver.googleId
      }]
    })
      .then(() => loadStreet())
      .catch(err => console.log(err));
  }


  function leave(id) {
    API.updateParkingLot(id, {
      
      occupied: false,
      driver: []
    })
      .then(() => loadStreet())
      .catch(err => console.log(err));
  }

  

  

  return (
    
    <div className="main-container">
      <h3 className="street-name">{street}</h3>
      <div className="parking-lot-container">
       
        {parkingLots.map(parkingLot => {
          if (parkingLot.occupied == true && parkingLot.drivers[0] !== props.driver._id) {
            return (
            <div className="parking-lot-occupied">
              <p className="lot-text">{`Location ID: ${parkingLot.locationId}`}</p>
              <img src="/occupied.png" alt="occupied" className="occupied-img"/>
              
              
              <p className="lot-text">{"Occupied.."}</p>
              
            </div>
          )
          } else if (parkingLot.occupied == true && parkingLot.drivers[0] == props.driver._id) {
            return (
              <div className="parking-lot-occupied">
                <p className="lot-text">{`Location ID: ${parkingLot.locationId}`}</p>
                <img src="/here.png" alt="here" className="here-img"/>
                <button type="button" className="btn" onClick={() => leave(parkingLot._id)}>{"Leave."}</button>
              </div>
            )
          }
          
          else {
            return (
            <div className="parking-lot-vacant">
              <p className="lot-text">{`Location ID: ${parkingLot.locationId}`}</p>
              <img src="/vacant.png" alt="vacant" className="vacant-img"/>
              <button type="button" className="btn" onClick={() => onClick(parkingLot._id)}>{"Park!!"}</button>
            </div>
          ) 
          }
          
        })}
      </div>
      
    </div>
      
    );
  }


export default Detail;
