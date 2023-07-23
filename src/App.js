import "./App.css";
import React, { useState, useEffect } from "react";

import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

function App() {
  const [isValid, setIsValid] = useState(false);
  return (
    <>
      {/* <div className="test"></div> */}
      <Login />
      <Signup />
      {/* <div className="test"></div> */}
    </>
  );
}

export default App;
