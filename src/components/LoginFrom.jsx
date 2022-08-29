import React from "react";
import { useState } from "react";
import "./LoginForm.css";

const LoginFrom = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  // * handlers
  const handleUserNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      userName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (values.userName && values.password && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div className="successAlert">
        {submitted && valid && (
          <div className="py-2 px-4 text-white rounded-lg absolute top-0 bg-green-500 success-message">
            Success! Thank you for registering
          </div>
        )}
      </div>

      <form onSubmit={handleRegister}>
        <div>
          <input
            id="user-name"
            className="form-field rounded-lg focus:outline-blue-500"
            type="text"
            placeholder="username"
            name="userName"
            value={values.userName}
            required
            onChange={handleUserNameInputChange}
          />
          <div className="w-auto h-4">
            {submitted && !values.userName && (
              <span id="email-error">Please enter a username</span>
            )}
          </div>
        </div>

        <div>
          <input
            id="email"
            className="form-field rounded-lg focus:outline-blue-500"
            type="text"
            placeholder="email"
            name="email"
            value={values.email}
            required
            onChange={handleEmailInputChange}
          />
          <div className="w-auto h-4">
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}
          </div>
        </div>

        <div>
          <input
            id="password"
            className="form-field rounded-lg focus:outline-blue-500"
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            required
            onChange={handlePasswordInputChange}
          />
          <div className="w-auto h-4">
            {submitted && !values.password && (
              <span id="email-error">Please enter a password</span>
            )}
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 my-2 rounded-lg focus:outline-none"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default LoginFrom;
