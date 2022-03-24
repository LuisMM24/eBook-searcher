import "./signUp.scss";
import googleIcon from "../../assets/img/googleIcon.jpg";

export default function SignUp({ googleSign }) {
  return (
    <div className="signUpContainer">
      <button className="button--signUp elementsInline" onClick={googleSign}>
        <img src={googleIcon} alt="google sign up icon" />
        <p className="">Sign in with Google</p>
      </button>
      <div className="or">
        <p>OR</p>
      </div>
      <form className="signUpForm">
        <div className="inputContainer elementsInline">
          <label htmlFor="emailInput">Introduce your email</label>
          <input type="text" id="emailInput" />
        </div>
        <div className="inputContainer elementsInline">
          <label htmlFor="passwordInput">Introduce your password</label>
          <input type="password" id="passwordInput" />
        </div>
      </form>
    </div>
  );
}
