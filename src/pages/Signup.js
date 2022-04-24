import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signupImage from "../assets/img/login_re_4vu2.svg";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Signup.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Password don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
      setError("Failed to create an account!");
    }
  };

  return (
    <>
      <h1>Welcome!</h1>
      <div className="column">
        <Illustration image={signupImage} />
        <Form className={classes.signup} onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Checkbox
            text="I agree to the Terms & Conditions"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
            required
          />

          <Button disabled={loading} type="submit">
            Submit Now
          </Button>

          {error && <p className="error">{error}</p>}

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
