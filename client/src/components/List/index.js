import React from "react";
import "./style.css";

export function List(props) {
  console.log(props.search);
  
  let filterdData = 
  props.streets.filter(street => street.name.toLowerCase().includes( props.search.toLowerCase() ));

  console.log(filterdData);

  if (props.search === "") {
    filterdData = props.streets;
  } 

  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {filterdData.map(street => {
          return (
            
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {street.name}
              <span className="badge">
                <a href={"/streets/" + street._id}>View Vacancies</a>
              </span>
            </li>
            
            
          )
        })}
      </ul>
    </div>
  );
}
