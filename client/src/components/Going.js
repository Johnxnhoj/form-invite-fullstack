import React from "react"
import { useInvite } from "../hooks"

export default props => {
  const { going } = useInvite()

  return (
    <div className="Container-1">
      {going.map(person => (
        <div key={"going" + person.id} className="person">
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
