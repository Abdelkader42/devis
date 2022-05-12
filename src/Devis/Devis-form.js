import { _ } from "ajv";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import remove from "lodash/remove";
import createStore from "redux";
import { useNavigate } from "react-router";
import { connect, useDispatch } from "react-redux";
import { add } from "lodash";
import { useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  setItemList,
  setTotal,
} from "../redux/devisSlice";
import ClientForm from "./Client-form";
import ActionButtons from "./action-buttons";
import DevisFormInfo from "./devis-form-info";
import DevisInfo from "./devis-info";
import Tva from "./tva";

function DevisForm(props) {
  const [formState, setFormState] = useState({
    libelle: "",
    qte: "",
    priceUHT: "",
  });

  const navigation = useNavigate();
  const [itemListState, setItemListState] = useState([]);
  const [totalState, setTotalState] = useState("");

  const myState = useSelector((state) => state.devis);
  const dispatch = useDispatch();

  function handleInputChange($event) {
    const target = $event.target;
    const value = target.value;
    const name = target.name;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleSubmit($event) {
    console.log($event);
    let itemList = myState.items;
    let item = {
      id: myState.items.length + 1,
      libelle: formState.libelle,
      qte: formState.qte,
      priceUHT: formState.priceUHT,
      priceHT: formState.priceUHT * formState.qte,
      priceTTC: formState.priceUHT * formState.qte * (1 + +myState.tva),
    };
    // itemList.push(item);
    // setItemListState(itemList);
    dispatch(addItem(item));
    calculateTotal();
    clearForm();
    $event.preventDefault();
  }

  function calculateTotal() {
    let totalHT = myState.items
      .map((i) => i.priceHT)
      .reduce((a, b) => a + b, 0);
    let total = {
      totalHT: totalHT,
      tva: totalHT * myState.tva,
      totalTTC: myState.items
        ?.map((i) => i.priceTTC)
        .reduce((a, b) => a + b, 0),
    };
    setTotalState(total);
    dispatch(setTotal(total));
  }

  function handleDelete(id) {
    const itemList = myState.items;
    dispatch(deleteItem(id));
    //setItemListState(remove(itemList, (a) => a.id !== id));
  }

  function clearForm() {
    setFormState({
      libelle: "",
      qte: "",
      priceUHT: "",
    });
  }

  function calculatePrice() {
    const itemList = myState.items;
    if (!!itemList) {
      dispatch(
        setItemList(
          itemList?.map((item) => {
            return { ...item, priceTTC: item.priceHT * (1 + +myState.tva) };
          })
        )
      );
    }
  }

  useEffect(() => {
    calculateTotal();
  }, [myState.items]);

  useEffect(() => {
    calculatePrice();
    calculateTotal();
  }, [myState.tva]);

  function goHome() {
    navigation("/");
  }

  function handleOnkeyPressLibelle($event) {
    if ($event.key === "Enter") {
      $event.preventDefault();
      const target = $event.target;
      const value = target.value;
      const name = target.name;
      setFormState((prev) => {
        return { ...prev, [name]: value + '\n' };
      });
    }
  }

  return (
    <div className="row" style={{ padding: "20px", fontFamily: "roboto" }}>
      <button onClick={() => goHome()}>HOME</button>
      <div className=" m-auto col-8">
        <div>
          <DevisFormInfo />
        </div>
        <DevisInfo />
        <div style={{}} className="myContainer">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div className="mb-3">
               
                <textarea
                  // s
                  className="form-control"
                  name="libelle"
                  value={formState.libelle}
                  onKeyPress={(e) => {
                    handleOnkeyPressLibelle(e);
                  }}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Désignation"
                />
              </div>
              <div className="row">
                <div className="mb-3 col">
                  <input
                    type="number"
                    className="form-control"
                    name="qte"
                    value={formState.qte}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Quantité"
                  />
                </div>
                <div className="mb-3 col">
                  <input
                    type="number"
                    className="form-control"
                    name="priceUHT"
                    value={formState.priceUHT}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Prix Unitaire HT"
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Ajouter au devis
            </button>
          </form>
        </div>

        <div style={{ marginTop: "20px" }} className="myContainer">
          <Table
            data={myState.items}
            total={myState.total}
            tva={myState.tva}
            onDelete={(id) => handleDelete(id)}
          />
          <NavButton />
        </div>
      </div>
      <div className="col-4">
        <div>
          <ClientForm />
        </div>
        <div>
          <Tva />
        </div>
        <div style={{ marginTop: "20px" }}>
          <ActionButtons state={myState} />
        </div>
      </div>
    </div>
  );
}

function NavButton(props) {
  return <></>;
}

export default DevisForm;
