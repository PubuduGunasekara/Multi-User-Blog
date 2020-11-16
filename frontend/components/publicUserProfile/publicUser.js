import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { userPublicProfile } from "../../actions/userProfile.action";
import { API } from "../../config";
import React from "react";
import styles from "../../styles/publicUser.module.css";
import moment from "moment";

/**
 * completed!
 */
const publicUserProfile = (props) => {
  const [profile, setProfile] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadProfile(props.username);
  }, []);

  const loadProfile = (username) => {
    userPublicProfile(username).then((data) => {
      if (data.error) {
        console.log("errorrrr" + data.error + " " + username);
      } else {
        setProfile(data.data.user);
        setReviews(data.data.allReviewsFromUser);
        setNews(data.data.allNewsFromUser);
      }
    });
  };

  const head = () => (
    <Head>
      <title>All mobile phone brands </title>
    </Head>
  );

  /**reviews pagination states */
  const [currentPageReview, setCurrentPageReview] = useState(1);
  const [postPerPageReview] = useState(10);
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
  const [postPerPageNews] = useState(10);
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
                    By {m.postedBy.username} | {moment(m.updatedAt).fromNow()}
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
                    By {m.postedBy.username} | {moment(m.updatedAt).fromNow()}
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
              src={`${API}/user/photo/${props.username}`}
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
      {head()}
      <div className="container mt-5 mb-5 pl-0 pr-0">
        <div className="row ml-0 mr-0">
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
  );
};

export default publicUserProfile;
