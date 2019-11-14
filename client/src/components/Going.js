import React from "react";
import { useUsers } from "../hooks";

function Going(props) {
  const { users } = useUsers();
  return (
    <div>
      <p>Going</p>
      <div className="Page"></div>
    </div>
  );
}
export default Going;
