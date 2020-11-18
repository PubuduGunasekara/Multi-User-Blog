import Head from "next/head";
import Link from "next/link";
import { DOMAIN } from "../config";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from "../styles/footer.module.css";

const FooterComponent = () => {
  return (
    <div>
      <div>
        <Head>
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        </Head>
      </div>
      <footer style={{ background: "#2c2c2c" }} className="footer">
        <div
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            marginRight: 0,
            marginLeft: 0,
            marginBottom: "10px",
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="row"
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              marginRight: 0,
              marginLeft: 0,
            }}
          >
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <Link href="/">
                <img
                  alt="techbot.com"
                  style={{ cursor: "pointer" }}
                  className="img img-fluid"
                  src={`/static/images/logo.png`}
                />
              </Link>
            </div>

            <div
              className={`col-md-3 ${styles.footer_list_items}`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1 className={styles.footer_headers}>mobiles</h1>
              <Link href="/">
                <a>samsung</a>
              </Link>
              <Link href="/">
                <a>apple</a>
              </Link>
              <Link href="/">
                <a>huawei</a>
              </Link>
              <Link href="/">
                <a>xiaomi</a>
              </Link>
              <Link href="/">
                <a>one plus</a>
              </Link>
              <Link href="/">
                <a>sony</a>
              </Link>
              <Link href="/">
                <a>nokia</a>
              </Link>
              <Link href="/">
                <a>view all</a>
              </Link>
            </div>
            <div
              className={`col-md-3 ${styles.footer_list_items}`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1 className={styles.footer_headers}>quick links</h1>
              <Link href="/">
                <a>home</a>
              </Link>
              <Link href="/">
                <a>news</a>
              </Link>
              <Link href="/">
                <a>reviews</a>
              </Link>
              <Link href="/">
                <a>mobiles</a>
              </Link>
              <Link href="/">
                <a>site map</a>
              </Link>
              <Link href="/">
                <a>about us</a>
              </Link>
              <Link href="/">
                <a>contact us</a>
              </Link>
            </div>
            <div className={`col-md-3 ${styles.social_icons_class}`}>
              <h1 className={styles.footer_headers}>follow us on</h1>
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
          </div>
          <hr />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#1E1E1E",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <div style={{ float: "left" }}>
            <p style={{ color: "#4e4e4e" }}>
              @ 2020&nbsp;{" "}
              <Link href="#">
                <a style={{ color: "#4e4e4e", textDecoration: "underline" }}>
                  techbot.com
                </a>
              </Link>
            </p>
          </div>
          <div className={styles.copyright_section} style={{ float: "right" }}>
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              <Link href="#">
                <a>home</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>news</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>reviews</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>mobiles</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>site map</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>about us</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>contact us</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>terms of use</a>
              </Link>
              &nbsp;&nbsp;
              <Link href="/">
                <a>privacy policy</a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
