import { _ } from "ajv";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import remove from "lodash/remove";
import createStore from "redux";
import {useNavigate } from "react-router";
import { connect } from "react-redux";
import {addItem, deleteItem} from "../redux/actions"
import { add } from "lodash";

function DevisFormBis (props){

    const [formState, setFormState] = useState({
        libelle: "",
        qte: "",
        priceUHT: ""});
        const [itemListState, setItemListState] = useState([])
        const [totalState, setTotalState] = useState("")

  function handleInputChange($event) {
    const target = $event.target;
    const value = target.value;
    const name = target.name;
    setFormState((prev) =>{
        return {...prev,
            [name]: value,
          };
    });
  }
  function handleSubmit($event) {
    console.log($event);
    let itemList = itemListState;
    let item = {
      id: itemListState.length + 1,
      libelle: formState.libelle,
      qte: formState.qte,
      priceUHT: formState.priceUHT,
      priceHT: formState.priceUHT * formState.qte,
      priceTTC: formState.priceUHT * formState.qte * 1.2,
    };
    itemList.push(item);
    setItemListState(itemList);
    calculateTotal();
    clearForm();
    $event.preventDefault();
  }

  function calculateTotal() {
    let totalHT = itemListState.map((i) => i.priceHT).reduce((a, b) => a + b, 0);
    let total = {
      totalHT: totalHT,
      tva: totalHT * 0.2,
      totalTTC: itemListState.map((i) => i.priceTTC).reduce((a, b) => a + b, 0),
    };
    setTotalState(total);
  }

  function handleDelete(id) {
    const itemList = itemListState;
    setItemListState(remove(itemList, (a) => a.id !== id));
  }

 function  clearForm() {
    setFormState({
      libelle: "",
      qte: "",
      priceUHT: "",
    });
  }

  useEffect(() => 
  {
    calculateTotal();
  }, [itemListState]
  )
    return (
      <div className="w-75 m-auto">
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
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="qte"
                value={formState.qte}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="floatingInput">Quantité</label>
            </div>
            <div className="form-floating mb-3">
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
          <button className="btn btn-primary" type="submit">
            Ajouter au devis
          </button>
        </form>
        <div>
          <Table
            data={itemListState}
            total={totalState}
            onDelete={(id) => handleDelete(id)}
          />
        </div>
        <NavButton/>
      </div>
    )
}



function NavButton(props) {
  const navigation = useNavigate();

  return <button onClick={()=> navigation('/devis')} className="btn btn-primary" >Imprimer le Devis</button>;
}

export default DevisFormBis;
