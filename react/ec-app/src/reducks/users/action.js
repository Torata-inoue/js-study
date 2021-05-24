export const SIGN_IN = "SING_IN";

export const signInAction = (userState) => {
  return {
    type: SIGN_IN,
    payload: {
      inSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
}

export const SIGN_OUT = "SING_OUT";

export const signOutAction = (userState) => {
  return {
    type: SIGN_OUT,
    payload: {
      inSignedIn: false,
      uid: "",
      username: ""
    }
  }
}