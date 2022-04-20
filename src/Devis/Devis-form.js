import { _ } from "ajv";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import remove from "lodash/remove";
import createStore from "redux";
import { useNavigate } from "react-router";
import { connect, useDispatch } from "react-redux";
import { add } from "lodash";
import { useSelector } from "react-redux";
import { addItem, deleteItem, setTotal } from "../redux/devisSlice";
import ClientForm from "./Client-form";

function DevisForm(props) {
  const [formState, setFormState] = useState({
    libelle: "",
    qte: "",
    priceUHT: "",
  });
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
      priceTTC: formState.priceUHT * formState.qte * 1.2,
    };
    // itemList.push(item);
    // setItemListState(itemList);
    dispatch(addItem(item));
    console.log(myState);
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
      tva: totalHT * 0.2,
      totalTTC: myState.items.map((i) => i.priceTTC).reduce((a, b) => a + b, 0),
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

  useEffect(() => {
    calculateTotal();
  }, [myState.items]);

  useEffect(() => {
    console.log(myState);
  }, [myState]);

  return (
    <div className="w-50 m-auto">
      <ClientForm/>
      <div style={{display: myState.isClientValid ? '' : 'none'}}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="libelle"
              value={formState.libelle}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="floatingInput">Désignation</label>
          </div>
         <div className="row">
         <div className="form-floating mb-3 col">
            <input
              type="number"
              className="form-control"
              name="qte"
              value={formState.qte}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="floatingInput">Quantité</label>
          </div>
          <div className="form-floating mb-3 col">
            <input
              type="number"
              className="form-control"
              name="priceUHT"
              value={formState.priceUHT}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="floatingInput">Prix Unitaire HT</label>
          </div>
         </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Ajouter au devis
        </button>
      </form>
      </div>
      
      <div style={{display: myState.isClientValid ? '' : 'none'}}>
        <Table
          data={myState.items}
          total={myState.total}
          onDelete={(id) => handleDelete(id)}
        />
        <NavButton />
      </div>
    </div>
  );
}

function NavButton(props) {
  const navigation = useNavigate();

  return (
    <>
      <button onClick={() => navigation("/devis")} className="btn btn-primary">
        Imprimer le Devis
      </button>
      <button
        onClick={() => navigation("/devis-pdf")}
        className="btn btn-primary"
      >
        pdf
      </button>
    </>
  );
}

export default DevisForm;
