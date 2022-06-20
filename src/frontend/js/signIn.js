import '../../css/signIn.css';
import { Link } from 'react-router-dom';
import p2pimg from '../../img/p2pimg.png'

function signIn() {
  return (
    <div className='signIn'>
      <img src={p2pimg} style={{width: '200px', marginBottom: '20px'}}/>
      <div className='login'>
        <div className='id_pw_input'>
          <input type='text' placeholder='아이디'/>
          <input type='password' placeholder='비밀번호'/>
        </div>
        <div className='login_button inflow'>
          <span>로그인</span>
        </div>
        <Link to="signUp">
          <div className='join_button inflow'>
            <span>회원가입</span>
          </div>
        </Link>
        <div className='find_info'>
          <div className='find_id'>아이디 찾기</div>
          <div className='find_pw'>비밀번호 찾기</div>
        </div>
      </div>
    </div>
  );
}

export default signIn;
