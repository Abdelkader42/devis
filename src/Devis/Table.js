import { useState } from "react";
import "../App.css";

var data = [
  {
    id: 1,
    qte: 1,
    libelle: "Test 1 abc",
    priceUHt: 25.6,
    priceHt: 25.6,
    priceTtc: 50,
  },
  {
    id: 2,
    qte: 1,
    libelle: "Test 2 abc",
    priceUHt: 251.6,
    priceHt: 257.6,
    priceTtc: 506,
  },
  {
    id: 3,
    qte: 1,
    libelle: "Test 3 abc",
    priceUHt: 252.6,
    priceHt: 255.6,
    priceTtc: 507,
  },
  {
    id: 4,
    qte: 1,
    libelle: "Test 4 abc",
    priceUHt: 253.6,
    priceHt: 256.6,
    priceTtc: 505,
  },
  {
    id: 5,
    qte: 1,
    libelle: "Test 5 abc",
    priceUHt: 254.6,
    priceHt: 254.6,
    priceTtc: 501,
  },
  
];
function Table(props) {
  return (
    <div>
      <div className="mb-3"> Changement de Porte Blindée</div>
      <table className="table table-striped">
        <thead>
          <th className="text-center">N°</th>
          <th className="w-50">Désignation</th>
          <th className="text-center">Quantité</th>
          <th className="text-end">Prix Unitaire HT</th>
          <th className="text-end">Total HT</th>
          <th className="text-end">Total TTC</th>
        </thead>
        <tbody>
          {props.data.map((p, index) => {
            return (
              <tr key={index + 1}>
                <td className="text-center">{index + 1}</td>
                <td>{p.libelle}</td>
                <td className="text-center">{p.qte}</td>
                <td className="text-end">{Number(p.priceUHT).toFixed(2)} €</td>
                <td className="text-end">{Number(p.priceHT).toFixed(2)} €</td>
                <td className="text-end">{Number(p.priceTTC).toFixed(2)} €</td>
                <td className="text-end">
                 <i className="bi bi-trash clickable" 
                 style={{marginLeft:'10px', color:'red'}}
                 onClick={()=>props.onDelete(p.id)}></i></td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
      <Total data ={props.total}/>
    </div>
  );
}

function Total(props) {
  return (
    <div className="row">
      <div className="col-9"></div>
      <table className="table table-striped w-25 text-end col-3">
        <tbody className="fw-bolder">
          <tr>
            <td className="w-50"> Total HT</td>
            <td className="w-50">{Number(props.data.totalHT).toFixed(2)} €</td>
          </tr>
          <tr>
            <td>Montant TVA</td>
            <td>{Number(props.data.tva).toFixed(2)} €</td>
          </tr>
          <tr>
            <td>Total TTC</td>
            <td>{Number(props.data.totalTTC).toFixed(2)} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
