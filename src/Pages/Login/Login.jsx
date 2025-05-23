import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [loginstate, setLoginState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading]=useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (loginstate === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false)
  };
  return (
    loading? <div className="spinner">
      <img src={spinner} alt="loading spinner" />
    </div> :
    <div className="login">
      <img src={logo} alt="Netflix logo" />
      <div className="login-form">
        <h1>{loginstate}</h1>
        <form>
          {loginstate === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : null}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {loginstate}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="rem" />
              <label htmlFor="rem">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {loginstate === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setLoginState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={() => setLoginState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
