import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaLink,
} from 'react-icons/fa';
import '../CSS/socialIcons.css';
import { DEFAULT_SOCIAL_LINKS } from '../constants/defaults';
import { hasValue } from '../services/portfolioService';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  dribbble: FaDribbble,
  other: FaLink,
};

function SocialIcons({
  links,
  SocialIconContainerClass,
  SocialIconClass,
}) {
  const activeLinks = (links || DEFAULT_SOCIAL_LINKS).filter(
    (link) => hasValue(link?.url)
  );

  if (activeLinks.length === 0) {
    return null;
  }

  return (
    <div className={SocialIconContainerClass}>
      {activeLinks.map((link) => {
        const Icon = ICONS[link.platform] || FaLink;
        return (
          <a
            key={`${link.platform}-${link.url}`}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={link.platform}
          >
            <Icon className={SocialIconClass} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;
