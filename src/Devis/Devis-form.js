import React from "react";
import Table from "./Table";

class DevisForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libelle: "",
      qte: "",
      priceUHT: "",
      itemList: [],
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
    let item = {
      id: this.state.itemList.length + 1,
      libelle: this.state.libelle,
      qte: this.state.qte,
      priceUHT: this.state.priceUHT,
      priceHT: this.state.priceUHT * this.state.qte,
      priceTTC: this.state.priceUHT * this.state.qte * 1.2,
    };
    this.state.itemList.push(item);
    this.clearForm();
    $event.preventDefault();
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
      <>
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
            Valider
          </button>
        </form>
        <div className="w-75 m-auto">
          <Table data={this.state.itemList} />
        </div>
      </>
    );
  }
}

export default DevisForm;
