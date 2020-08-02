import React, { useState, useEffect } from "react";


import Search from "../components/Search/Search";

import API from "../utils/API";

import { List } from "../components/List";

import "./pages.css";

function Streets(props) {
  console.log(props);
  // Setting our component's initial state
  const [streets, setStreets] = useState([]);
  const [search, setSearch] = useState("");

 
  useEffect(() => {
    loadStreets()
  }, [])

  
  function loadStreets() {
    
    API.getStreets()
      .then(res => 
        setStreets(res.data)
      )
      .catch(err => console.log(err));
  };

  const onChange = (e) => {
    let search = e.target.value;
    console.log(search);
    setSearch(search);
  }

  


  return (
    <div>
      <div className="streets-greeting-container">
        <div>
          <p className="question">Where do you want to park? </p>
          <p>Use the search box below to find the street.</p>
        </div>
        
        <img src="transportation.png" alt="car" className="transportation"/>
      </div>
      <Search onChange={onChange}/>
      <br></br>
      <List search={search} streets={streets}/>
    </div>
    
  );
  }


export default Streets;
