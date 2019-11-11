import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        

        <Jumbotron />
        <switch>
          <Route path="/auth/google">
            <google-btn/>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
