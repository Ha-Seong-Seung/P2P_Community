import '../css/board_write.css';
import Header from "../components/header";

function board_write() {
  return (
    <div className='board_write'>
      <Header />
      <div className='write'>
        <span>제목</span>
        <input type='text' id='title' className='board_input'></input>
        <span>카테고리</span>
        <select name="category" className='board_input'>
            <option value="">카테고리</option>
            <option value="자유게시판">자유게시판</option>
            <option value="투자결산">투자결산</option>
        </select>
        <span>내용</span>
        <textarea id='content' className='board_input'/>
        <form method='post'>
          <div>
            <label for='chooseFile'>
              클릭
            </label>
          </div>
          <input type='file' id='chooseFile' name='chooseFile' accept='image/*' style={{display:'none'}}></input>
        </form>
        <div className='submit_cancle'>
          <div className='submit_button'>
            <span>등록</span>
          </div>
          <div className='cancle_button'>
            <span>취소</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default board_write;
