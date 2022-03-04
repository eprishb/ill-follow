import React from "react";

function Register() {
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
        <div className="login-container is-centered">
          <div className="columns is-vcentered">
            <div className="column">
              <h2 className="form-title has-text-centered">Hey there!</h2>
              <h3 className="form-subtitle has-text-centered">
                Lets create your account.
              </h3>

              <div className="login-form">
                <div className="form-panel">
                  <div className="columns is-multiline">
                    <div className="column is-6">
                      <div className="field">
                        <label>First Name</label>
                        <div className="control">
                          <input
                            type="text"
                            className="input"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="field">
                        <label>Last Name</label>
                        <div className="control">
                          <input
                            type="text"
                            className="input"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-12">
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
                    </div>
                    <div className="column is-12">
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
                    </div>
                    <div className="column is-12">
                      <div className="field is-flex">
                        <div className="switch-block">
                          <label className="f-switch">
                            <input type="checkbox" className="is-switch" />
                            <i></i>
                          </label>
                          <div className="meta">
                            <p>Subscribe to Newsletter?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buttons mt-2">
                  <a className="button is-solid primary-button is-fullwidth raised">
                    Create Account
                  </a>
                </div>

                <div className="account-link has-text-centered">
                  <a href="/login-boxed.html">Have an account? Sign In</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
