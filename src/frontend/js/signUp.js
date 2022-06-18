import '../../css/signUp.css';

function signUp() {
  return (
    <div className='signUp'>
        <div className='signUp_flow'>
            <div className='signUp_input'>
                <div className='id_input double_check'>
                    <input type='text' placeholder='아이디' />
                    <div id="double_check">중복 확인</div>
                </div>
                <input type='password' placeholder='비밀번호' />
                <input type='password' placeholder='비밀번호 확인' />
                <div className='email_input double_check'>
                    <input type='email' placeholder='이메일' />
                    <div id="double_check">중복 확인</div>
                </div>
                <input type='number' placeholder='휴대폰' />
                <input type='text' placeholder='이름' />
                <input type='text' placeholder='닉네임' />
            </div>
            <div className='signUp_button'>
                <span>회원가입</span>
            </div>
        </div>
    </div>
  );
}

export default signUp;
