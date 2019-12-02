import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Invite from "./Invite"
import Going from "./Going"
import NotGoing from "./NotGoing"

function App(props) {
  return (
    <Router>
      <div>
        <ul className="Nav">
          <li>
            <Link to="/">Invite</Link>
          </li>
          <li>
            <Link to="/Going">Going</Link>
          </li>
          <li>
            <Link to="/NotGoing">Not Going</Link>
          </li>
        </ul>
        <Route exact path="/" component={Invite} />
        <Route path="/Going" component={Going} />
        <Route path="/NotGoing" component={NotGoing} />
      </div>
    </Router>
  )
}

export default App
