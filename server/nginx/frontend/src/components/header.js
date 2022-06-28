import p2pimg from '../img/p2p_blue.png'
import '../css/header.css'
import { Link } from 'react-router-dom';

function header() {
  return (
    <div className='header'>
      <Link to="/main">
        <img src={p2pimg} style={{width: '50px'}}/>
      </Link>
      <div className='quick'>
        <span>검색</span>
        <span>쓰기</span>
        <span>채팅</span>
        <span>마페</span>
      </div>
    </div>
  );
}

export default header;