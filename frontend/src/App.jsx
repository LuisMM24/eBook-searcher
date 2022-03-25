import "./App.scss";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./firebase/firebase";

function App() {
  const currentUser = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={currentUser}>
          <Routes>
            <Route element={<Home />} exact path="/" />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
