import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import UserCardsComponent from "../../components/userCard/userCard.component";
import { cloneDeep } from "lodash";
import { toast } from "react-toastify";
import EditBizCardComponent from "../../components/editbizcard/editBizCard.component";

const UserCardsPage = () => {
  const [userCards, setUserCards] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    getAllCards();
  }, []);

  const handle_Edit_Card = (_id, updatedCard) => {
    console.log(updatedCard);
    axios
      .put(`/cards/${_id}`, updatedCard)
      .then((res) => {
        let newArrCards = cloneDeep(userCards);
        let cardItemIndex = newArrCards.findIndex((item) => item._id === _id);
        if (cardItemIndex !== -1) {
          newArrCards[cardItemIndex] = { ...cloneDeep(updatedCard), _id };
          setUserCards(newArrCards);
        }
        setDataToEdit(null);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const onEditCard = (id) => {
    let temp = cloneDeep(userCards.find((card) => card._id === id));
    setDataToEdit(temp);
  };
  const onCancelEdit = () => {
    setDataToEdit(null);
  };

  const onDeleteCard = (id) => {
    axios
      .delete(`/cards/${id}`)
      .then((res) => {
        let newArray = cloneDeep(userCards);
        setUserCards(newArray.filter((card) => card._id !== id));
      })
      .catch((error) => {
        console.log(error);
        toast.error("cannot delete the selected card", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const getAllCards = () => {
    axios
      .get(`/cards`)
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) toast("You Have No Cards");
        else setUserCards(res.data);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("cannot get cards", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const renderRowsFromArr = (arrOfCards) => {
    let newArr = [];
    let inArr = [];
    let length = arrOfCards.length;
    for (let i = 0; i < length; i++) {
      if (i > 0 && i % 3 === 0) {
        newArr = [
          ...newArr,
          <div className="row" key={i + "cards row"}>
            {[...inArr]}
          </div>,
        ];
        inArr = [];
      }
      inArr = [
        ...inArr,
        <div key={arrOfCards[i]._id} className="col">
          <UserCardsComponent
            card={arrOfCards[i]}
            onDeleteCard={onDeleteCard}
            onEditCard={onEditCard}
          ></UserCardsComponent>
        </div>,
      ];
    }
    if (inArr.length > 0) {
      newArr = [
        ...newArr,
        <div className="row" key={length + "cards row"}>
          {[...inArr]}
        </div>,
      ];
    }
    return newArr;
  };
  return (
    <Fragment>
      <h1 className="text-center">My Business Cards</h1>
      {renderRowsFromArr(userCards)}
      {dataToEdit && (
        <EditBizCardComponent
          onCancelEdit={onCancelEdit}
          onEditCard={handle_Edit_Card}
          {...dataToEdit}
        ></EditBizCardComponent>
      )}
    </Fragment>
  );
};
export default UserCardsPage;
