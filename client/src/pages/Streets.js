import React, { useState, useEffect } from "react";

import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search/Search";

import API from "../utils/API";

import { List } from "../components/List";

import "./pages.css";

function Streets(props) {
  // Setting our component's initial state
  const [streets, setStreets] = useState([]);
  const [search, setSearch] = useState("");

 
  useEffect(() => {
    loadStreets()
  }, [])

  
  function loadStreets() {
    console.log(props);
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
      <Jumbotron driver={props.driver}/>
      <Search onChange={onChange}/>
      <br></br>
      <List search={search} streets={streets}/>
    </div>
    
  );
  }


export default Streets;
