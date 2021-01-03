import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  APP_NAME,
  FB_APP_ID,
  DOMAIN,
  TWITTER_PUBLISHER_HANDLE,
} from "../config";
import { MdEmail } from "react-icons/md";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import stylesContact from "../styles/contactUs.module.css";

const ContactUs = () => {
  const head = () => (
    <Head>
      <title>Contact us - {APP_NAME}</title>
      <meta name="description" content={`Contact us page - ${APP_NAME}`} />
      <link rel="canonical" href={`${DOMAIN}/contact-us`} />
      <meta name="theme-color" content="#2c2c2c" />
      <meta name="msapplication-navbutton-color" content="#2c2c2c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2c2c2c" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${TWITTER_PUBLISHER_HANDLE}`} />
      <meta name="twitter:title" content={`Contact us - ${APP_NAME}`} />
      <meta
        name="twitter:description"
        content={`Contact us page - ${APP_NAME}`}
      />
      {/* Twitter Summary card images must be at least 120x120px */}
      <meta
        name="twitter:image:src"
        content={`${DOMAIN}/static/images/contact_us.jpg`}
      />
      <meta name="twitter:image:alt" content={`${DOMAIN}`} />
      {/* Open Graph data  */}
      <meta property="og:title" content={`Contact us - ${APP_NAME}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/contact-us`} />
      <meta
        alt={`${DOMAIN}`}
        property="og:image"
        content={`${DOMAIN}/static/images/contact_us.jpg`}
      />
      <meta
        property="og:description"
        content={`Contact us page - ${APP_NAME}`}
      />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />

      <link rel="preconnect" href={`${DOMAIN}/`} />
    </Head>
  );

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a
        style={{ textDecorationColor: "rgba(202, 28, 28, 0.945)" }}
        href={`mailto:${email}${params}`}
      >
        {children}
      </a>
    );
  };

  return (
    <React.Fragment>
      {head()}
      <div className="container mt-3 mb-5 pl-0 pr-0">
        <div className="row ml-0 mr-0">
          <div style={{ width: "100%" }}>
            <nav aria-label="breadcrumb">
              <ol
                style={{ backgroundColor: "#f3f3f3" }}
                className="breadcrumb pb-0 pt-0"
              >
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact us
                </li>
              </ol>
            </nav>
          </div>

          <div className="col-lg-12 ">
            <div
              className="row mt-2"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                paddingBottom: "25px",
              }}
            >
              <div
                style={{
                  height: "300px",
                  position: "relative",
                  width: "100%",
                }}
              >
                <img
                  alt="cover image"
                  src="/static/images/contact_us_cover.jpg"
                  style={{
                    width: "100%",
                    height: "300px",
                    position: "relative",
                    objectFit: "cover",
                  }}
                />
                <div
                  className={stylesContact.main_header}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      textAlign: "center",
                      textShadow: "3px 3px 3px #333333b0",
                    }}
                  >
                    We'd like to hear from you.
                  </h1>
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "1rem",
                      textShadow: "3px 3px 3px #333333b0",
                    }}
                  >
                    If you are looking for any Tech support, or if you have any
                    further questions, or if you want to Leave your Feedback,
                    please let us know.
                  </p>
                </div>
              </div>
              <div className="container">
                <div
                  className={stylesContact.title}
                  style={{
                    marginTop: "60px",
                    marginBottom: "60px",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <h1>Contact Us</h1>
                </div>

                <div className={`container ${stylesContact.email}`}>
                  <div style={{ marginRight: "10px" }}>
                    <MdEmail size="30px" color="rgba(202, 28, 28, 0.945) " />
                  </div>
                  <div>
                    <Mailto
                      email="support.techbotlk@gmail.com"
                      subject=""
                      body=""
                    >
                      <span className={stylesContact.Mailto}>
                        support.techbotlk@gmail.com
                      </span>
                    </Mailto>
                  </div>
                  <div>
                    <span className={stylesContact.MailtoSubText}>
                      (Tech support & questions )
                    </span>
                  </div>
                </div>
                <div className={`container ${stylesContact.email}`}>
                  <div style={{ marginRight: "10px" }}>
                    <MdEmail size="30px" color="rgba(202, 28, 28, 0.945) " />
                  </div>
                  <div>
                    <Mailto
                      email="feedback.techbotlk@gmail.com"
                      subject=""
                      body=""
                    >
                      <span className={stylesContact.Mailto}>
                        feedback.techbotlk@gmail.com
                      </span>
                    </Mailto>
                  </div>
                  <div>
                    <span className={stylesContact.MailtoSubText}>
                      (Customer feedback )
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "50px",
                  }}
                  className={`col-md-12 ${stylesContact.social_icons_class_contac_us}`}
                >
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
                    <li className={stylesContact.addBorderSocial}>
                      <a href="/">
                        <FaFacebookF size="2rem" color="#3b5998" />
                      </a>
                    </li>
                    <li className={stylesContact.addBorderSocial}>
                      <a href="/">
                        <FaInstagram size="2rem" color="#8a3ab9" />
                      </a>
                    </li>
                    <li className={stylesContact.addPadding}>
                      <a href="/">
                        <FaPinterestP size="2rem" color="#E60023" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ContactUs;
