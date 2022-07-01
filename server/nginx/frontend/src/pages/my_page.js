import "../css/my_page.css";
// import React, { useState } from "react";
import Header from "../components/header";
import profile from "../img/profile.png";

function My_page() {
  return (
    <div className="my_page">
      <Header />
      <div className="my_info">
        <div className="profile">
          <img src={profile} style={{ width: "250px", height: "250px" }} />
          <div>
            <div className="follwer">
              <span>팔로워</span>
            </div>
            <div className="follwing">
              <span>팔로우</span>
            </div>
            <div className="like">
              <span>좋아요</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my_posts"></div>
    </div>
  );
}

export default My_page;
