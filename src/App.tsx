import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container-introduce'>
        <img src="https://th.bing.com/th/id/OIP.ef4ZuCITfHCVuT1xSPsAwQHaEo?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="ảnh chân dung ca sĩ sơn tùng" />
        <h3>Son Tung MTP</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequatur iusto voluptate.</p>
        <h3>Contact</h3>
        <div className='contact'>
           <span><i className="fa-brands fa-facebook"></i>FB</span>
           <span><i className="fa-brands fa-instagram"></i>IG</span>
           <span><i className="fa-brands fa-youtube"></i>Youtube</span>
        </div>
        <div className='container-button'>
          <button className='contactme'>Contact Me</button>
          <button className='Hireme'>Hire Me</button>
        </div>

      </div>
    </div>
  );
}

export default App;
