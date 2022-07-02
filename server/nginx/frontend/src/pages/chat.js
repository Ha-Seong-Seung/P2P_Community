import "../css/chat.css";
import Header from "../components/header";
import profile from "../img/profile.png";

function Chat() {
    return (
        <div className="chat">
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
