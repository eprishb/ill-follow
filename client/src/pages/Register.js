import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router";

function Register() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const pwConfirmation = useRef();
	const navigate = useNavigate();

	const handleClick = async (e) => {
    e.preventDefault();
		if(pwConfirmation.current.value !== password.current.value){
			pwConfirmation.current.setCustomValidity("Passwords do not match");
		} else {
			const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

			console.log(user)

			try {
				await axios.post("api/auth/register", user);
				navigate("/login");
			} catch(err) {
				console.log(err)
			}
		}
  };

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

              <form className="login-form" onSubmit={handleClick}>
                <div className="form-panel">
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      <div className="field">
                        <label>Name</label>
                        <div className="control">
                          <input
                            type="text"
														required
                            className="input"
                            placeholder="Enter your Name"
														ref={username}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-12">
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
                    </div>
                    <div className="column is-12">
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
                    </div>
                    <div className="column is-12">
                      <div className="field">
                        <label>Confirm Password</label>
                        <div className="control">
                          <input
                            type="password"
														required
                            className="input"
                            placeholder="Confirm your password"
														ref={pwConfirmation}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buttons mt-2">
                  <button className="button is-solid primary-button is-fullwidth raised" type="submit">
                    Create Account
                  </button>
                </div>

                <div className="account-link has-text-centered">
                  <a href="/login-boxed.html">Have an account? Sign In</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
