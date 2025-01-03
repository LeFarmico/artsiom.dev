import "./HeaderCardStyle.css";
import MailIcon from "../icon/MailIcon";
import GitHubIcon from "../icon/GithubIcon";
import LinkedinIcon from "../icon/LinkedinIcon";
import AndroidIcon from "../icon/AndroidIcon";
import InstagramIcon from "../icon/InstagramIcon";
import SpotifyIcon from "../icon/SpotifyIcon";
import TelegramIcon from "../icon/TelegramIcon";
import { TypeAnimation } from "react-type-animation";

function HeaderCard({
  greetingMessage,
  name,
  introduction,
  gitHubUrl,
  linkedinUrl,
  email,
  spotifyUrl,
  instagramUrl,
  telegramUrl,
}) {
  return (
    <div className="header-card">
      <div className="top-content">
        <div className="name">{name}</div>
        <AndroidIcon />
      </div>

      {/* Bottom Left Corner - Greeting Message and Social Links */}
      <div className="bottom-content">
        <div className="introduction-content">
          <TypeAnimation
            className="greeting"
            sequence={["Hello World!", 500, greetingMessage]}
            wrapper="span"
            speed={50}
          />

          <div className="introduction">{introduction}</div>
        </div>

        <div className="social-icons">
          <a href={gitHubUrl}>
            <GitHubIcon />
          </a>
          <a href={linkedinUrl}>
            <LinkedinIcon />
          </a>
          <a href={email}>
            <MailIcon />
          </a>
          <a href={spotifyUrl}>
            <SpotifyIcon />
          </a>
          <a href={instagramUrl}>
            <InstagramIcon />
          </a>
          <a href={telegramUrl}>
            <TelegramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
