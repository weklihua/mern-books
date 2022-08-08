import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
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
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Container>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
        <div class="form-group">
        <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange} required />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
          
        <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} required />
    </div>


       
          <Button type="submit" variant="primary">LOG IN</Button>
          </fieldset>
        </form>
       
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </Container>
  );
}
