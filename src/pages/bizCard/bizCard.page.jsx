import { Fragment, useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import cardsSchema from "../../validation/bizCard.validation";
import { useHistory } from "react-router-dom";

const CardsPage = () => {
  const [biz_Name, setBizName] = useState("");
  const [biz_Description, setBizDescription] = useState("");
  const [biz_Address, setBiz_Address] = useState("");
  const [biz_Phone, setBiz_Phone] = useState("");
  const [biz_Image, setBiz_Image] = useState("");

  const history = useHistory();

  const handle_biz_Name_Change = (event) => {
    setBizName(event.target.value);
  };
  const handle_biz_Description_Change = (event) => {
    setBizDescription(event.target.value);
  };
  const handle_biz_Address = (event) => {
    setBiz_Address(event.target.value);
  };
  const handle_biz_Phone_Change = (event) => {
    setBiz_Phone(event.target.value);
  };
  const handle_biz_Image_Change = (event) => {
    setBiz_Image(event.target.value);
  };
  const handle_Submit = (event) => {
    event.preventDefault();
    const validated_Value = Joi.validate(
      { biz_Name, biz_Description, biz_Address, biz_Phone },
      cardsSchema,
      { abortEarly: false }
    );
    const { error } = validated_Value;
    if (error) {
      console.log(error);
      for (let item of error.details) {
        toast.error(`${item.message.replaceAll('"', "")}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      let dateToSend = {
        biz_Name,
        biz_Description,
        biz_Address,
        biz_Phone,
      };
      if (biz_Image) {
        dateToSend.biz_Image = biz_Image;
      }
      axios
        //can also use .post("/users")
        .post("/cards", dateToSend)
        .then((res) => {
          console.log(res.data);
          toast.success("🦄 Card Created", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => console.log("error form axios", err));
    }
  };
  return (
    <Fragment>
      <h1 className="text-center">Create Business Card</h1>
      <form className="row g-3" onSubmit={handle_Submit}>
        <div className="col-md-6">
          <label htmlFor="input_biz_Name" className="form-label">
            Card Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Name"
            value={biz_Name}
            onChange={handle_biz_Name_Change}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="input_biz_Description" className="form-label">
            Card Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Description"
            value={biz_Description}
            onChange={handle_biz_Description_Change}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="input_biz_Address" className="form-label">
            Card Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Address"
            value={biz_Address}
            onChange={handle_biz_Address}
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="input_biz_Phone" className="form-label">
            Card Phone:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Phone"
            value={biz_Phone}
            onChange={handle_biz_Phone_Change}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="input_biz_Image" className="form-label">
            Card Image Not required!!
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Image"
            value={biz_Image}
            onChange={handle_biz_Image_Change}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default CardsPage;
