import { Component } from 'react';
// import {useState} from "react"
import { signUp } from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./SignUpForm.css"


// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   })

//   function handleChange(evt) {
//     setFormData({
//       ...formData,
//       [evt.target.name]: evt.target.value,
//       error: ''
//     })
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     alert(JSON.stringify(formData));
//   }

//   const disable = formData.password !== formData.confirm;

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//           <label>Confirm</label>
//           <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
//           <button type="submit" disabled={disable}>SIGN UP</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{formData.error}</p>
//     </div>
//   );
// }

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      this.props.setUser(user)
    } catch(err) {
      // An error occurred 
      console.log(err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      // <div className="main">
      //   <input type="checkbox" id="chk" aria-hidden="true" ></input>
      //   <div className="signup">
      //     <form autoComplete="off" onSubmit={this.handleSubmit}>
      //       <label for="chk" aria-hidden="true" >Sign up</label>
      //       {/* <label type="text" aria-hidden="true" >Name</label> */}
      //       <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="User name" required />
      //       {/* <label>Email</label> */}
      //       <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required />
      //       {/* <label>Password</label> */}
      //       <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
      //       <label>Confirm</label>
      //       <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
      //       <button type="submit" disabled={disable}>SIGN UP</button>
      //     </form>
      //   </div>
      //   <p className="error-message">&nbsp;{this.state.error}</p>
      // </div>



      <Container>

        <div className="form-container">
            <label for="chk" aria-hidden="true">Sign up</label>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
        <fieldset>
        <div className="form-group">
            {/* <label for="name" className="form-label mt-4">Name</label> */}
          
              <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} required />
            
            </div>

            <div className="form-group">

            {/* <label for="exampleInputEmail1" className="form-label mt-4">Email</label> */}
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>

            <div className="form-group">

            {/* <label for="exampleInputPassword1" className="form-label mt-4">Password</label> */}
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div className="form-group">

            {/* <label for="confirm" className="form-label mt-4">Confirm</label> */}
            <input type="password" className="form-control" id="confirm" placeholder="Confirm Password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <button type="submit" disabled={disable} className="btn btn-primary">SIGN UP</button>
        </fieldset>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </Container>
    );
  }
  
}
