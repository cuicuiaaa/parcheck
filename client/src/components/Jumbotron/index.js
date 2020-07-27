import React from "react";

function Jumbotron(props) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1 className="display-4">Hey, drivers!</h1>
      <hr className="my-4" />
      <p>Where do you want to park? Use the search box below to find the street.</p>
    </div>
  );
}

export default Jumbotron;
