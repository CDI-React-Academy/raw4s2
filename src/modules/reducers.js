import { ACTION_TYPES } from "./actions";

export function rootReducer(state, action) {
  let newState = JSON.parse(JSON.stringify(state));
  console.log("Olde State", newState, action);

  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      /*
        Make API call to server with credentials
        on success, login = true
        on failure, login = false
        optionaly show error
        */
      newState.auth.isLoggedIn = true;
      newState.auth.name = action.payload.name;
      break;
    case ACTION_TYPES.LOGOUT:
      newState.auth.isLoggedIn = false;
      newState.auth.name = "";
      break;
    default:
      break;
  }
  console.log(newState);
  newState.isInit = true;
  return newState;
}
