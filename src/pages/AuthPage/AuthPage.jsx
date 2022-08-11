import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand">The House of Books</a>
        </div>
      </nav>
      <main className="AuthPage">
        {/* <h1>AuthPage</h1> */}
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </main>
    </>
  );
}
