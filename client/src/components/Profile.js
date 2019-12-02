// import React from "react";
// import { useUsers } from "../hooks";
// import { Link } from "react-router-dom";

// function Profile() {
//   const { users, going } = useUsers();

//   return (
//     <div className="Container-1">
//       <div className="Container0">
//         <div className="Count">
//           <Link className="link">Going:</Link>
//           <Link className="link">Not going: </Link>
//         </div>
//         <div className="Container">
//           {users.map(user => (
//             <div>
//               <div className="Pic">
//                 <img className="catfish" src={user.picture.medium} />
//               </div>
//               <div className="Info">
//                 <div>Name: {`${user.name.first} ${user.name.last}`} </div>
//                 <div>Phone: {user.phone}</div>
//                 <div>Email: {user.email}</div>
//               </div>
//               <div className="Confirm">
//                 <button className="No">&#10005;</button>
//                 <button className="Yes" onClick={e => going(user)}>
//                   &#10004;
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Profile;
