import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Streets from "./pages/Streets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import API from "./utils/API";
import "./App.css";

function App() {
  const [loggedInDriver, setLoggedInDriver] = useState({}); 
  const [isLoggedin, setLoggedin] = useState(false);

  useEffect(() => {

    console.log(loggedInDriver);
    
  }, [loggedInDriver])

  const login = (response) => {
    console.log(response);
    console.log("Logged In!");
    API.createDriver({
      "email": response.profileObj.email,
      "googleId": response.googleId,
      "name": response.profileObj.name
    })
    .then(res => {
      console.log(res.data._id);
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
      .then(() => {setLoggedin(true); console.log(loggedInDriver)})
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
              {isLoggedin ? (<Redirect to={{pathname: "/streets", state: loggedInDriver}}/>) : null}
              <Route exact path={["/", "/login"]}>
                <div className="jumbotron">
                  <h1 className="display-4">Hello, drivers!</h1>
        
                  <hr className="my-4" />
                  <p>Log in using your google account below.</p>
                  <GoogleLogin 
                  clientId="919114887931-k83vibb36stoj0m8944gnvia8u48ivc3.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={login}
                  isSignedIn={true}
                  onFailure={login}
                  cookiePolicy={"single_host_origin"}
                  />
                </div>
              
                {document.getElementById("googleButton")}
              </Route>

              <Route exact path="/streets">
                <Nav />
                <Streets driver={loggedInDriver}/>
                <br></br>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">You can log out here.</h5>
                    <GoogleLogout 
                      clientId="919114887931-k83vibb36stoj0m8944gnvia8u48ivc3.apps.googleusercontent.com"
                      buttonText="Logout"
                      onLogoutSuccess={logout}
                      />
                    {document.getElementById("googleButton")}
                  </div>
                </div>
                  
                  
              </Route>
              <Route exact path="/streets/:id">
                <Nav />
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
