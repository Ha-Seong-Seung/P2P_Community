import '../../css/board_write.css';
import Header from "../components/header";

function board_write() {
  return (
    <div className='board_write'>
      <Header />
      <div className='write'>
        제목
        <input type='text'></input>
        카테고리
        <select name="category">
            <option value="">카테고리</option>
            <option value="자유게시판">자유게시판</option>
            <option value="투자결산">투자결산</option>
        </select>
        내용
        <input type='text'></input>
        <form method='post'>
          <div>
            <label for='chooseFile'>
              클릭
            </label>
          </div>
          <input type='file' id='chooseFile' name='chooseFile' accept='image/*'></input>
        </form>
      </div>
    </div>
  );
}

export default board_write;
