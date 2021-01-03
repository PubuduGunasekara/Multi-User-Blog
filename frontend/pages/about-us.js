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

const AboutUs = () => {
  const head = () => (
    <Head>
      <title>About us - {APP_NAME}</title>
      <meta name="description" content={`About us page - ${APP_NAME}`} />
      <link rel="canonical" href={`${DOMAIN}/about-us`} />
      <meta name="theme-color" content="#2c2c2c" />
      <meta name="msapplication-navbutton-color" content="#2c2c2c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2c2c2c" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${TWITTER_PUBLISHER_HANDLE}`} />
      <meta name="twitter:title" content={`About us - ${APP_NAME}`} />
      <meta
        name="twitter:description"
        content={`About us page - ${APP_NAME}`}
      />
      {/* Twitter Summary card images must be at least 120x120px */}
      <meta
        name="twitter:image:src"
        content={`${DOMAIN}/static/images/about_us.jpg`}
      />
      <meta name="twitter:image:alt" content={`${DOMAIN}`} />
      {/* Open Graph data  */}
      <meta property="og:title" content={`About us - ${APP_NAME}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/about-us`} />
      <meta
        alt={`${DOMAIN}`}
        property="og:image"
        content={`${DOMAIN}/static/images/about_us.jpg`}
      />
      <meta property="og:description" content={`About us page - ${APP_NAME}`} />
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
                  About us
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
                  src="/static/images/about_us_cover.jpg"
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
                    We are new to this industry. But our hard work will paid of
                    one day..
                  </h1>
                  {/* <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "1rem",
                    }}
                  >
                    If you are looking for any Tech support, or if you have any
                    further questions, or if you want to Leave your Feedback,
                    please let us know.
                  </p> */}
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
                  <h1>About Us</h1>
                </div>
                <div className={stylesContact.aboutUsContent}>
                  <p>
                    Welcome to TechbotLK, your best source for all tech news,
                    reviews, phone specifications and many more. We're dedicated
                    to giving you the very best , with a focus on
                    quality,readability,accuracy, and up to date,news and
                    reviews. Our mission at TechbotLK is to provide the viewers
                    with trustworthy content that matter the most. TechbotLK is
                    a very new company which is founded by{" "}
                    <a href={`${DOMAIN}/profile/pubudu%20praneeth`}>
                      {" "}
                      Pubudu praneeth
                    </a>
                    .We are working to become the industry's one of the most
                    trusted website.You can join our social medias as a part of
                    growing social communities. if you have any complains,
                    feedback or, any question, please visit to our{" "}
                    <a href={`${DOMAIN}/contact-us`}>contact us</a> page.
                  </p>
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
export default AboutUs;
