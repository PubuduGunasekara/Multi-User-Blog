import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { API, APP_NAME, FB_APP_ID, DOMAIN } from "../../config";
import styles from "../../styles/publicUser.module.css";
import moment from "moment";
import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";

/**
 * completed!
 */
const publicUserProfile = (props) => {
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
          timeout={10000} //3 secs
        />
      </div>
    );
  }
  if (props.profile.profile.data.user == null) {
    return (
      <React.Fragment>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </React.Fragment>
    );
  }

  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadProfile(props.profile.profile.data);
  }, []);

  const loadProfile = (data) => {
    setProfile(data.user);
    setReviews(data.reviews);
    setNews(data.news);
  };

  const head = () => (
    <Head>
      <title>{APP_NAME} - Team</title>
      <meta
        name="description"
        content={`${APP_NAME} - List all news, reviews, mobile phones related to #.`}
      />
      <link rel="canonical" href={`${DOMAIN}/tag/`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TechbotL" />
      <meta name="twitter:title" content={`${APP_NAME} -`} />
      <meta
        name="twitter:description"
        content={`${APP_NAME} - List all news, reviews, mobile phones related to .`}
      />
      <meta
        alt="Photo by Sam Loyd on Unsplash"
        name="twitter:image"
        content={`${DOMAIN}/static/images/singleBrand_cover.jpg`}
      />

      <meta property="og:title" content={`${APP_NAME} - `} />
      <meta
        property="og:description"
        content={`${APP_NAME} - List all news, reviews, mobile phones related to .`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/tag/`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta
        alt="Photo by Sam Loyd on Unsplash"
        property="og:image"
        content={`${DOMAIN}/static/images/singleBrand_cover.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />

      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  /**reviews pagination states */
  const [currentPageReview, setCurrentPageReview] = useState(1);
  const [postPerPageReview] = useState(30);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPostReview = currentPageReview * postPerPageReview;
  const indexofFirstPostReview = indexofLastPostReview - postPerPageReview;
  const currentPostReview = reviews.slice(
    indexofFirstPostReview,
    indexofLastPostReview
  );
  const lastPageReview = reviews.length / postPerPageReview;

  //change the page
  const paginateReview = (pageNumberReview) => {
    setCurrentPageReview(pageNumberReview);
  };
  const nextPageReview = () => {
    setCurrentPageReview(currentPageReview + 1);
  };
  const previousPageReview = () => {
    setCurrentPageReview(currentPageReview - 1);
  };

  /**news pagination states */
  const [currentPageNews, setCurrentPageNews] = useState(1);
  const [postPerPageNews] = useState(30);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPostNews = currentPageNews * postPerPageNews;
  const indexofFirstPostNews = indexofLastPostNews - postPerPageNews;
  const currentPostNews = news.slice(indexofFirstPostNews, indexofLastPostNews);
  const lastPageNews = news.length / postPerPageNews;

  //change the page
  const paginateNews = (pageNumberNews) => {
    setCurrentPageNews(pageNumberNews);
  };
  const nextPageNews = () => {
    setCurrentPageNews(currentPageNews + 1);
  };
  const previousPageNews = () => {
    setCurrentPageNews(currentPageNews - 1);
  };

  const Pagination = (
    postsPerPage,
    totalPosts,
    paginate,
    nextPage,
    previousPage,
    curretPageForStyle,
    lastPage
  ) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className="pagination justify-content-center flex-wrap">
          <li
            className={
              "page-item" + (curretPageForStyle === 1 ? " disabled" : "")
            }
          >
            <a className="page-link" onClick={() => previousPage()} href="#">
              PREV
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                curretPageForStyle === number ? "active" : "" + " page-item"
              }
            >
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
          <li
            className={
              "page-item" + (curretPageForStyle < lastPage ? "" : " disabled")
            }
          >
            <a className="page-link" onClick={() => nextPage()} href="#">
              NEXT
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  const showReviews = () => {
    return currentPostReview.map((m, i) => (
      <React.Fragment key={i}>
        <div className={styles.single__card}>
          <div className={styles.card__image__container}>
            <Link href={`/reviews/${m.slug}`}>
              <a>
                <div className={styles.overlay}></div>
                <img
                  src={`${API}/reviews/photo/${m.slug}`}
                  alt={`${m.title}`}
                />
              </a>
            </Link>
          </div>
          <div className={styles.card__content}>
            <Link href={`/reviews/${m.slug}`}>
              <a>
                <div className={styles.review_title}>
                  <h1>{m.title}</h1>
                </div>
                <div className={styles.author}>
                  <span>
                    By {m.postedBy.name} | {moment(m.updatedAt).fromNow()}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const showNews = () => {
    return currentPostNews.map((m, i) => (
      <React.Fragment key={i}>
        <div className={styles.single__card}>
          <div className={styles.card__image__container}>
            <Link href={`/news/${m.slug}`}>
              <a>
                <div className={styles.overlay}></div>
                <img src={`${API}/news/photo/${m.slug}`} alt={`${m.title}`} />
              </a>
            </Link>
          </div>
          <div className={styles.card__content}>
            <Link href={`/news/${m.slug}`}>
              <a>
                <div className={styles.review_title}>
                  <h1>{m.title}</h1>
                </div>
                <div className={styles.author}>
                  <span>
                    By {m.postedBy.name} | {moment(m.updatedAt).fromNow()}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const showProfile = () => (
    <React.Fragment>
      <div
        className="row"
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            height: "10px",
            width: "100%",
            margin: 0,
            backgroundColor: "rgba(202, 28, 28, 0.945)",
          }}
        />
        <div className={styles.public_profile_main_wrapper}>
          <div>
            <img
              src={`${API}/user/photo/${profile.username}`}
              alt="Avatar"
              className={styles.avatar}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.public_profile_name}>
              <h1>{profile.name}</h1>
            </div>
            <div className={styles.public_profile_occupation}>
              <h1>
                Email:{" "}
                <span style={{ color: "rgba(0, 0, 0, 0.781)" }}>
                  {profile.publishedEmail}
                </span>{" "}
              </h1>
            </div>
            <div className={styles.public_profile_occupation}>
              <h1>
                Occupation:{" "}
                <span style={{ color: "rgba(0, 0, 0, 0.781)" }}>
                  {profile.occupation}
                </span>{" "}
              </h1>
            </div>
            <div className={styles.public_profile_occupation}>
              <h1>
                Since:{" "}
                <span style={{ color: "rgba(0, 0, 0, 0.781)" }}>
                  {moment(profile.createdAt).format("LL")}
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "97%",
            height: "2px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        ></hr>
        <div className={styles.public_profile_secondary_wrapper}>
          <h1>A little about me</h1>
          <div>
            <p>{profile.about}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {profile && news && reviews ? (
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
                      Team
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {profile.username}
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="col-lg-12">
                {showProfile()}

                <div
                  className="row mt-2"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                  }}
                >
                  <div
                    style={{
                      height: "10px",
                      width: "100%",
                      margin: 0,
                      backgroundColor: "rgba(202, 28, 28, 0.945)",
                    }}
                  />
                  <div className={styles.public_profile_secondary_wrapper}>
                    <h1>Recent Reviews by {profile.name}</h1>
                  </div>
                  <hr
                    style={{
                      width: "97%",
                      height: "2px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  ></hr>
                  <div className={`${styles.box__sizing} ${styles.cards}`}>
                    {showReviews()}
                  </div>
                  <div style={{ width: "100%" }}>
                    {Pagination(
                      postPerPageReview,
                      reviews.length,
                      paginateReview,
                      nextPageReview,
                      previousPageReview,
                      currentPageReview,
                      lastPageReview
                    )}
                  </div>
                  <hr
                    style={{
                      width: "97%",
                      height: "2px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  ></hr>
                  <div className={styles.public_profile_secondary_wrapper}>
                    <h1>Recent News by {profile.name}</h1>
                  </div>
                  <hr
                    style={{
                      width: "97%",
                      height: "2px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  ></hr>
                  <div className={`${styles.box__sizing} ${styles.cards}`}>
                    {showNews()}
                  </div>
                  <div style={{ width: "100%" }}>
                    {Pagination(
                      postPerPageNews,
                      news.length,
                      paginateNews,
                      nextPageNews,
                      previousPageNews,
                      currentPageNews,
                      lastPageNews
                    )}
                  </div>
                </div>
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

export default publicUserProfile;
