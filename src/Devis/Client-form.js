import React, { useState } from "react";
import { connect } from "react-redux";
import { isClientValid, setClient } from "../redux/devisSlice";
var formFeilds = ["name", "address", "cp", "city", "country"];
class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        name: "",
        address: "",
        cp: "",
        city: "",
        country: ""
      },
      clientValid: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange($event) {
    const target = $event.target;
    const value = target.value;
    const name = target.name;
    const state = {...this.state.client, [name]: value};
    this.setState({
        client: state,
    });
  }
  handleSubmit($event) {
    console.log(this.state);
    this.setState({ clientValid: true },()=>  {
      this.props.dispatch(setClient(this.state.client));
      this.props.dispatch(isClientValid(true));
    });
    $event.preventDefault();
  }

  clearAll() {
    this.setState({
      name: "",
      address: "",
      cp: "",
      city: "",
      country: "",
    });
  }
  render() {
    return (
      <div className="w-50 m-auto">
        {!!this.state.clientValid ? (
          <div>
            <p className="mb-0">{this.state.client.name}</p>
            <p className="mb-0">{this.state.client.address}</p>
            <p className="mb-0">
              {this.state.client.cp} {this.state.client.city}
            </p>
            <p className="mb-0">{this.state.client.country.client}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ clientValid: false })}
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
                <label htmlFor="floatingInput">
                  Nom Prénom / Raison Social
                </label>
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
              <div className="row">
              <div className="form-floating mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  name="cp"
                  value={this.state.cp}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="floatingInput">CP</label>
              </div>
              <div className="form-floating mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="floatingInput">Ville</label>
              </div>
              <div className="form-floating mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="floatingInput">Pays</label>
              </div>
              </div>
           
              <button className="btn btn-primary" type="submit">
                Valider
              </button>
            </form>
            <button className="btn btn-primary" onClick={() => this.clearAll()}>
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default connect()(ClientForm);
