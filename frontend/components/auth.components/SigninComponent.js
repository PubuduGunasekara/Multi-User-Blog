import { Input, Button } from "reactstrap";
import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth.action";
import Router from "next/router";
import Link from "next/link";

/**
 * completed!
 */
const SigninComponent = () => {
  /**
   * redirect the user if they already authenticated.
   */
  useEffect(() => {
    if (isAuth() && isAuth().role === 1) {
      Router.push(`/admin-panel/root-admin`);
    } else if (isAuth() && isAuth().role === 0) {
      Router.push(`/admin-panel/moderator`);
    }
  }, []);

  const [values, setValues] = useState({
    email: "pubudupraneeth21@gmail.com",
    password: "654321",
    error: "",
    loading: false,
    message: "",
  });

  const { email, password, error, loading, message } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        //authenticate
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin-panel/root-admin`);
          } else {
            Router.push(`/admin-panel/moderator`);
          }
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

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type your email"
          />
        </div>
        <div className="form-group">
          <Input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>
        <div>
          <button className="btn btn-lg btn-block btn-primary">Signin</button>
        </div>
      </form>
    );
  };

  return (
    <div>
      {showError()}
      {showLoading()}
      {showMessage()}
      {signinForm()}
      <br />
      <Link href="/admin-panel/auth/password/forgot">
        <a className="btn btn-outline-danger btn-sm">Forgot password</a>
      </Link>
    </div>
  );
};

export default SigninComponent;
