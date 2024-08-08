import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faYelp } from "@fortawesome/free-brands-svg-icons";
import { logo } from "../../assets/index.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand">
          <h2 className="brand-name">© 2025 Ivan Fountain Service</h2>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/Ivanfountainservice/"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
            className="social-link"
          >
            <FontAwesomeIcon icon={faYelp} />
          </a>
        </div>

        <div className="powered-by">
          <p>Powered By:</p>
          <a href="https://www.seodevleads.com/" className="powered-link">
            <img src={logo} alt="SEODevLeads Logo" className="powered-logo" />
            <span>SEODevLeads.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
