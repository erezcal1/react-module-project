import { useEffect, useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useAfterLogin from "../../hooks/useAfterLogin.hook";
import loginSchema from "../../validation/login.validate";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show_Err_Msg, setShowErrMsg] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const afterLogin = useAfterLogin();

  useEffect(() => {
    console.log(location);
    if (location.state && location.state.email && location.state.password) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, []);

  useEffect(() => {
    if (
      email !== "" &&
      password !== "" &&
      location.state &&
      location.state.email &&
      location.state.password
    ) {
      handle_Submit();
    }
  }, [email, password]);

  const handle_Email_Change = (event) => {
    setEmail(event.target.value);
  };
  const handle_Password_Change = (event) => {
    setPassword(event.target.value);
  };
  const handle_Submit = (event) => {
    if (event) {
      event.preventDefault();
    }
    const validated_Value = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validated_Value;
    if (error) {
      toast.error("🦄 Invalid Email Or Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      axios
        .post("/auth", {
          email,
          password,
        })
        .then(({ data }) => {
          setShowErrMsg(false);
          afterLogin(data.token);
          history.push("/");
        })
        .catch((err) => {
          setShowErrMsg(true);
          console.log("error from axios", err);
        });
    }
  };
  return (
    <form onSubmit={handle_Submit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handle_Email_Change}
        />
        {!email && (
          <div id="emailHelp" className="form-text">
            please enter your email address
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={handle_Password_Change}
        />
        {password.length < 6 && (
          <div id="emailHelp" className="form-text">
            please enter your password with at least 6 digits
          </div>
        )}
      </div>
      {show_Err_Msg && (
        <div className="alert alert-danger" role="alert">
          Email or Password is incorrect
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
