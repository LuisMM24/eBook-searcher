// hooks
import { useContext, useState } from "react";
// firebase
import { signUpWithGoogle, auth, signOut } from "../../firebase/firebase";
import { syncUserData } from "../../utils/auth-request";
// components / styles
import "./home.scss";
import SignUp from "../../components/SignUp/SignUp";
// assets
import glassIcon from "../../assets/img/glassIcon.png";
import ebookIcon from "../../assets/img/ebookIcon.png";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const [error, setError] = useState(null);
  const currentUser = useContext(AuthContext);

  const handleSubmitWithGoogle = async () => {
    try {
      await signUpWithGoogle();
      await syncUserData();
    } catch (err) {
      setError(err.message);
    } finally {
      setError(undefined);
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      setError("You have to be registered to search ebooks!");
    }
  };
  return (
    <>
      {error && <div className="errorContainer">{error}</div>}
      <main className="homeContainer">
        {currentUser && <button onClick={signOut}>Sign Out</button>}
        <div className="titleContainer elementsInline">
          <img className="title__img" src={ebookIcon} alt="ebook icon" />
          <h1>Welcome to eBook-Searcher</h1>
        </div>
        <form className="form elementsInline">
          <input
            type="text"
            className="inputSearcher"
            placeholder="Search your favorite ebooks here"
          />
          <button
            onClick={handleSubmitSearch}
            className="buttonSearcher"
            type="submit"
          >
            <img src={glassIcon} alt="glass icon" />
          </button>
        </form>
        {!currentUser && <SignUp googleSign={handleSubmitWithGoogle} />}
        {currentUser && <h3>You're logged in: {currentUser.displayName}</h3>}
      </main>
    </>
  );
}
