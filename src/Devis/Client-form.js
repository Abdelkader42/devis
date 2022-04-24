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
        country: "",
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
    const state = { ...this.state.client, [name]: value };
    this.setState({
      client: state,
    });
  }
  handleSubmit($event) {
    this.setState({ clientValid: true }, () => {
      this.props.dispatch(setClient(this.state.client));
      this.props.dispatch(isClientValid(true));
    });
    $event.preventDefault();
  }

  clearAll() {
    this.setState({
      client: {
        name: "",
        address: "",
        cp: "",
        city: "",
        country: "",
      },
      clientValid: false,
    });
  }
  render() {
    return (
      <div className=" m-auto myContainer">
        {!!this.state.clientValid ? (
          <div>
            {/* <p className="mb-0">{this.state.client.name}</p>
            <p className="mb-0">{this.state.client.address}</p>
            <p className="mb-0">
              {this.state.client.cp} {this.state.client.city}
            </p>
            <p className="mb-0">{this.state.client.country.client}</p> */}
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

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.client.name}
                  onChange={this.handleInputChange}
                  placeholder="Nom Prénom / Raison Social"
                />
              </div>
              <div className="mb-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={this.state.client.address}
                  onChange={this.handleInputChange}
                  placeholder="N° et désignation"
                />
              </div>
              <div className="row">
                <div className="mb-3 col">
                  <input
                    type="text"
                    className="form-control"
                    name="cp"
                    value={this.state.client.cp}
                    onChange={this.handleInputChange}
                    placeholder="CP"
                  />
                </div>
                <div className="mb-3 col">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={this.state.client.city}
                    onChange={this.handleInputChange}
                    placeholder="Ville"
                  />
                </div>
                <div className="mb-3 col">
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={this.state.client.country}
                    onChange={this.handleInputChange}
                    placeholder="Pays"
                  />
                </div>
              </div>
              <div></div>
              <div className="row">
                <button className="btn btn-primary col" type="submit">
                  Valider
                </button>
              </div>
            </form>
            {/* <button
                  className="btn btn-secondary col"
                  onClick={() => this.clearAll()}>
                  Reset
                </button> */}
          </>
        )}
      </div>
    );
  }
}

export default connect()(ClientForm);
