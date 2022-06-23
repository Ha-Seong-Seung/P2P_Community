import '../css/main.css';
import Header from "../components/header";
import profile from '../img/profile.png'

function main() {
  return (
    <div className='main'>
      <Header />
      <div className='cards'>
        <div className='card'>
          <div className='card_header'>
            <div className='card_header_left'>
              <img src={profile} style={{width: '50px', height: '50px'}}/>
              <div className='user_info'>
                <span>하리보</span>
                <span id='time'>22.6.21 14:14</span>
              </div>
            </div>
            <div className='card_header_right'>
              <div className='more_view'>···</div>
            </div>
          </div>
          <div className='card_contents'>
            contents
          </div>
          <div className='card_footer'>
            footer
          </div>
        </div>
        <div className='card'>
          <div className='card_header'>
            <div className='card_header_left'>
              <img src={profile} style={{width: '50px', height: '50px'}}/>
              <div className='user_info'>
                <span>하리보</span>
                <span id='time'>22.6.21 14:14</span>
              </div>
            </div>
            <div className='card_header_right'>
              <div className='more_view'>···</div>
            </div>
          </div>
          <div className='card_contents'>
            contents
          </div>
          <div className='card_footer'>
            footer
          </div>
        </div>
        <div className='card'>
          <div className='card_header'>
            <div className='card_header_left'>
              <img src={profile} style={{width: '50px', height: '50px'}}/>
              <div className='user_info'>
                <span>하리보</span>
                <span id='time'>22.6.21 14:14</span>
              </div>
            </div>
            <div className='card_header_right'>
              <div className='more_view'>···</div>
            </div>
          </div>
          <div className='card_contents'>
            contents
          </div>
          <div className='card_footer'>
            footer
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
