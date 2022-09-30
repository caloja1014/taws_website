import React from 'react';
import './CardMember.scss';


const CardMember = ({ name, image, title, linkLinkedin, linkGithub }) => {
  return (
    <div className='taws-card-member'>
      <div className='taws-card-member-image'>
        <img className='taws-card-member-image-inner' src={image} alt={name} />
      </div>
      <div>
        <div className='taws-card-member-nam taws-firacode-bold'>
          {name}
        </div>
        <div className='taws-card-member-title taws-firacode-bold'>
          {title}
        </div>
        <div className='taws-icon-directive'>
          <img id='taws-card-github' src={require('../assets/github_directive.png')} alt='' />
          <img id='taws-card-linkedin' src={require('../assets/linkedin_directive.png')} alt='' />
        </div>
      </div>
    </div>
  );
};
export default CardMember;