const initialState = {
    SignUpRes: ""
  }
  
  const signUpReduscer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_SIGNUP_RESPONSE':
        return { ...state, SignUpRes: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default signUpReduscer;