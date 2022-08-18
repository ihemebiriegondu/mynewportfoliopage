import React from 'react'
import '../CSS/socialIcons.css'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';


function SocialIcons({ SocialIconContainerClass, SocialIconClass }) {
  return (
    <div className={SocialIconContainerClass}>
      <a href='https://github.com/ihemebiriegondu' target={'_blank'} rel="noreferrer"><FaGithub className={SocialIconClass} /></a>
      <a href='https://www.linkedin.com/in/ihemebiri-egondu-b86b45237' target={'_blank'} rel="noreferrer"><FaLinkedin className={SocialIconClass} /></a>
      <a href='https://twitter.com/egondu_i?s=09' target={'_blank'} rel="noreferrer"><FaTwitter className={SocialIconClass} /></a>
      <a href='https://web.facebook.com/ihemebiriblessing.oluwafunkeegondu.3' target={'_blank'} rel="noreferrer"><FaFacebookF className={SocialIconClass} /></a>
    </div>
  )
}

export default SocialIcons