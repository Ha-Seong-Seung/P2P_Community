import "../css/chat.css";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import profile from "../img/profile.png";

function Chat() {
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    ScreenSize();
  }, []);

  // 높이 헤더포함해서 100%로 지정해주는 함수
  const ScreenSize = () => {
    setWindowHeight(document.documentElement.clientHeight - 80);
  };

  // 윈도우 사이즈 변경할 때마다 사이즈 조정
  window.addEventListener("resize", () => ScreenSize());
  return (
    <div className="chat" style={{ minHeight: windowHeight }}>
      <Header />
      <div className="my_chat">
        <div className="my_chat_list">
          <div className="chat_list_top">
            <span>메시지</span>
          </div>
          <div className="chat_list_contents">
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용dddddddddddddddd</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용</span>
              </div>
            </div>
            <div className="chat_other">
              <img src={profile} alt="profile" />
              <div className="chat_info">
                <span>트롤리</span>
                <span>채팅내용</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
