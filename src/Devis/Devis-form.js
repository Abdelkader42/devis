import { _ } from "ajv";
import React from "react";
import Table from "./Table";
import remove from "lodash/remove";

class DevisForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libelle: "",
      qte: "",
      priceUHT: "",
      itemList: [],
      total: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange($event) {
    const target = $event.target;
    const value = target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }
  handleSubmit($event) {
    console.log($event);
    let state = this.state;
    let item = {
      id: state.itemList.length + 1,
      libelle: state.libelle,
      qte: state.qte,
      priceUHT: state.priceUHT,
      priceHT: state.priceUHT * state.qte,
      priceTTC: state.priceUHT * state.qte * 1.2,
    };
    state.itemList.push(item);
    this.calculateTotal();
    this.clearForm();
    $event.preventDefault();
  }

  calculateTotal() {
    let state = this.state;
    let totalHT = state.itemList.map((i) => i.priceHT).reduce((a, b) => a + b, 0);
    let total = {
      totalHT: totalHT,
      tva: totalHT * 0.2,
      totalTTC: state.itemList.map((i) => i.priceTTC).reduce((a, b) => a + b, 0),
    };
    this.setState({
      total: total,
    });
  }
  handleDelete(id) {
    const itemList = this.state.itemList;
    this.setState({ itemList: remove(itemList, (a) => a.id !== id) }, ()=>this.calculateTotal());
  }
  clearForm() {
    this.setState({
      libelle: "",
      qte: "",
      priceUHT: "",
    });
  }
  render() {
    return (
      <div className="w-75 m-auto">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="libelle"
                value={this.state.libelle}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">Désignation</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="qte"
                value={this.state.qte}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">Quantité</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="priceUHT"
                value={this.state.priceUHT}
                onChange={this.handleInputChange}
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
            data={this.state.itemList}
            total={this.state.total}
            onDelete={(id) => this.handleDelete(id)}
          />
        </div>
      </div>
    );
  }
}

export default DevisForm;
