import "../css/other_page.css";
// import React, { useState } from "react";
import Header from "../components/header";
import profile from "../img/profile.png";
import settings from "../img/settings.png";

function My_page() {
    return (
        <div className="other_page">
            <Header />
            <div className="my_contents">
                <div className="my_info">
                    <div className="profile">
                        <div className="info">
                            <img src={profile} alt="profile" />
                            <div className="account_setting">
                                <span>트롤리</span>
                            </div>
                        </div>
                        <div className="info_right">
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
                            <div className="contact">
                                <div className="follow_button">
                                    팔로우
                                </div>
                                <div className="message_button">
                                    메세지
                                </div>
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
