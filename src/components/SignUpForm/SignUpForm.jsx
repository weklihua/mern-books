import { Component } from "react";
// import {useState} from "react"
import { signUp } from "../../utilities/users-service";
import Container from "react-bootstrap/Container";
import "./SignUpForm.css";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      this.props.setUser(user);
    } catch (err) {
      // An error occurred
      console.log(err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <Container className="SignUpForm">
        <div className="form-container">
          <label for="chk" aria-hidden="true">
            Sign up
          </label>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <fieldset>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirm"
                  placeholder="Confirm Password"
                  name="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={disable}
                className="btn btn-primary"
              >
                SIGN UP
              </button>
            </fieldset>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </Container>
    );
  }
}
