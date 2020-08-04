import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

import { history } from "./history";
import Streets from "./pages/Streets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

import API from "./utils/API";
import "./App.css";

function App(props) {
  

  const [loggedInDriver, setLoggedInDriver] = useState({}); 
  const [isLoggedin, setLoggedin] = useState(false);

  
  
  useEffect(() => {
   
  }, [loggedInDriver])


  function login(response) {
    
    console.log("Logged In!");
    API.createDriver({
      "email": response.profileObj.email,
      "googleId": response.googleId,
      "name": response.profileObj.name
    })
    .then(res => {
      
      const {data} = res;

      
      setLoggedInDriver({
        _id: data._id,
        email: data.email,
        googleId: data.googleId,
        name: data.name
      })
      console.log(loggedInDriver);
    
    })
      // .then(() => window.location.href = '/streets')
      .then(() => {history.push("/streets")})
  }

  
  const logout = (response) => {
    console.log(response);
    console.log("Logged Out!");
    window.location.href = '/';
  }

  return (
    <div>
      <Router>
          <div>
              <Switch>
              {isLoggedin ? (<Route to={{pathname: "/streets", state: loggedInDriver}}/>) : null}
              <Route exact path={["/", "/login"]}>
                <div>

                  <nav className="login-nav">
                  ParCheck
                  </nav>
                  <h1 className="greeting">Hello, drivers!</h1>
        
                  
                  <p className="instruction">Log in using your google account below.</p>
                  <GoogleLogin 
                  className="google-login"
                  clientId="919114887931-k83vibb36stoj0m8944gnvia8u48ivc3.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={login}
                  isSignedIn={true}
                  onFailure={login}
                  cookisePolicy={"single_host_origin"}
                  />
                  <img src="login-img.jpg" alt="parking" className="login-img"/>
                </div>
              
                {document.getElementById("googleButton")}
              </Route>

              <Route exact path="/streets" >
                {console.log("hello")}
                {console.log(loggedInDriver)}
                <nav className="login-nav">
                <Link className="nav-text" to="/streets" >
                  ParCheck
                </Link>
                </nav>
                <Streets driver={JSON.stringify(loggedInDriver)}/>
                <br></br>
                <div className="logout-container">
                  <h5 className="logout-instruction">You can log out here.</h5>
                  <GoogleLogout 
                    className="logout-button"
                    clientId="919114887931-k83vibb36stoj0m8944gnvia8u48ivc3.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                    />
                  {document.getElementById("googleButton")}
                </div>
        
              </Route>
              <Route exact path="/streets/:id">
                <nav className="login-nav">
                <Link className="nav-text" to="/streets" >
                  ParCheck
                </Link>
                </nav>
                <Detail driver={loggedInDriver}/>
              </Route>
              <Route>
                  <NoMatch />
              </Route>
              
              </Switch>
          </div>


          
        </Router>
        
        
      </div>
    
  );
}

export default App;
