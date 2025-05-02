import React, { useState, useReducer, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthContext from "../context/authContext";
// import { ReduceCapacityRounded } from "@mui/icons-material";


const reducer = (state,action) => {
  if (action.type === "EMAIL_INPUT") {
  return {...state, emailValue: action.payload };
}
if (action.type === "PASS_INPUT") {
  return {...state, passwordValue: action.payload}; 
}
return { emailValue: "", passwordValue: "" };

};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  
  const [state, dispatch] = useReducer(reducer, {
   emailValue: "",
   passwordValue: "",

  });

  const {emailValue: email, passwordValue: password } = state;

    useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDILITY");
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);

    return () => {
  console.log("CLEANUP HERE");
  clearTimeout(identifier);
    };
}, [email, password]);

const emailChangeHandler = (e) => {
    dispatch({type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatch({type: "PASS_INPUT", payload: e.target.value });
  };

  // dispatch(action)

  // useEffect(() => {
  //   console.log("effect running");
  // }, [password])

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("CHECKING FOR FORM VALIDILITY");
  //     setFormIsValid(email.includes("@") && password.trim().length > 6);
  //   }, 500);

  //   return () => {
  //     console.log("CLEANUP FUNCTION BEFORE NEXT SIDE EFFECT");
  //     clearTimeout(indentifier);
  //   };
  // }, [email, password]);

  // const emailChangeHandler = (e) => {
  //   setEmail(e.target.value);
  //   setFormIsValid(email.includes("@") && password.trim().length > 6);
  // };

  // const passwordChangeHandler = (e) => {
  //   setPassword(e.target.value);
  //   setFormIsValid(email.includes("@") && password.trim().length > 6);
  // };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email: ",state.emailValue);
    console.log("Entered Password: ", state.passwordValue);
      ctx.onLogin(state.emailValue, state.passwordValue);
  };

  // const signOut = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("isLoggedIn");

  // };

  return (
    <div className="login">
      {/* {isLoggedIn && (
        <p>
          You are logged in <button onClick={signOut}>Sign out</button>
        </p>
      )} */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1920px-Amazon_2024.svg.png"
          alt="Amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h5>Sign In</h5>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={emailChangeHandler} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button type="submit" className="login_SignInButton" onChange={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By Signing in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button className="login_RegisterButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
