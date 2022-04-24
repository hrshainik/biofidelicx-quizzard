import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../assets/img/login_re_4vu2.svg";
import Button from "../components/Button";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
      setError("Failed to login!");
    }
  };

  return (
    <>
      <h1>Welcome Back!</h1>
      <div className="column">
        <Illustration image={loginImage} />
        <Form className={classes.login} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button disabled={loading} type="submit">
            Submit Now
          </Button>

          {error && <p className="error">{error}</p>}

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
