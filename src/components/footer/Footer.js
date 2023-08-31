import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <h1>CopyRight @ 2014 Ivan Fountain Service </h1>
        <h2> | </h2>
        <a href="/">
          <FontAwesomeIcon icon={faFacebookSquare} className="white-icon" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagramSquare} className="white-icon" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faYelp} className="white-icon" />
        </a>
        <h2> | </h2>

        <h1> (951) 837-8384 </h1>
      </div>
      <div className="right-side">
        <a href="https://aldahir-cornejo-portfolio.vercel.app/">
          <h2> Site Design</h2>
        </a>
      </div>
    </div>
  );
};
export default Footer;
