import '../../css/signIn.css';

function signIn() {
  return (
    <div className='signIn'>
      <div className='login'>
        <div className='id_pw_input'>
          <input type='text' placeholder='아이디'/>
          <input type='password' placeholder='비밀번호'/>
        </div>
        <div className='login_button inflow'>
          <span>로그인</span>
        </div>
        <div className='join_button inflow'>
          <span>회원가입</span>
        </div>
        <div className='find_info'>
          <div className='find_id'>아이디 찾기</div>
          <div className='find_pw'>비밀번호 찾기</div>
        </div>
      </div>
    </div>
  );
}

export default signIn;
