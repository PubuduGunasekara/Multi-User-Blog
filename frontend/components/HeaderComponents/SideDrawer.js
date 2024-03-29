import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from "../../styles/Header.module.css";

/**
 * completed!
 */
const sideDrawer = (props) => {
  let drawerClasses = `${styles.side_drawer}`;

  if (props.show) {
    drawerClasses = `${styles.side_drawer} ${styles.open}`;
  }
  return (
    <div>
      <div className={drawerClasses}>
        <div style={{ padding: 0, margin: 0, textAlign: "center" }}>
          <Link href="/">
            <img
              alt="techbot.com"
              style={{
                padding: 0,
                margin: 0,
                cursor: "pointer",
                textAlign: "center",
              }}
              className="img img-fluid"
              src={`/static/images/logo_techbotlk.png`}
            />
          </Link>
        </div>
        <div className="container">
          <hr style={{ backgroundColor: "white" }} />
        </div>
        <nav className="container">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <a>Reviews</a>
              </Link>
            </li>
            <li>
              <Link href="/phones">
                <a>Mobile Phones</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <hr style={{ backgroundColor: "white" }} />
        </div>
        <div className={styles.side_drawer__footer}>
          <div>
            <ul
              style={{
                paddingLeft: 0,
                paddingRight: 0,
                marginBottom: 0,
                paddingBottom: 0,
                listStyle: "none",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <li>
                <a href="/">
                  <FaFacebookF size="2rem" color="#666" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram size="2rem" color="#666" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaPinterestP size="2rem" color="#666" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaYoutube size="2rem" color="#666" />
                </a>
              </li>
            </ul>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/privacy-policy">
                  <a>Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">
                  <a>Terms and conditions</a>
                </Link>
              </li>
            </ul>
          </nav>
          <p>
            Copyrigh @2020&nbsp;<a href="/">techbotlk.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default sideDrawer;
