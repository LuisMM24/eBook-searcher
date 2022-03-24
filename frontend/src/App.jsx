import "./App.scss";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    console.log("paso x aquí");
  }, [currentUser]);

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
