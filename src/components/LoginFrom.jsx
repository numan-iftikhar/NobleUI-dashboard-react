import React from "react";
import { useState } from "react";
import "./LoginForm.css";

const LoginFrom = () => {
  const [values, setValues] = useState({
    name: "",
    number: null,
    email: "",
    password: null,
    confirmPassword: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  // * handlers
  const handleName = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleNumber = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      number: event.target.value,
    }));
  };

  const handleEmail = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePassword = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleConfirmPassword = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      confirmPassword: event.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (values.name && values.password && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };




  return (
    <>
    {/* success alert */}
      <div className="successAlert">
        {submitted && valid && (
          <div className="py-2 px-4 text-white rounded-lg absolute top-0 bg-green-600 success-message">
            Success! Thank you for registering
          </div>
        )}
      </div>

    {/* login form */}
      <form onSubmit={handleRegister}>
        <div>
          <input
            id="name"
            className="form-field rounded-lg outline-none"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            required
            onChange={handleName}
          />
          <div className="w-auto h-4">
            {submitted && !values.name && (
              <span id="email-error">Please enter a name</span>
            )}
          </div>
        </div>

        <div>
          <input
            id="number"
            className="form-field rounded-lg outline-none"
            type="tel"
            placeholder="Number"
            name="number"
            value={values.number}
            required
            onChange={handleNumber}
          />
          <div className="w-auto h-4">
            {submitted && !values.name && (
              <span id="email-error">Please enter a name</span>
            )}
          </div>
        </div>

        <div>
          <input
            id="email"
            className="form-field rounded-lg outline-none"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            required
            onChange={handleEmail}
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
            className="form-field rounded-lg outline-none"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            required
            onChange={handlePassword}
          />
          <div className="w-auto h-4">
            {submitted && !values.password && (
              <span id="email-error">Please enter a password</span>
            )}
          </div>
        </div>

        <div>
          <input
            id="password"
            className="form-field rounded-lg outline-none"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={values.confirmPassword}
            required
            onChange={handleConfirmPassword}
          />
          <div className="w-auto h-4">
            {submitted && !values.password && (
              <span id="email-error">Please enter a password</span>
            )}
          </div>
        </div>

        <button
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 my-2 rounded-lg focus:outline-none"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default LoginFrom;
