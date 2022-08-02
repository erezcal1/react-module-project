import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationPin,
  faClock,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

import "./footer.css";
const FooterComponent = () => {
  return (
    <footer>
      <div id="site-top-container">
        <div className="logos">
          <div className="site-top-logo">
            <div className="site-top-info">
              <div id="site-top-phone">
                <FontAwesomeIcon icon={faPhone} />
                <p className="mt-4">Call us Now!</p>
                <a href="tel:1-800-31-32-33" title="Call Now">
                  1-800-31-32-33
                </a>
              </div>
              <div id="site-top-mail">
                <FontAwesomeIcon icon={faLocationPin} />
                <p className="mt-4">
                  Beit Hadfus 1,Delek Paz gas station,
                  <br />
                  Givat Shaul, Jerusalem
                </p>
              </div>
              <div id="site-top-hours">
                <FontAwesomeIcon icon={faClock} />
                <p className="mt-4">Sunday - Thursday</p>
                <p>7:30AM - 5PM</p>
                <p>Friday</p>
                <p>7:30AM - 1PM</p>
              </div>
              <div id="site-top-fb">
                <FontAwesomeIcon icon={faShop} />
                <p className="mt-4">
                  Shop some of out tires online
                  <br />
                  <link to="https://www.tireclub.co.il/stores/rondotires/">
                    {/* Rondo Tires */}
                  </link>
                  <a href="https://www.tireclub.co.il/stores/rondotires/">
                    Rondo Tires
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p id="copyright">Erez Calderon ©️ 2022</p>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
