import "../css/my_page.css";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import profile from "../img/profile.png";
import settings from "../img/settings.png";

function My_page() {
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
    <div className="my_page" style={{ minHeight: windowHeight }}>
      <Header />
      <div className="my_contents">
        <div className="my_info">
          <div className="profile">
            <div className="info">
              <img src={profile} alt="profile" />
              <div className="account_setting">
                <span>하리보</span>
                <div>
                  <img src={settings} alt="settings" />
                </div>
              </div>
            </div>
            <div className="follow">
              <div className="post">
                <span>10</span>
                <span>게시글</span>
              </div>
              <div className="follwer">
                <span>10</span>
                <span>팔로워</span>
              </div>
              <div className="follwing">
                <span>10</span>
                <span>팔로우</span>
              </div>
            </div>
          </div>
        </div>
        <div className="my_posts">
          <div className="post_img">
            <img src={profile} alt="profile" />
          </div>
          <div className="post_img">
            <img src={profile} alt="profile" />
          </div>
          <div className="post_img">
            <img src={profile} alt="profile" />
          </div>
          <div className="post_img">
            <img src={profile} alt="profile" />
          </div>
          <div className="post_img">
            <img src={profile} alt="profile" />
          </div>
          <div className="post_img">
            <img src={profile} alt="profile" />
          </div>
          <div className="post_img">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_page;
