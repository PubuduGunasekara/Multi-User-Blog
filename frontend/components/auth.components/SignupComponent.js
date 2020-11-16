import { Input, Button } from "reactstrap";
import { useState } from "react";
import { preSignup, getCookie } from "../../actions/auth.action";
import React from "react";

/**
 * completed!
 */
const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;
  const token = getCookie("token");

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    preSignup(user, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">loading...</div> : "";

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";

  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            value={name}
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Type name"
          />
        </div>
        <div className="form-group">
          <Input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type email"
          />
        </div>
        <div className="form-group">
          <Input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Type password"
          />
        </div>
        <div>
          <Button className="btn btn-lg btn-block">Signup</Button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
    </React.Fragment>
  );
};

export default SignupComponent;
