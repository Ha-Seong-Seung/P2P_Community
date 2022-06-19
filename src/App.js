import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from "./frontend/js/signIn.js";
import SignUp from "./frontend/js/signUp.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} exact />
        <Route path="/signUp" element={<SignUp/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
