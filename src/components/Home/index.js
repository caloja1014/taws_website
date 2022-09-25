import React from 'react';
import './index.scss';

const Home = () => {
  return (
    <div className='taws-home'>
      <div className='taws-firacode-bold taws-home-title'>
        Club<br/>Taws
      </div>
      
      <img src={require("../assets/logo.png")} className="taws-img-home" alt="" />
     
    </div>
  );
};
export default Home;