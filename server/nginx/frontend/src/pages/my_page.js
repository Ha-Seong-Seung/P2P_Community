import "../css/my_page.css";
// import React, { useState } from "react";
import Header from "../components/header";
import profile from "../img/profile.png";
import settings from "../img/settings.png";

function My_page() {
  return (
    <div className="my_page">
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
