import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { listSearchUser as ReviewSearch } from "../../actions/review.action";
import { listSearchUser as NewsSearch } from "../../actions/news.action";
import { listSearchUser as MobileSearch } from "../../actions/mobile.action";
import { API, APP_NAME } from "../../config";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import moment from "moment";
import styles from "../../styles/desktopSearch.module.css";
import Loader from "react-loader-spinner";

const SearchComponent = ({ router }) => {
  const [valuesNews, setValuesNews] = useState({
    resultsNews: [],
  });

  const [valuesReviews, setValuesReviews] = useState({
    resultsReviews: [],
  });

  const [valuesMobiles, setValuesMobiles] = useState({
    resultsMobiles: [],
  });

  const { resultsNews } = valuesNews;
  const { resultsReviews } = valuesReviews;
  const { resultsMobiles } = valuesMobiles;

  /**news pagination states */
  const [currentPageNews, setCurrentPageNews] = useState(1);
  const [postPerPageNews] = useState(30);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPostNews = currentPageNews * postPerPageNews;
  const indexofFirstPostNews = indexofLastPostNews - postPerPageNews;
  const currentPostNews = resultsNews.slice(
    indexofFirstPostNews,
    indexofLastPostNews
  );
  const lastPageNews = resultsNews.length / postPerPageNews;

  //change the page
  const paginateNews = (pageNumber) => {
    setCurrentPageNews(pageNumber);
  };
  const nextPageNews = () => {
    setCurrentPageNews(currentPageNews + 1);
  };
  const previousPageNews = () => {
    setCurrentPageNews(currentPageNews - 1);
  };

  /**reviews pagination states */
  const [currentPageReviews, setCurrentPageReviews] = useState(1);
  const [postPerPageReviews] = useState(30);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPostReviews = currentPageReviews * postPerPageReviews;
  const indexofFirstPostReviews = indexofLastPostReviews - postPerPageReviews;
  const currentPostReviews = resultsReviews.slice(
    indexofFirstPostReviews,
    indexofLastPostReviews
  );
  const lastPageReviews = resultsReviews.length / postPerPageReviews;

  //change the page
  const paginateReviews = (pageNumber) => {
    setCurrentPageReviews(pageNumber);
  };
  const nextPageReviews = () => {
    setCurrentPageReviews(currentPageReviews + 1);
  };
  const previousPageReviews = () => {
    setCurrentPageReviews(currentPageReviews - 1);
  };

  /**mobiles pagination states */
  const [currentPageMobiles, setCurrentPageMobiles] = useState(1);
  const [postPerPageMobiles] = useState(30);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPostMobiles = currentPageMobiles * postPerPageMobiles;
  const indexofFirstPostMobiles = indexofLastPostMobiles - postPerPageMobiles;
  const currentPostMobiles = resultsMobiles.slice(
    indexofFirstPostMobiles,
    indexofLastPostMobiles
  );
  const lastPageMobiles = resultsMobiles.length / postPerPageMobiles;

  //change the page
  const paginateMobiles = (pageNumber) => {
    setCurrentPageMobiles(pageNumber);
  };
  const nextPageMobiles = () => {
    setCurrentPageMobiles(currentPageMobiles + 1);
  };
  const previousPageMobiles = () => {
    setCurrentPageMobiles(currentPageMobiles - 1);
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

  const searchMethods = async (search) => {
    await ReviewSearch({ search }).then((data) => {
      if (data) {
        setValuesReviews({
          ...valuesReviews,
          resultsReviews: data,
        });
      }
    });
    await NewsSearch({ search }).then((data) => {
      if (data) {
        setValuesNews({
          ...valuesNews,
          resultsNews: data,
        });
      }
    });
    await MobileSearch({ search }).then((data) => {
      if (data) {
        setValuesMobiles({
          ...valuesMobiles,
          resultsMobiles: data,
        });
      }
    });
  };
  const searchInit = router.query.search;
  useEffect(() => {
    searchMethods(searchInit);
  }, [searchInit]);

  /**Tab state */
  const [activeTab, setActiveTab] = useState("1");
  /**end */

  /**tab toggler */
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  /**end */

  const showNewsResults = () => {
    return currentPostNews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className={styles.news__container}>
          <div className={styles.image__news}>
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
            className={styles.content__news}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content__div}>
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className={styles.author__div}>
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.name}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const showReviewsResults = () => {
    return currentPostReviews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className={styles.news__container}>
          <div className={styles.image__news}>
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
            className={styles.content__news}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content__div}>
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className={styles.author__div}>
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.name}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const showMobileResults = () => {
    return currentPostMobiles.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className={styles.single__card__phone}>
          <div className={styles.card__image__container__phone}>
            <Link href={`/phones/brand/${blog.slug}`}>
              <a style={{ textDecoration: "none" }}>
                <img
                  className="img img-fluid"
                  src={`${API}/mobile/photo/${blog.slug}`}
                  alt={blog.title}
                />
              </a>
            </Link>
          </div>
          <div className={styles.card__content__phone}>
            <Link href={`/phones/brand/${blog.slug}`}>
              <a style={{ textDecoration: "none" }}>
                <h1>{blog.title}</h1>
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      {resultsMobiles && resultsNews && resultsReviews ? (
        <React.Fragment>
          <div>
            <Head>
              <title>{APP_NAME} - Search Results Page</title>
              <meta
                name="description"
                content="search results for  all mobile phones news reviews and more stories"
              />
            </Head>
          </div>
          <div
            alt="Photo by sam loyd on Unsplash"
            style={{
              backgroundImage: `url(/static/images/search_cover.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundSize: "cover",
              height: "300px",
              width: "100%",
              boxShadow: "0px 0px 0px rgba(0,0,0,0.9)",
            }}
          >
            <div
              className="container"
              style={{ paddingTop: "50px", paddingBottom: "50px" }}
            >
              <div
                style={{
                  height: "120px",
                  overflowY: "auto",
                  color: "#EEE1E1",
                  paddingBottom: 0,
                  paddingTop: 0,
                  marginTop: "65px",
                  marginBottom: "15px",
                }}
              >
                <h1 className={styles.cover__image__div__main__topic}>
                  {resultsMobiles.length +
                    resultsNews.length +
                    resultsReviews.length}{" "}
                  Results for: "{searchInit}"
                </h1>
              </div>
            </div>
          </div>

          <div className="container mt-3 mb-5">
            <div className="row">
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
                      Search
                    </li>
                  </ol>
                </nav>
              </div>
              <div
                className="col-md-12"
                style={{
                  width: "100%",
                }}
              >
                <Nav tabs>
                  <NavItem className={styles.nav__item}>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.781)",
                        fontWeight: "bolder",
                      }}
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      News({resultsNews.length})
                    </NavLink>
                  </NavItem>
                  <NavItem className={styles.nav__item}>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.781)",
                        fontWeight: "bolder",
                      }}
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Reviews({resultsReviews.length})
                    </NavLink>
                  </NavItem>
                  <NavItem className={styles.nav__item}>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.781)",
                        fontWeight: "bolder",
                      }}
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      Phones({resultsMobiles.length})
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                  }}
                  activeTab={activeTab}
                >
                  <React.Fragment>
                    {resultsNews ? (
                      <TabPane tabId="1">
                        <Row
                          style={{
                            height: "10px",
                            backgroundColor: "#2c2c2c",
                            margin: 0,
                          }}
                        />
                        <Row>
                          <Col md="12">
                            {resultsNews.length === 0 ? (
                              <React.Fragment>
                                {" "}
                                <div className="col-md-12 pl-4 pl-4 pt-4 pb-4">
                                  <h5 style={{ fontWeight: "lighter" }}>
                                    No results on News&nbsp;
                                    <button
                                      className="btn-next-tab info-tab"
                                      onClick={() => {
                                        setActiveTab("2");
                                      }}
                                    >
                                      &nbsp;view Reviews({resultsReviews.length}
                                      )&nbsp;
                                    </button>{" "}
                                    or{" "}
                                    <button
                                      className="btn-next-tab info-tab"
                                      onClick={() => {
                                        setActiveTab("3");
                                      }}
                                    >
                                      &nbsp;view Mobiles({resultsMobiles.length}
                                      )
                                    </button>
                                  </h5>
                                </div>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <div className={styles.main__container}>
                                  {showNewsResults()}
                                </div>
                                {Pagination(
                                  postPerPageNews,
                                  resultsNews.length,
                                  paginateNews,
                                  nextPageNews,
                                  previousPageNews,
                                  currentPageNews,
                                  lastPageNews
                                )}
                              </React.Fragment>
                            )}
                          </Col>
                        </Row>
                      </TabPane>
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
                  <React.Fragment>
                    {resultsReviews ? (
                      <TabPane tabId="2">
                        <Row
                          style={{
                            height: "10px",
                            backgroundColor: "#2c2c2c",
                            margin: 0,
                          }}
                        />
                        <Row>
                          <Col md="12">
                            {resultsReviews.length === 0 ? (
                              <React.Fragment>
                                {" "}
                                <div className=" pl-4 pl-4 pt-4 pb-4">
                                  <h5 style={{ fontWeight: "lighter" }}>
                                    No results on Reviews&nbsp;
                                    <button
                                      className="btn-next-tab info-tab"
                                      onClick={() => {
                                        setActiveTab("1");
                                      }}
                                    >
                                      &nbsp;view News({resultsNews.length}
                                      )&nbsp;
                                    </button>{" "}
                                    or{" "}
                                    <button
                                      className="btn-next-tab info-tab"
                                      onClick={() => {
                                        setActiveTab("3");
                                      }}
                                    >
                                      &nbsp;view Mobiles({resultsMobiles.length}
                                      )
                                    </button>
                                  </h5>
                                </div>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <div className={styles.main__container}>
                                  {showReviewsResults()}
                                </div>
                                {Pagination(
                                  postPerPageReviews,
                                  resultsReviews.length,
                                  paginateReviews,
                                  nextPageReviews,
                                  previousPageReviews,
                                  currentPageReviews,
                                  lastPageReviews
                                )}
                              </React.Fragment>
                            )}
                          </Col>
                        </Row>
                      </TabPane>
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
                  <React.Fragment>
                    {resultsMobiles ? (
                      <TabPane tabId="3">
                        <Row
                          style={{
                            height: "10px",
                            backgroundColor: "#2c2c2c",
                            margin: 0,
                          }}
                        />
                        <Row>
                          <Col md="12">
                            {resultsMobiles.length === 0 ? (
                              <React.Fragment>
                                {" "}
                                <div className=" pl-4 pl-4 pt-4 pb-4">
                                  <h5 style={{ fontWeight: "lighter" }}>
                                    No results on Mobiles&nbsp;
                                    <button
                                      className="btn-next-tab info-tab"
                                      onClick={() => {
                                        setActiveTab("1");
                                      }}
                                    >
                                      &nbsp;view News({resultsNews.length}
                                      )&nbsp;
                                    </button>{" "}
                                    or{" "}
                                    <button
                                      className="btn-next-tab info-tab"
                                      onClick={() => {
                                        setActiveTab("2");
                                      }}
                                    >
                                      &nbsp;view Reveiws({resultsReviews.length}
                                      )
                                    </button>
                                  </h5>
                                </div>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <div
                                  className={`${styles.cards__phone} ${styles.box__sizing__phone} ${styles.side__bar__phones}`}
                                >
                                  {showMobileResults()}
                                </div>
                                {Pagination(
                                  postPerPageMobiles,
                                  resultsMobiles.length,
                                  paginateMobiles,
                                  nextPageMobiles,
                                  previousPageMobiles,
                                  currentPageMobiles,
                                  lastPageMobiles
                                )}
                              </React.Fragment>
                            )}
                          </Col>
                        </Row>
                      </TabPane>
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
                </TabContent>
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

export default withRouter(SearchComponent);
