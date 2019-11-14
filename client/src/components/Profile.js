import React from "react";
import { useUsers } from "../hooks";
import { Link } from "react-router-dom";

function Profile() {
  const { users } = useUsers();

  function handleGoing(users) {
    isgoing();
  }

  function handleNotGoing(users) {
    isNotGoing();
  }

  return (
    <div className="Container-1">
      <form onSubmit={handleSubmit}>
        <div className="Container0">
          <div className="Count">
            <Link className="link">Going:</Link>
            <Link className="link">Not going: </Link>
          </div>
          <div className="Container">
            {users.map(user => (
              <div>
                <div className="Pic">
                  <img className="catfish" src={user.picture.medium} />
                </div>
                <div className="Info">
                  <div>Name: {`${user.name.first} ${user.name.last}`} </div>
                  <div>Phone: {user.phone}</div>
                  <div>Email: {user.email}</div>
                </div>
                <div className="Confirm">
                  <button className="No" type="submit" handleNotGoing>
                    &#10005;
                  </button>
                  <button className="Yes" type="submit" handleGoing>
                    &#10004;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Profile;
