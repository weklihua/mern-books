import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./LoginForm.css";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <Container className="LoginForm">
      <div className="form-container">
        <label for="chk" aria-hidden="true">
          Login
        </label>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" variant="primary">
              LOG IN
            </Button>
          </fieldset>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </Container>
  );
}
