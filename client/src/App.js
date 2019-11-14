import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import roommates from "./components/roommate";
// import queryString from "query-string";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";

function App() 
{
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/auth/google">
            <google-btn/>
          </Route>
          {/* <Route exact path="/auth/google/redirect"/> */}
          <Route exact path="/" component={Jumbotron} />
          <Route exact path="/roommate" component={roommates} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
