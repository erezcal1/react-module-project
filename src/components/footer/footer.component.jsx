import "./footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <div
      className={`navbar navbar-expand-lg navbar-light mb-2 ${
        loggedIn ? "bg-info" : "bg-warning"
      } footer-dark`}
    >
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Location</h3>
              <ul>
                <li>
                  Beit Hadfus 1,Delek Paz gas station,Givat Shaul, Jerusalem
                </li>
                <li>
                  Call Now:{" "}
                  <a href="tel:1-800-31-32-33" title="Call Now">
                    1-800-31-32-33
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Opening Hours</h3>
              <ul>
                <li>Sunday - Thursday : 7:30AM - 5PM</li>
                <li>Friday : 7:30AM - 1PM</li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Shop some of out tires online</h3>
              <br />
              <link to="https://www.tireclub.co.il/stores/rondotires/">
                {/* Rondo Tires */}
              </link>
              <a href="https://www.tireclub.co.il/stores/rondotires/">
                Rondo Tires
              </a>
            </div>
            <div className="col item social">
              <i className="icon ion-social-facebook"></i>
              <i className="icon ion-social-twitter"></i>
              <i className="icon ion-social-snapchat"></i>
              <i className="icon ion-social-instagram"></i>
            </div>
          </div>
          <p className="copyright">Erez Calderon © 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
