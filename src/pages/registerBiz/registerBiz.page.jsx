import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import registerSchema from "../../validation/userRegister.validation";
import { toast } from "react-toastify";
import Joi from "joi-browser";

const RegisterBizPage = () => {
  const [first_Name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_Password, setConfirmPassword] = useState("");
  const [show_Pass_Err_Msg, setShowPassErrMsg] = useState(false);
  const [emailExist, setEmailExist] = useState(false);

  const history = useHistory();

  const handle_FirstName_Change = (event) => {
    setFirstName(event.target.value);
  };
  const handle_Email_Change = (event) => {
    setEmail(event.target.value);
  };
  const handle_Password_Change = (event) => {
    setPassword(event.target.value);
  };
  const handle_ConfirmPassword_Change = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handle_Submit = (event) => {
    event.preventDefault();
    if (password !== confirm_Password) {
      setShowPassErrMsg(true);
    }
    const validated_Value = Joi.validate(
      { first_Name, email, password, confirm_Password },
      registerSchema,
      { abortEarly: false }
    );
    const { error } = validated_Value;
    if (error) {
      console.log(error.details);
      for (let item of error.details) {
        toast.error(
          `${item.message
            .replaceAll('"', "")
            .replaceAll("first_Name", "First Name")
            .replaceAll("confirm_Password", "Confirm Password")
            .replaceAll("one of [ref:password]", "the same as password")}`,
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    } else {
      if (password === confirm_Password) {
        axios
          .post("/users", {
            name: first_Name,
            email: email,
            password: password,
            biz: true,
          })
          .then((res) => {
            console.log(res.data);
            history.push("/login", { email: email, password: password });
          })
          .catch((err) => {
            console.log("error form axios", err);
            if (err.response.data.message === "Email already exists") {
              setEmailExist(true);
            }
          });
      }
    }
  };
  return (
    <form className="row g-3" onSubmit={handle_Submit}>
      <h1>Business Registration</h1>
      <div className="col-md-6">
        <label htmlFor="input_FirstName" className="form-label">
          Business Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="input_FirstName"
          value={first_Name}
          onChange={handle_FirstName_Change}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="input_Email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="input_Email"
          value={email}
          onChange={handle_Email_Change}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="input_Password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="input_Password"
          value={password}
          onChange={handle_Password_Change}
        />
        {password.length < 8 && (
          <div id="emailHelp" className="form-text">
            please enter your password with at least 6 digits
          </div>
        )}
      </div>

      <div className="col-md-3">
        <label htmlFor="input_ConfirmPassword" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="input_ConfirmPassword"
          value={confirm_Password}
          onChange={handle_ConfirmPassword_Change}
        />
      </div>
      {show_Pass_Err_Msg && (
        <div className="alert alert-danger" role="alert">
          The Password and confirm Password must be the same
        </div>
      )}
      {emailExist && (
        <div className="alert alert-danger" role="alert">
          Email Already exist
        </div>
      )}
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};
export default RegisterBizPage;
