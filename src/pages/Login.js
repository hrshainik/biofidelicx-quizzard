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
        <Form className={classes.login}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>Submit Now</Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
