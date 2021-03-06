import React from "react";
import Jumbotron from "./components/Jumbotron";

import roommates from "./components/roommate";

import form from "./components/form";
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
          <Route exact path="/auth/google/redirect"/>
          <Route exact path="/" component={Jumbotron} />
          <Route exact path="/roommate" component={roommates} />
          <Route exact path="/form" component={form} />
          {/* <Route exact path="/profile" component={profile} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
