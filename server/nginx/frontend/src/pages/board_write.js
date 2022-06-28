import "../css/board_write.css";
import React, { useState } from "react";
import Header from "../components/header";

function Board_write() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");

  // 첨부 파일 명 가져오는 코드
  const fileUpload = () => {
    var fileInput = document.getElementsByClassName("chooseFile");
    console.log("fileInput", fileInput.length);
    for (var i = 0; i < fileInput.length; i++) {
      if (fileInput[i].files.length > 0) {
        for (var j = 0; j < fileInput[i].files.length; j++) {
          console.log(fileInput[i].files[j].name); // 파일명 출력
          setFileName(fileInput[i].files[j].name);
        }
      }
    }
  };

  return (
    <div className="board_write">
      <Header />
      <div className="write">
        <span>제목</span>
        <input type="text" id="title" className="board_input"></input>
        <span>카테고리</span>
        <select name="category" className="board_input">
          <option value="">카테고리</option>
          <option value="자유게시판">자유게시판</option>
          <option value="투자결산">투자결산</option>
        </select>
        <span>내용</span>
        <textarea id="content" className="board_input" />
        <form method="post">
          <div className="label_box">
            <label htmlFor="chooseFile" id="file_button">
              파일 선택
            </label>
          </div>
          <input
            type="file"
            id="chooseFile"
            name="chooseFile"
            accept="image/*"
            className="chooseFile"
            onChange={fileUpload}
            style={{ display: "none" }}
          ></input>
          <span>{fileName}</span>
        </form>
        <div className="submit_cancle">
          <div className="submit_button">
            <span>등록</span>
          </div>
          <div className="cancle_button">
            <span>취소</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board_write;
