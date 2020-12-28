import Head from "next/head";
import Link from "next/link";
import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";
import {
  mobileListPublic,
  singleMobile,
  listRelatedReviews,
  listRelatedNews,
  listRelated,
} from "../../../actions/mobile.action";
import {
  API,
  DOMAIN,
  APP_NAME,
  FB_APP_ID,
  TWITTER_AUTHOR_HANDLE,
  TWITTER_PUBLISHER_HANDLE,
} from "../../../config";
import moment from "moment";
import { BsArrowsFullscreen, BsBattery } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { MdSdStorage, MdCamera, MdRateReview, MdLaunch } from "react-icons/md";
import {
  RiCameraSwitchLine,
  RiCheckboxMultipleBlankLine,
} from "react-icons/ri";
import { FaMicrochip, FaNewspaper } from "react-icons/fa";
import { GiNetworkBars, GiProcessor } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import {
  AiOutlineSound,
  AiOutlineColumnWidth,
  AiOutlineMobile,
} from "react-icons/ai";
import styles from "../../../styles/singlemobile.module.css";
import React from "react";
import Loader from "react-loader-spinner";
import { InlineShareButtons } from "sharethis-reactjs";

/**
 * completed!
 */
const SingleBlog = ({ blog, related, relatedNews, relatedReviews }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div
        style={{
          textAlign: "center",
          top: "50%",
          bottom: "50%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "auto",
        }}
      >
        <Loader
          type="Bars"
          color="rgba(202, 28, 28, 0.945)"
          height={100}
          width={100}
          timeout={30000} //3 secs
        />
      </div>
    );
  }

  if (!blog.data) {
    return (
      <React.Fragment>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </React.Fragment>
    );
  }

  const head = () => (
    <Head>
      <title>
        {blog.data.title} Full Phone Specs - {`${APP_NAME}`}
      </title>
      <meta name="description" content={`${blog.data.mdesc}`} />
      <link rel="canonical" href={`${DOMAIN}/phones/${blog.data.slug}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${TWITTER_PUBLISHER_HANDLE}`} />
      <meta
        name="twitter:title"
        content={`${blog.data.title} Full Phone Specs - ${APP_NAME}`}
      />
      <meta name="twitter:description" content={`${blog.data.mdesc}`} />
      <meta name="twitter:creator" content={`@${TWITTER_AUTHOR_HANDLE}`} />
      {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
      <meta
        name="twitter:image:src"
        content={`${API}/mobile/photo/${blog.data.slug}`}
      />
      <meta name="twitter:image:alt" content={`${DOMAIN}`} />

      <meta
        property="og:title"
        content={`${blog.data.title} Full Phone Specs - ${APP_NAME}`}
      />
      <meta property="og:description" content={`${blog.data.mdesc}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/phones/${blog.data.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta
        property="og:image"
        content={`${API}/mobile/photo/${blog.data.slug}`}
      />
      <meta
        property="og:image:secure_url"
        content={`${API}/mobile/photo/${blog.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  //done
  const showRelatedBlogs = () => {
    return (
      <div
        className={`col-lg-12 ${styles.cards__phone} ${styles.box__sizing__phone} ${styles.side__bar__phones} pb-1`}
        style={{ marginTop: "15px" }}
      >
        {related.map((m, i) => (
          <React.Fragment key={i}>
            <div className={styles.single__card__phone}>
              <div className={styles.card__image__container__phone}>
                <Link href={`/phones/brand/${m.slug}`}>
                  <a>
                    <img
                      src={`${API}/mobile/photo/${m.slug}`}
                      alt={`${m.title}`}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.card__content__phone}>
                <Link href={`/phones/brand/${m.slug}`}>
                  <a>
                    <span>{m.title}</span>
                  </a>
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  };

  //done
  const showSideBarNews = () => {
    return relatedNews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className={styles.sidebar_news_container}>
          <div className={styles.image_news}>
            <Link href={`/news/${blog.slug}`}>
              <a style={{ textDecoration: "none", width: "100%" }}>
                <img
                  className="img img-fluid"
                  src={`${API}/news/photo/${blog.slug}`}
                  alt={blog.title}
                />
              </a>
            </Link>
          </div>
          <div
            className={styles.content_news}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content_div_news}>
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <span>{blog.title}</span>
                </a>
              </Link>
            </div>

            <div className={styles.author_div_news}>
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  //done
  const showSideBarReviews = () => {
    return relatedReviews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className={styles.sidebar_news_container}>
          <div className={styles.image_news}>
            <Link href={`/reviews/${blog.slug}`}>
              <a style={{ textDecoration: "none", width: "100%" }}>
                <img
                  className="img img-fluid"
                  src={`${API}/reviews/photo/${blog.slug}`}
                  alt={blog.title}
                />
              </a>
            </Link>
          </div>
          <div
            className={styles.content_news}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content_div_news}>
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <span>{blog.title}</span>
                </a>
              </Link>
            </div>

            <div className={styles.author_div_news}>
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  //done
  const mobileContent = (mobile) => {
    return (
      <div className="col-md-12" style={{ overflow: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <MdLaunch size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Launch
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Announced
              </th>
              <td width="70%">{mobile.launchAnnouced}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Availability
              </th>
              <td width="70%">{mobile.displayProtection}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <BsArrowsFullscreen size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Display
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Type
              </th>
              <td width="70%">{mobile.displayType}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Size
              </th>
              <td width="70%">{mobile.displaySize}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Resolution
              </th>
              <td width="70%">{mobile.displayProtection}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Protection
              </th>
              <td width="70%">{mobile.displayProtection}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <GiNetworkBars size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Network
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Technology
              </th>
              <td width="70%">{mobile.networkTechnology}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                2G bands
              </th>
              <td width="70%">{mobile.network2gband}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                3G bands
              </th>
              <td>{mobile.network3gband}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                4G bands
              </th>
              <td width="70%">{mobile.displayProtection}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                5G bands
              </th>
              <td width="70%">{mobile.network5gband}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Speed
              </th>
              <td width="70%">{mobile.networkSpeed}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Sim Type
              </th>
              <td width="70%">{mobile.networkSimType}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <GiProcessor size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Hardware
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Chipset
              </th>
              <td width="70%">{mobile.hardwareChipset}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                processor
              </th>
              <td width="70%">{mobile.hardwareProcessor}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                GPU
              </th>
              <td width="70%">{mobile.hardwareGpu}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Ram
              </th>
              <td width="70%">{mobile.hardwareRam}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Storage
              </th>
              <td width="70%">{mobile.hardwareStorage}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <GoSettings size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Software
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                OS
              </th>
              <td width="70%">{mobile.softwareOs}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <MdCamera size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Main Camera
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Details
              </th>
              <td width="70%">{mobile.mainCameraDetails}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Features
              </th>
              <td width="70%">{mobile.mainCameraFeatures}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Video
              </th>
              <td width="70%">{mobile.mainCameraVideo}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <RiCameraSwitchLine size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Selfy Camera
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Details
              </th>
              <td width="70%">{mobile.selfyCameraDetails}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Features
              </th>
              <td width="70%">{mobile.selfyCameraFeatures}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Video
              </th>
              <td width="70%">{mobile.selfyCameraVideo}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <GrConnect size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Connectivity & Sensors
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                WLAN
              </th>
              <td width="70%">{mobile.conWlan}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Bluetooth
              </th>
              <td width="70%">{mobile.conBluetooth}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                GPS
              </th>
              <td width="70%">{mobile.conGps}</td>
            </tr>
            <tr>
              <th scope="row">NFC</th>
              <td width="70%">{mobile.conNfc}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Radio
              </th>
              <td width="70%">{mobile.conRadio}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                USB
              </th>
              <td width="70%">{mobile.conUsb}</td>
            </tr>
            <tr>
              <th scope="row">Sensors</th>
              <td width="70%">{mobile.conSensors}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <BsBattery size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Battery
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Details
              </th>
              <td width="70%">{mobile.batteryDetails}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Features
              </th>
              <td width="70%">{mobile.batteryFeatures}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <AiOutlineSound size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Sounds
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Headphone
              </th>
              <td width="70%">{mobile.soundHeadphone}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Features
              </th>
              <td width="70%">{mobile.soundFeatures}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <AiOutlineColumnWidth size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Body & Design
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Weight
              </th>
              <td width="70%">{mobile.bodyWeight}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Dimension
              </th>
              <td width="70%">{mobile.bodyDimension}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Build
              </th>
              <td width="70%">{mobile.bodyBuild}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Buttons
              </th>
              <td width="70%">{mobile.bodyButtons}</td>
            </tr>
            <tr>
              <th scope="row">Resistance</th>
              <td width="70%">{mobile.bodyResistence}</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "2px solid rgba(0, 0, 0, 0.781)",
          }}
        >
          <div style={{ margin: "10px" }}>
            <AiOutlineMobile size="2rem" color="#666" />
          </div>
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontSize: "22px" }} className="font-weight-bolder">
              Product Details
            </h4>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th width="30%" scope="row">
                Colors
              </th>
              <td width="70%">{mobile.productColors}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Models
              </th>
              <td width="70%">{mobile.productModels}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Price
              </th>
              <td width="70%">{mobile.productPrice}</td>
            </tr>
            <tr>
              <th width="30%" scope="row">
                Protection
              </th>
              <td width="70%">{mobile.displayProtection}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <React.Fragment>
      {blog.data && related && relatedNews && relatedReviews ? (
        <React.Fragment>
          {head()}
          <div
            className={`container mt-3 mb-5 pl-0 pr-0 ${styles.set__container__margin}`}
          >
            <div className="row ml-0 mr-0">
              <div style={{ width: "100%" }}>
                <nav aria-label="breadcrumb">
                  <ol
                    style={{ backgroundColor: "#f3f3f3" }}
                    className="breadcrumb pt-0 pb-0"
                  >
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/phones">
                        <a>Brands</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href={`/phones/brands/${blog.data.brand.name}`}>
                        <a>{blog.data.brand.name} phones</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      You are here
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-8 pl-0 pr-0">
                <div
                  className={`${styles.main__div} row ml-0 mr-0`}
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                  }}
                >
                  <h1 className={styles.main__div__main__topic}>
                    {blog.data.title}
                  </h1>

                  <div className="col-md-12">
                    <div className="row">
                      <img
                        src={`${API}/mobile/photo/${blog.data.slug}`}
                        className={`img img-fluid col-md-4 ${styles.main__div__main_img}`}
                        alt={blog.data.title}
                      />
                      <div
                        className={`col-md-8 ${styles.featured__display_controller}`}
                      >
                        <div
                          className={`row ${styles.row__flex__control} ${styles.first__row}`}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            margin: 0,
                          }}
                        >
                          <div
                            className={`${styles.row__item} ${styles.row__item__first__left}`}
                            style={{ width: "50%", overflow: "auto" }}
                          >
                            <div
                              className={styles.featured__display}
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div style={{ margin: "10px" }}>
                                <BsArrowsFullscreen size="2rem" color="#666" />
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  margin: "10px",
                                }}
                              >
                                <span style={{ margin: 0 }}>Display</span>
                                {blog.data.fdDisplay}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${styles.row__item} ${styles.row__item__first__right}`}
                            style={{ width: "50%", overflow: "auto" }}
                          >
                            <div
                              className={styles.featured__display}
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div style={{ margin: "10px" }}>
                                <BsBattery size="2rem" color="#666" />
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  margin: "10px",
                                }}
                              >
                                <span style={{ margin: 0 }}>Battery</span>
                                {blog.data.fdBattery}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`row ${styles.row__flex__control} ${styles.second__row}`}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            margin: 0,
                          }}
                        >
                          <div
                            className={`${styles.row__item} ${styles.row__item__second__left}`}
                            style={{ width: "50%", overflow: "auto" }}
                          >
                            <div
                              className={styles.featured__display}
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div style={{ margin: "10px" }}>
                                <MdSdStorage size="2rem" color="#666" />
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  margin: "10px",
                                }}
                              >
                                <span style={{ margin: 0 }}>Storage</span>
                                {blog.data.fdStorage}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${styles.row__item} ${styles.row__item__second__right}`}
                            style={{ width: "50%", overflow: "auto" }}
                          >
                            <div
                              className={styles.featured__display}
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div style={{ margin: "10px" }}>
                                <RiCameraSwitchLine size="2rem" color="#666" />
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  margin: "10px",
                                }}
                              >
                                <span style={{ margin: 0 }}>Camera</span>
                                {blog.data.fdCamera}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`row ${styles.row__flex__control} ${styles.third__row}`}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            margin: 0,
                          }}
                        >
                          <div
                            className={`${styles.row__item__third__left} ${styles.row__item}`}
                            style={{ width: "50%", overflow: "auto" }}
                          >
                            <div
                              className={styles.featured__display}
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div style={{ margin: "10px" }}>
                                <GoSettings size="2rem" color="#666" />
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  margin: "10px",
                                }}
                              >
                                <span style={{ margin: 0 }}>Os</span>
                                {blog.data.fdOs}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${styles.row__item} ${styles.row__item__third__right}`}
                            style={{ width: "50%", overflow: "auto" }}
                          >
                            <div
                              className={styles.featured__display}
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div style={{ margin: "10px" }}>
                                <FaMicrochip size="2rem" color="#666" />
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  margin: "10px",
                                }}
                              >
                                <span style={{ margin: 0 }}>Chipset</span>
                                {blog.data.fdChipset}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 ml-3 mr-3" style={{ width: "100%" }}>
                        <InlineShareButtons
                          config={{
                            alignment: "justified", // alignment of buttons (left, center, right)
                            color: "social", // set the color of buttons (social, white)
                            enabled: true, // show/hide buttons (true, false)
                            font_size: 12, // font size for the buttons
                            labels: "cta", // button labels (cta, counts, null)
                            language: "en", // which language to use (see LANGUAGES)
                            networks: [
                              // which networks to include (see SHARING NETWORKS)
                              "facebook",
                              "twitter",
                              "pinterest",
                              "linkedin",
                              "whatsapp",
                            ],
                            padding: 10, // padding within buttons (INTEGER)

                            radius: 4, // the corner radius on each button (INTEGER)
                            show_total: false,

                            size: 30, // the size of each button (INTEGER)

                            // OPTIONAL PARAMETERS
                            url: `${DOMAIN}/phones/brand/${blog.data.slug}`, // (defaults to current url)
                            image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
                            description: "custom text", // (defaults to og:description or twitter:description)
                            title: "custom title", // (defaults to og:title or twitter:title)
                            message: "custom email text", // (only for email sharing)
                            subject: "custom email subject", // (only for email sharing)
                            username: "custom twitter handle", // (only for twitter sharing)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-2 ml-0 mr-0">
                  <div className="col-md-12">
                    <div
                      className="row"
                      style={{
                        backgroundColor: "white",
                        boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                      }}
                    >
                      <h2
                        style={{
                          lineHeight: "130%",
                          backgroundColor: "rgba(202, 28, 28, 0.945)",
                          textTransform: "capitalize",
                          fontSize: "24px",
                          fontWeight: "bold",
                          width: "100%",
                          color: "white",
                          padding: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Full Phone Specs
                      </h2>
                      {mobileContent(blog.data)}

                      <div className="container">
                        <p>
                          <strong>Disclaimer.</strong> We can not guarantee that
                          the information on this page is 100% correct.
                        </p>
                      </div>
                      <div className="container">
                        <p
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          <a
                            rel="nofollow"
                            onClick={() =>
                              window.open(blog.data.source, "_blank")
                            }
                          >
                            source
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 ml-0 mr-0">
                  <div className="col-lg-12">
                    {related.length !== 0 ? (
                      <div
                        className="row"
                        style={{
                          backgroundColor: "white",
                          boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                        }}
                      >
                        <div
                          className="col-lg-12"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            backgroundColor: "rgba(202, 28, 28, 0.945)",
                            marginBottom: "15px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              textAlign: "left",
                              width: "100%",
                            }}
                          >
                            <div style={{ margin: "10px" }}>
                              <RiCheckboxMultipleBlankLine
                                size="2rem"
                                color="#fff"
                              />
                            </div>
                            <div>
                              <h3
                                className="font-weight-bolder"
                                style={{
                                  lineHeight: "130%",
                                  textTransform: "capitalize",
                                  fontSize: "24px",
                                  fontWeight: "bold",
                                  color: "white",
                                  padding: "10px",
                                  marginBottom: 0,
                                }}
                              >
                                related phones
                              </h3>
                            </div>
                          </div>
                        </div>
                        {showRelatedBlogs()}
                        <div
                          style={{
                            height: "3px",
                            width: "100%",
                            margin: 0,
                            backgroundColor: "rgba(202, 28, 28, 0.945)",
                            marginRight: "12px",
                            marginLeft: "12px",
                          }}
                        />
                        <div style={{ width: "100%", paddingRight: "12px" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              float: "right",
                              marginBottom: "10px",
                              marginTop: "6px",
                            }}
                          >
                            <div style={{ marginRight: 0 }}>
                              <Link href={`/phones`}>
                                <a style={{ textDecoration: "none" }}>
                                  <div className={styles.view_all}>
                                    <span>view all</span>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`col-lg-4  ${styles.side__bar__single__brand__main}`}
              >
                {relatedReviews.length !== 0 ? (
                  <div
                    className={`row mr-0 ${styles.side__bar__single__brand}`}
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      className="col-md-12"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ marginRight: "5px" }}>
                        <MdRateReview size="1rem" color="#818078" />
                      </div>
                      <div style={{ width: "100%", paddingTop: 0 }}>
                        <hr
                          style={{ marginTop: "6px" }}
                          className={styles.hrText}
                          data-content="related reviews"
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-12"
                      style={{
                        paddingRight: "12px",
                        paddingLeft: "12px",
                      }}
                    >
                      {showSideBarReviews()}
                      <div
                        style={{
                          height: "3px",
                          width: "100%",
                          margin: 0,
                          backgroundColor: "rgba(202, 28, 28, 0.945)",
                        }}
                      />
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            float: "right",
                            marginBottom: "10px",
                            marginTop: "6px",
                          }}
                        >
                          <div style={{ marginRight: 0 }}>
                            <Link href={`/reviews`}>
                              <a style={{ textDecoration: "none" }}>
                                <div className={styles.view_all}>
                                  <span>view all</span>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {relatedNews.length !== 0 ? (
                  <div
                    className={`row mr-0 ${styles.side__bar__single__brand}`}
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      className="col-md-12"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ marginRight: "5px" }}>
                        <FaNewspaper size="1rem" color="#818078" />
                      </div>
                      <div style={{ width: "100%", paddingTop: 0 }}>
                        <hr
                          style={{ marginTop: "6px" }}
                          className={styles.hrText}
                          data-content="related news"
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-12"
                      style={{
                        paddingRight: "12px",
                        paddingLeft: "12px",
                      }}
                    >
                      {showSideBarNews()}
                      <div
                        style={{
                          height: "3px",
                          width: "100%",
                          margin: 0,
                          backgroundColor: "rgba(202, 28, 28, 0.945)",
                        }}
                      />
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            float: "right",
                            marginBottom: "10px",
                            marginTop: "6px",
                          }}
                        >
                          <div style={{ marginRight: 0 }}>
                            <Link href={`/news`}>
                              <a style={{ textDecoration: "none" }}>
                                <div className={styles.view_all}>
                                  <span>view all</span>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            style={{
              textAlign: "center",
              top: "50%",
              bottom: "50%",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              padding: "auto",
            }}
          >
            <Loader
              type="Bars"
              color="rgba(202, 28, 28, 0.945)"
              height={100}
              width={100}
              timeout={30000} //3 secs
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  //done
  const list = await mobileListPublic().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const paths = list.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  //done

  const blog = await singleMobile(params.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  //done
  const related = await listRelated({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  //done
  const relatedNews = await listRelatedNews({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  //done
  const relatedReviews = await listRelatedReviews({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  return {
    props: {
      blog,
      related,
      relatedNews,
      relatedReviews,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default SingleBlog;
