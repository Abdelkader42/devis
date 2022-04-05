import React, { useState } from "react";
var formFeilds = ["name", "address", "cp", "city", "country"];
class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      cp: "",
      city: "",
      country: "",
      show: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange($event) {
    const target = $event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit($event) {
    console.log(this.state);
    this.setState({ show: true });
    $event.preventDefault();
  }

  clearAll() {
    this.setState({
      name: "",
      address: "",
      cp: "",
      city: "",
      country: ""
    })
  }
  render() {
    return (
      <>
        {!!this.state.show ? (
          <div>
            <p className="mb-0">{this.state.name}</p>
            <p className="mb-0">{this.state.address}</p>
            <p className="mb-0">
              {this.state.cp} {this.state.city}
            </p>
            <p className="mb-0">{this.state.country}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ show: false })}
            >
              modifier le client
            </button>
          </div>
        ) : (
          <>
          <form onSubmit={this.handleSubmit}>
            <h3>Le Client</h3>
          
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">Nom Prénom / Raison Social</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">N° et désignation</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="cp"
                value={this.state.cp}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">CP</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">Ville</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="country"
                value={this.state.country}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">Pays</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Valider
            </button>
          </form>
          <button className="btn btn-primary" onClick={()=> this.clearAll()}>
              Reset
            </button>
          </>
        )}
      </>
    );
  }
}

export default ClientForm;
