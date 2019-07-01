import React, { Component } from "react";
import fire from "../config/Fire";

export default class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSigninSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    var errorCode = null;
    await fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        errorCode = error.code;
        var errorMessage = error.message;
        alert("Utilize o email e uma senha válida");
      });

    if (errorCode == null) {
      alert("Criado com Sucesso!");
      this.props.history.push("/");
    }
  };

  onTelaSignIn = e => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-md-center">
          <div className="col col-lg-4 pt-2 text-center border border-success rounded">
            <h1>SignUp</h1>

            <form onSubmit={this.handleSigninSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Seu email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Sua senha"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </div>
              <button type="submit" className="mb-4 btn btn-success">
                Criar Conta
              </button>
            </form>
            <form onSubmit={this.onTelaSignIn}>
              <button className="btn btn-link float-left" type="submit">
                <h6>SignIn.</h6>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
