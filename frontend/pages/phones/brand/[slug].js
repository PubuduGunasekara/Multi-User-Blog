import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useState, useEffect } from "react";
import {
  singleMobile,
  listRelatedReviews,
  listRelatedNews,
  listRelated,
} from "../../../actions/mobile.action";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../../config";
import moment from "moment";
import { BsArrowsFullscreen, BsBattery } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import {
  MdSdStorage,
  MdCamera,
  MdRateReview,
  MdLaunch,
  MdNavigateNext,
} from "react-icons/md";
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

/**
 * completed!
 */
const SingleBlog = ({ blog }) => {
  const [related, setRelated] = useState([]);
  const [relatedNews, setRelatedNews] = useState([]);
  const [relatedReviews, setRelatedReviews] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });

    listRelatedNews({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelatedNews(data);
      }
    });

    listRelatedReviews({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelatedReviews(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  const head = () => (
    <Head>
      <link rel="stylesheet" href="/static/css/singlemobile.css" />
      <title>
        {blog.title} - Full Phone Specs | {`${APP_NAME}`}
      </title>
      <meta name="description" content={`${blog.mdesc}`} />
      <link rel="canonical" href={`${DOMAIN}/phones/${blog.slug}`} />
      <meta
        property="og:title"
        content={`${blog.title} - Full Phone Specs | ${APP_NAME}`}
      />
      <meta property="og:description" content={`${blog.mdesc}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/phones/${blog.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/mobile/photo/${blog.slug}`} />
      <meta
        property="og:image:secure_url"
        content={`${API}/mobile/photo/${blog.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  const showRelatedBlogs = () => {
    return (
      <div
        className="col-lg-12 cards__phone box__sizing__phone side__bar__phones pb-1"
        style={{ marginTop: "15px" }}
      >
        {related.map((m, i) => (
          <React.Fragment key={i}>
            <div className="single__card__phone">
              <div className="card__image__container__phone">
                <Link href={`/phones/brand/${m.slug}`}>
                  <a>
                    <img
                      src={`${API}/mobile/photo/${m.slug}`}
                      alt={`${m.title}`}
                    />
                  </a>
                </Link>
              </div>
              <div className="card__content__phone">
                <Link href={`/phones/brand/${m.slug}`}>
                  <a>
                    <h1>{m.title}</h1>
                  </a>
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  };

  const showSideBarNews = () => {
    return relatedNews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className="sidebar_news_container">
          <div className="image_news">
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
            className="content_news"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content_div_news">
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className="author_div_news">
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const showSideBarReviews = () => {
    return relatedReviews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className="sidebar_news_container">
          <div className="image_news">
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
            className="content_news"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content_div_news">
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className="author_div_news">
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

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
            <h2
              title="Phone's released details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Launch
            </h2>
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
            <h2
              title="Phone's display details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Display
            </h2>
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
            <h2
              title="Phone's network details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Network
            </h2>
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
            <h2
              title="Phone's hardware details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Hardware
            </h2>
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
            <h2
              title="Phone's software details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Software
            </h2>
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
            <h2
              title="Phone's main camera details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Main Camera
            </h2>
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
            <h2
              title="Phone's selfy details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Selfy Camera
            </h2>
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
            <h2
              title="Phone's conectivity and sensor details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Connectivity & Sensors
            </h2>
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
            <h2
              title="Phone's battery details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Battery
            </h2>
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
            <h2
              title="Phone's sound details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Sounds
            </h2>
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
            <h2
              title="Phone's body and design details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Body & Design
            </h2>
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
            <h2
              title="Product details"
              style={{ fontSize: "22px" }}
              className="font-weight-bolder"
            >
              Product Details
            </h2>
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
      {head()}
      <Layout>
        <div className="container mt-5 mb-5 pl-0 pr-0 set__container__margin">
          <div className="row ml-0 mr-0">
            <div className="col-lg-8 pl-0 pr-0">
              <div
                className="row main__div ml-0 mr-0"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                }}
              >
                <h1 title="Smartphone Name" className="main__div__main__topic">
                  {blog.title}
                </h1>
                <div className="col-md-12">
                  <div className="row">
                    <img
                      src={`${API}/mobile/photo/${blog.slug}`}
                      className="img img-fluid col-md-4 main__div__main_img"
                      alt={blog.title}
                      title="Phone Image"
                    />
                    <div className="col-md-8 featured__display-controller">
                      <div
                        className="row first__row row__flex__control"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          margin: 0,
                        }}
                      >
                        <div
                          className="row__item row__item__first__left"
                          style={{ width: "50%", overflow: "auto" }}
                        >
                          <div
                            title="Display highlights"
                            className="featured__display"
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
                              <h1 style={{ margin: 0 }}>Display</h1>
                              {blog.fdDisplay}
                            </div>
                          </div>
                        </div>
                        <div
                          className="row__item row__item__first__right"
                          style={{ width: "50%", overflow: "auto" }}
                        >
                          <div
                            title="Battery highlights"
                            className="featured__display"
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
                              <h1 style={{ margin: 0 }}>Battery</h1>
                              {blog.fdBattery}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="row row__flex__control second__row"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          margin: 0,
                        }}
                      >
                        <div
                          className="row__item row__item__second__left"
                          style={{ width: "50%", overflow: "auto" }}
                        >
                          <div
                            title="Storage highlights"
                            className="featured__display"
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
                              <h1 style={{ margin: 0 }}>Storage</h1>
                              {blog.fdStorage}
                            </div>
                          </div>
                        </div>
                        <div
                          className="row__item row__item__second__right"
                          style={{ width: "50%", overflow: "auto" }}
                        >
                          <div
                            title="Camera highlights"
                            className="featured__display"
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
                              <h1 style={{ margin: 0 }}>Camera</h1>
                              {blog.fdCamera}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="row row__flex__control third__row"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          margin: 0,
                        }}
                      >
                        <div
                          className="row__item row__item__third__left"
                          style={{ width: "50%", overflow: "auto" }}
                        >
                          <div
                            title="Operating System highlights"
                            className="featured__display"
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
                              <h1 style={{ margin: 0 }}>Os</h1>
                              {blog.fdOs}
                            </div>
                          </div>
                        </div>
                        <div
                          className="row__item row__item__third__right"
                          style={{ width: "50%", overflow: "auto" }}
                        >
                          <div
                            title="Chipset highlights"
                            className="featured__display"
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
                              <h1 style={{ margin: 0 }}>Chipset</h1>
                              {blog.fdChipset}
                            </div>
                          </div>
                        </div>
                      </div>
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
                    <h1
                      title="phone specifications"
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
                    </h1>
                    {mobileContent(blog)}
                    <div title="Disclaimer" className="container">
                      <p>
                        <strong>Disclaimer.</strong> We can not guarantee that
                        the information on this page is 100% correct.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 ml-0 mr-0">
                <div className="col-lg-12">
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
                          <h2
                            title="related phones"
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
                          </h2>
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
                    <div
                      title="view all smart phone brands"
                      style={{ width: "100%", marginRight: "15px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          float: "right",
                          marginBottom: "10px",
                        }}
                      >
                        <div style={{ marginRight: 0 }}>
                          <Link href={`/phones`}>
                            <a>
                              <h2
                                className="font-weight-bolder"
                                style={{
                                  lineHeight: "130%",
                                  textTransform: "capitalize",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  color: "#383838",
                                  padding: "10px",
                                  paddingRight: 0,
                                  marginBottom: 0,
                                }}
                              >
                                all brands
                              </h2>
                            </a>
                          </Link>
                        </div>
                        <div style={{ paddingTop: "8px", marginLeft: 0 }}>
                          <Link href={`/phones`}>
                            <a>
                              <MdNavigateNext size="1.5rem" color="#000" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 side__bar__single__brand__main">
              <div
                className="row mr-0 side__bar__single__brand"
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
                      className="hrText"
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
                      }}
                    >
                      <div style={{ marginRight: 0 }}>
                        <Link href={`/reviews`}>
                          <a>
                            <h2
                              className="font-weight-bolder"
                              style={{
                                lineHeight: "130%",
                                textTransform: "capitalize",
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#383838",
                                padding: "10px",
                                paddingRight: 0,
                                marginBottom: 0,
                              }}
                            >
                              view all
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <div style={{ paddingTop: "8px", marginLeft: 0 }}>
                        <Link href={`/reviews`}>
                          <a>
                            <MdNavigateNext size="1.5rem" color="#000" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row mr-0 side__bar__single__brand"
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
                      className="hrText"
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
                      }}
                    >
                      <div style={{ marginRight: 0 }}>
                        <Link href={`/news`}>
                          <a>
                            <h2
                              className="font-weight-bolder"
                              style={{
                                lineHeight: "130%",
                                textTransform: "capitalize",
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#383838",
                                padding: "10px",
                                paddingRight: 0,
                                marginBottom: 0,
                              }}
                            >
                              view all
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <div style={{ paddingTop: "8px", marginLeft: 0 }}>
                        <Link href={`/news`}>
                          <a>
                            <MdNavigateNext size="1.5rem" color="#000" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};
//this method exectes at the server side. query is same as the router . in server side slugcan be access thruogh query, in client side it can be access through router use JSON.stringify()
SingleBlog.getInitialProps = ({ query }) => {
  return singleMobile(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data, query };
    }
  });
};

export default withRouter(SingleBlog);
