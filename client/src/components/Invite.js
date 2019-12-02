import React from "react"
import { useInvite } from "../hooks"
// import Going from "./Going"
// import NotGoing from "./NotGoing"

export default props => {
  const { random, go, nogo, going, notgoing } = useInvite()

  return (
    <div className="Container-0">
      <p>
        Going: {going.length} Not Going: {notgoing.length}
      </p>
      <div className="person">
        <p>
          <img className="Pic" src={random.picture} />
        </p>
        <div className="info">
          <p>
            Name:{random.fname} {random.lname}
          </p>
          <p>Phone: {random.phone}</p>
          <p>Email: {random.email}</p>
        </div>
        <button className="Yes" onClick={e => go(random)}>
          Go
        </button>
        <button className="No" onClick={e => nogo(random)}>
          Not Go
        </button>
      </div>
    </div>
  )
}
