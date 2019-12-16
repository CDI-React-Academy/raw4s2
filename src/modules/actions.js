export function Login(name) {
  return {
    type: ACTION_TYPES.LOGIN,
    payload: name
  };
}
export function LoginSuccess(user) {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: user
  };
}

export function Logout() {
  return {
    type: ACTION_TYPES.LOGOUT
  };
}

export const ACTION_TYPES = {
  LOGIN: "login",
  LOGOUT: "logout",
  LOGIN_SUCCESS: "login-success"
};
