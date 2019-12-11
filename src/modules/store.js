
import { createStore } from 'redux';

function rootReducer(state, action) {
  let newState = JSON.parse(JSON.stringify(state));
  console.log('Olde State', newState, action);

  switch(action.type) {
    case "Login": 
      newState.auth.isLoggedIn = true;
      newState.auth.name = action.payload;
      break;
    case "Logout": 
      newState.auth.isLoggedIn = false;
      newState.auth.name = ''
      break;
    default: 
    break;
  }
  console.log(newState);
  newState.isInit = true;
  return newState;
}

export const store = createStore(rootReducer, { auth: {
      isLoggedIn: false,
      name: "",
      role: 'customer'
    },
    isInit: false,
  });