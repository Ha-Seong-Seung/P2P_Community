import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/signIn.js";
import SignUp from "./pages/signUp.js";
import Main from "./pages/main.js";
import BoardWrite from "./pages/board_write.js";
import MyPage from "./pages/my_page.js";
import OtherPage from "./pages/other_page.js";
import Chat from "./pages/chat.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} exact />
        <Route path="/signUp" element={<SignUp />} exact />
        <Route path="/main" element={<Main />} exact />
        <Route path="/board_write" element={<BoardWrite />} exact />
        <Route path="/my_page" element={<MyPage />} exact />
        <Route path="/other_page" element={<OtherPage />} exact />
        <Route path="/chat" element={<Chat />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
