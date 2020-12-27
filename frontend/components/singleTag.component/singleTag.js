import { useState, useEffect } from "react";
import Head from "next/head";
import { API, APP_NAME, DOMAIN, FB_APP_ID } from "../../config";
import React from "react";
import styles from "../../styles/tagPageStyles.module.css";
import moment from "moment";
import DefaultErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";

/**
 * completed!
 */
const singleTag = (props) => {
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
  if (props.singleTag.tag.data.tag == null) {
    return (
      <React.Fragment>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </React.Fragment>
    );
  }

  const [tag, setTag] = useState([]);
  const [news, setNews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    loadProfile(props.singleTag.tag.data);
  }, []);

  const loadProfile = (data) => {
    setTag(data.tag);
    setReviews(data.reviews);
    setNews(data.news);
    setMobiles(data.mobiles);
  };

  const head = () => (
    <Head>
      <title>{tag.name ? `${APP_NAME} - ${tag.name}` : `${APP_NAME}`}</title>
      <meta
        name="description"
        content={`${APP_NAME} - List all news, reviews, mobile phones related to #${tag.name}.`}
      />
      <link rel="canonical" href={`${DOMAIN}/tag/${tag.slug}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TechbotL" />
      <meta name="twitter:title" content={`${APP_NAME} - ${tag.name}`} />
      <meta
        name="twitter:description"
        content={`${APP_NAME} - List all news, reviews, mobile phones related to #${tag.name}.`}
      />
      <meta
        alt="Photo by Sam Loyd on Unsplash"
        name="twitter:image"
        content={`${DOMAIN}/static/images/singleBrand_cover.jpg`}
      />

      <meta property="og:title" content={`${APP_NAME} - ${tag.name}`} />
      <meta
        property="og:description"
        content={`${APP_NAME} - List all news, reviews, mobile phones related to #${tag.name}.`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/tag/${tag.slug}`} />
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

  const showTagName = () => (
    <React.Fragment>
      <div className={styles.tag_name}>
        <h1>#{tag.name}</h1>
      </div>
    </React.Fragment>
  );

  /**mobile pagination states */
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPost = mobiles.slice(indexofFirstPost, indexofLastPost);
  const lastPage = mobiles.length / postPerPage;

  //change the page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  /**reviews pagination states */
  const [currentPageReview, setCurrentPageReview] = useState(1);
  const [postPerPageReview] = useState(20);
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
  const [postPerPageNews] = useState(20);
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
  const showMobiles = () => {
    return currentPost.map((m, i) => (
      <React.Fragment key={i}>
        <div title="mobile phone" className={styles.single__card__mobile}>
          <div className={styles.card__image__container__mobile}>
            <Link href={`/phones/brand/${m.slug}`}>
              <a>
                <img src={`${API}/mobile/photo/${m.slug}`} alt={`${m.title}`} />
              </a>
            </Link>
          </div>
          <div className={styles.card__content__mobile}>
            <Link href={`/phones/brand/${m.slug}`}>
              <a>
                <span>{m.title}</span>
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
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
                  <span>{m.title}</span>
                </div>
                <div className={styles.author}>
                  <em style={{ fontStyle: "normal", fontSize: "10px" }}>
                    By {m.postedBy.username} | {moment(m.updatedAt).fromNow()}
                  </em>
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
                  <span>{m.title}</span>
                </div>
                <div className={styles.author}>
                  <em style={{ fontStyle: "normal", fontSize: "10px" }}>
                    By {m.postedBy.username} | {moment(m.updatedAt).fromNow()}
                  </em>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      {tag && reviews && news && mobiles ? (
        <React.Fragment>
          {head()}
          <div className="container mt-3 mb-5 pl-0 pr-0">
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
                    <li className="breadcrumb-item active" aria-current="page">
                      Tag
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      #{tag.name}
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="col-lg-12">
                <div
                  className="row mb-2"
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
                  {showTagName()}
                </div>

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
                  {mobiles.length !== 0 ? (
                    <React.Fragment>
                      <div className={styles.subtitle}>
                        <h2>
                          <span style={{ color: "rgba(202, 28, 28, 0.945)" }}>
                            #{tag.name}
                          </span>{" "}
                          related mobile phones
                        </h2>
                      </div>
                      <hr
                        style={{
                          height: "2px",
                          width: "95%",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      ></hr>
                      <div
                        className={`${styles.cards__mobile} ${styles.box__sizing__mobile}`}
                      >
                        {showMobiles()}
                      </div>
                      <div style={{ width: "100%" }}>
                        {Pagination(
                          postPerPage,
                          mobiles.length,
                          paginate,
                          nextPage,
                          previousPage,
                          currentPage,
                          lastPage
                        )}
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment />
                  )}
                  {reviews.length !== 0 ? (
                    <React.Fragment>
                      <hr
                        style={{
                          height: "2px",
                          width: "95%",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      ></hr>
                      <div className={styles.subtitle}>
                        <h2>
                          <span style={{ color: "rgba(202, 28, 28, 0.945)" }}>
                            #{tag.name}
                          </span>{" "}
                          related reviews
                        </h2>
                      </div>
                      <hr
                        style={{
                          height: "2px",
                          width: "95%",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      ></hr>
                      <div className={`${styles.cards} ${styles.box__sizing}`}>
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
                    </React.Fragment>
                  ) : (
                    <React.Fragment />
                  )}
                  {news.length !== 0 ? (
                    <React.Fragment>
                      <hr
                        style={{
                          height: "2px",
                          width: "95%",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      ></hr>
                      <div className={styles.subtitle}>
                        <h2>
                          <span style={{ color: "rgba(202, 28, 28, 0.945)" }}>
                            #{tag.name}
                          </span>{" "}
                          related news
                        </h2>
                      </div>
                      <hr
                        style={{
                          height: "2px",
                          width: "95%",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      ></hr>
                      <div className={`${styles.cards} ${styles.box__sizing}`}>
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
                    </React.Fragment>
                  ) : (
                    <React.Fragment />
                  )}
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

export default singleTag;
