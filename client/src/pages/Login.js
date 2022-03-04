import React from "react";

function Login() {
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

              <div className="login-form">
                <div className="form-panel">
                  <div className="field">
                    <label>Email</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="control">
                      <input
                        type="password"
                        className="input"
                        placeholder="Enter your password"
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
                  <a className="button is-solid primary-button is-fullwidth raised">
                    Login
                  </a>
                </div>

                <div className="account-link has-text-centered">
                  <a href="/signup.html">Don't have an account? Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
