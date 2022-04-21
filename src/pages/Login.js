import React from "react";
import loginImage from "../assets/img/login.svg";
import Button from "../components/Button";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import classes from "../styles/Login.module.css";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} />
        {/* <form className="login form" action="#">
          <div className="textInput">
            <input type="text" placeholder="Enter email" />
            <span className="material-icons-outlined"> alternate_email </span>
          </div>

          <div className="textInput">
            <input type="password" placeholder="Enter password" />
            <span className="material-icons-outlined"> lock </span>
          </div>

          <button className="button">
            <span>Submit now</span>
          </button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </form> */}
        <Form className={classes.login}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button text="Submit now" />
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
