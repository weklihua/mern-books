import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";
import { useState } from "react"

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="navbar-brand">The House of Books</div>
        </div>
      </nav>
      <main className="AuthPage">
        <div>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}
        </button>
      </div>
      <div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </div>
      </main>
    </>
  );
}
