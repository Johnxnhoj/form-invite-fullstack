import React from "react";
import { useUsers } from "../hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Profile";
import Going from "./Going";
import NotGoing from "./NotGoing";

function App(props) {
  const { users } = useUsers();

  console.log(users);

  return (
    <Router>
      <div>
        <Route exact path="/" component={Profile} />
        <Route exact path="/Going" component={Going} />
        <Route exact path="/NotGoing" component={NotGoing} />
      </div>
    </Router>
  );
}

export default App;
