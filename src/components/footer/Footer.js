import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faYelp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <h1>CopyRight @ 2024 Ivan Fountain Service. All Rights Reserved.</h1>
        <h2> | </h2>
        <a href="https://www.facebook.com/Ivanfountainservice/">
          <FontAwesomeIcon icon={faFacebookSquare} className="white-icon" />
        </a>
        <a href="https://www.yelp.com/biz/ivan-fountain-service-murrieta">
          <FontAwesomeIcon icon={faYelp} className="white-icon" />
        </a>
        <h2> | </h2>

        <h1> (951) 837-8384 </h1>
      </div>
      <div className="right-side">
        <a href="https://yourpersonalwebdev.com/">
          <h2> Site Design</h2>
        </a>
      </div>
    </div>
  );
};
export default Footer;
