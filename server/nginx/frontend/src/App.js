import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from "./pages/signIn.js";
import SignUp from "./pages/signUp.js";
import Main from "./pages/main.js";
import BoardWrite from "./pages/board_write.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} exact />
        <Route path="/signUp" element={<SignUp/>} exact />
        <Route path="/main" element={<Main/>} exact />
        <Route path="/board_write" element={<BoardWrite/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
