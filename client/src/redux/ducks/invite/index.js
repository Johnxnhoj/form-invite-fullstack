import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
// import { Action } from "rxjs/internal/scheduler/Action"

const GET_RANDOM = "invite/GET_RANDOM"
const SET_GOING = "invite/SET_GOING"
const SET_NOTGOING = "invite/SET_NOTGOING"

const initialState = {
  random: {},
  going: [],
  notgoing: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM:
      return { ...state, random: action.payload }
    case SET_GOING:
      return { ...state, going: [...state.going, action.payload] }
    case SET_NOTGOING:
      return { ...state, notgoing: [...state.notgoing, action.payload] }
    default:
      return state
  }
}

function getRandom() {
  return dispatch => {
    axios.get("/invite/random").then(resp => {
      dispatch({
        type: GET_RANDOM,
        payload: resp.data
      })
    })
  }

  // return dispatch => {
  //   axios.get("https://randomuser.me/api/").then(resp => {
  //     const user = resp.data.resilts[0]

  //     const payload = {
  //       fname: user.name.first,
  //       lname: user.name.last,
  //       phone: user.phone,
  //       picture: user.picture.large,
  //       email: user.email
  //     }
  //     dispatch({
  //       type: GET_RANDOM,
  //       payload: payload
  //     })
  //   })
  // }
}
function setGoing(user) {
  return dispatch => {
    axios.post("/invite/going", { user }).then(resp => {
      dispatch({
        type: SET_GOING,
        payload: resp.data
      })
      dispatch(getRandom())
    })
  }
}
function setNotGoing(user) {
  return dispatch => {
    axios.post("/invite/notgoing", { user }).then(resp => {
      dispatch({
        type: SET_NOTGOING,
        payload: resp.data
      })
      dispatch(getRandom())
    })
  }
}
export const useInvite = function() {
  const going = useSelector(appState => appState.inviteState.going)
  const notgoing = useSelector(appState => appState.inviteState.notgoing)
  const random = useSelector(appState => appState.inviteState.random)
  const dispatch = useDispatch()
  const go = user => dispatch(setGoing(user))
  const nogo = user => dispatch(setNotGoing(user))
  const get = () => dispatch(getRandom())

  useEffect(() => {
    get()
  }, [])
  return { going, notgoing, random, go, nogo, get }
}

// // action definitions
// const GET_USERS = "users/GET_USERS";

// // initial state
// const initialState = {
//   users: []
// };

// // reducer
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USERS:
//       return { ...state, users: action.payload };
//     default:
//       return state;
//   }
// };

// // action creators
// const getUsers = () => {
//   return dispatch => {
//     axios.get("https://randomuser.me/api/?results=1").then(resp => {
//       dispatch({
//         type: GET_USERS,
//         payload: resp.data.results
//       });
//     });
//   };
// };
// const sendGoing = user => {
//   return dispatch => {
//     axios.post("/users/going", { user }).then(resp => {
//       dispatch(getUsers());
//     });
//   };
// };

// // custom hooks
// export function useUsers() {
//   const users = useSelector(appState => appState.userState.users);
//   const dispatch = useDispatch();
//   const going = user => dispatch(sendGoing(user));

//   useEffect(() => {
//     dispatch(getUsers());
//   }, [dispatch]);

//   return { users, going };
// }
