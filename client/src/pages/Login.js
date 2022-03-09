import React, { useContext, useRef } from "react";
import { Link } from 'react-router-dom';
import { loginCall } from "../apiCalls";
import { AuthContext }  from "../context/AuthContext";

function Login() {
	const email = useRef();
	const password = useRef();
	const {user, isFetching, error, dispatch } = useContext(AuthContext);

	const handleClick = (e) => {
		e.preventDefault();
		loginCall({ email: email.current.value , password: password.current.value }, dispatch);
	}

	// TODO: Add loading bar up top for when user logs in

  return (
    <div>
      <div className="fake-nav">
        <a href="/" className="logo">
          <img
            className="light-image"
            src="assets/img/logo/friendkit-bold.svg"
            width="112"
            height="28"
            alt=""
          />
          <img
            className="dark-image"
            src="assets/img/logo/friendkit-white.svg"
            width="112"
            height="28"
            alt=""
          />
        </a>
      </div>

      <div className="container">
        <div className="login-container">
          <div className="columns is-vcentered">
            <div className="column is-6 image-column">
              <img
                className="light-image login-image"
                src="assets/img/illustrations/login/login.svg"
                alt=""
              />
              <img
                className="dark-image login-image"
                src="assets/img/illustrations/login/login-dark.svg"
                alt=""
              />
            </div>
            <div className="column is-6">
              <h2 className="form-title">Welcome Back</h2>
              <h3 className="form-subtitle">
                Enter your credentials to sign in.
              </h3>

              <form className="login-form" onSubmit={handleClick}>
                <div className="form-panel">
                  <div className="field">
                    <label>Email</label>
                    <div className="control">
                      <input
                        type="email"
												required
                        className="input"
                        placeholder="Enter your email address"
												ref={email}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="control">
                      <input
                        type="password"
												required
												minLength="6"
                        className="input"
                        placeholder="Enter your password"
												ref={password}
                      />
                    </div>
                  </div>
                  <div className="field is-flex">
                    <div className="switch-block">
                      <label className="f-switch">
                        <input type="checkbox" className="is-switch" />
                        <i></i>
                      </label>
                      <div className="meta">
                        <p>Remember me?</p>
                      </div>
                    </div>
                    <a>Forgot Password?</a>
                  </div>
                </div>

                <div className="buttons">
                  <button className="button is-solid primary-button is-fullwidth raised" type="submit">
                    {isFetching ? "Loading" : "Login"}
                  </button>
                </div>

                <div className="account-link has-text-centered">
                  <Link to="/register">Don't have an account? Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
