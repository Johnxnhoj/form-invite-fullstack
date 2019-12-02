import React from "react"
import { useInvite } from "../hooks"

export default props => {
  const { notgoing } = useInvite()

  return (
    <div className="Container-1">
      {notgoing.map(person => (
        <div key={"notgoing" + person.id} className="person">
          <p>
            <img className="Pic" src={person.picture} />
          </p>
          <p>
            Name: {person.fname} {person.lname}
          </p>
          <p>Phone: {person.phone}</p>
          <p>Email: {person.email}</p>
        </div>
      ))}
    </div>
  )
}
