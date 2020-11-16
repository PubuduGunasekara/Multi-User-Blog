import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import { listSearchUser as ReviewSearch } from "../../actions/review.action";
import { listSearchUser as NewsSearch } from "../../actions/news.action";
import { listSearchUser as MobileSearch } from "../../actions/mobile.action";
import Layout from "../../components/Layout";
import { DOMAIN, API, APP_NAME } from "../../config";
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
import React from "react";

const SearchComponent = ({ router }) => {
  const [valuesNews, setValuesNews] = useState({
    resultsNews: [],
    searchedNews: undefined,
    messageNews: "",
  });

  const [valuesReviews, setValuesReviews] = useState({
    resultsReviews: [],
    searchedReviews: undefined,
    messageReviews: "",
  });

  const [valuesMobiles, setValuesMobiles] = useState({
    resultsMobiles: [],
    searchedMobiles: undefined,
    messageMobiles: "",
  });

  const { resultsNews, searchedNews, messageNews } = valuesNews;
  const { resultsReviews, searchedReviews, messageReviews } = valuesReviews;
  const { resultsMobiles, searchedMobiles, messageMobiles } = valuesMobiles;

  /**news pagination states */
  const [currentPageNews, setCurrentPageNews] = useState(1);
  const [postPerPageNews] = useState(5);
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
  const [postPerPageReviews] = useState(5);
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
  const [postPerPageMobiles] = useState(5);
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
          searchedReviews: true,
        });
      }
    });
    await NewsSearch({ search }).then((data) => {
      if (data) {
        setValuesNews({ ...valuesNews, resultsNews: data, searchedNews: true });
      }
    });
    await MobileSearch({ search }).then((data) => {
      if (data) {
        setValuesMobiles({
          ...valuesMobiles,
          resultsMobiles: data,
          searchedMobiles: true,
        });
      }
    });
  };

  useEffect(() => {
    searchMethods(router.query.search);
  }, [router.query.search]);

  const [search, setSearch] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const seacrhSubmit = async (e) => {
    e.preventDefault();
    setSearchKey(search);
    await ReviewSearch({ search }).then((data) => {
      if (data) {
        setValuesReviews({
          ...valuesReviews,
          resultsReviews: data,
          searchedReviews: true,
        });
      }
    });
    await NewsSearch({ search }).then((data) => {
      if (data) {
        setValuesNews({ ...valuesNews, resultsNews: data, searchedNews: true });
      }
    });
    await MobileSearch({ search }).then((data) => {
      if (data) {
        setValuesMobiles({
          ...valuesMobiles,
          resultsMobiles: data,
          searchedMobiles: true,
        });
      }
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

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
        <Link href={`/news/${blog.slug}`}>
          <a style={{ textDecoration: "none" }}>
            <div
              title="news results"
              key={i}
              className={styles.search__container}
            >
              <div className={styles.search__image}>
                <img
                  className="img img-fluid"
                  src={`${API}/news/photo/${blog.slug}`}
                  alt={blog.title}
                />
              </div>
              <div className={styles.search__content}>
                <h1>{blog.title}</h1>
                <p>{moment(blog.updatedAt).fromNow()}</p>
              </div>
            </div>
          </a>
        </Link>
        <hr style={{ marginTop: 0, marginBottom: "10px" }} />
      </React.Fragment>
    ));
  };

  const showReviewsResults = () => {
    return currentPostReviews.map((blog, i) => (
      <React.Fragment key={i}>
        <Link href={`/reviews/${blog.slug}`}>
          <a style={{ textDecoration: "none" }}>
            <div
              title="review results"
              key={i}
              className={styles.search__container}
            >
              <div className={styles.search__image}>
                <img
                  className="img img-fluid"
                  src={`${API}/reviews/photo/${blog.slug}`}
                  alt={blog.title}
                />
              </div>
              <div className={styles.search__content}>
                <h1>{blog.title}</h1>
                <p>{moment(blog.updatedAt).fromNow()}</p>
              </div>
            </div>
          </a>
        </Link>
        <hr style={{ marginTop: 0, marginBottom: "10px" }} />
      </React.Fragment>
    ));
  };

  const showMobileResults = () => {
    return currentPostMobiles.map((blog, i) => (
      <React.Fragment key={i}>
        <div
          title="mobile phone results"
          key={i}
          className={styles.single__card__phone}
        >
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
      <div>
        <Head>
          <title>Search Results Page - {APP_NAME}</title>
          <meta
            name="description"
            content="search results of  all mobile phones news reviews and more stories"
          />
        </Head>
      </div>
      <Layout>
        <div
          alt="Photo by sam loyd on Unsplash"
          style={{
            backgroundImage: `url(/static/images/sam-loyd-single-brand-cover-page.jpg)`,
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
              title="Search results"
              style={{
                height: "120px",
                overflowY: "auto",
                color: "#EEE1E1",
                paddingBottom: 0,
                paddingTop: 0,
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <h1 className={styles.cover__image__div__main__topic}>
                {resultsMobiles.length +
                  resultsNews.length +
                  resultsReviews.length}{" "}
                Results for: "{searchKey ? searchKey : router.query.search}"
              </h1>
            </div>
            <div style={{ overflow: "auto" }}>
              <form
                onSubmit={seacrhSubmit}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "40px",
                }}
              >
                <input
                  title="search anything related to techbot.com"
                  className="form-control"
                  onChange={handleChange}
                  value={search}
                  required
                  style={{
                    width: "77%",
                    opacity: ".7",
                    borderRadius: "0px",
                    borderColor: "white",
                    height: "40px",
                  }}
                  type="search"
                  placeholder="Search Here"
                />
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{
                    border: "1px solid white",
                    backgroundColor: "#2c2c2c",
                    opacity: "0.9",
                    height: "40px",
                    borderRadius: "0px",
                    width: "23%",
                  }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container mt-5 pl-5 pr-5">
          <div className="row">
            <div
              className="col-md-12"
              style={{
                width: "100%",
                marginLeft: "0px",
                marginRight: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <Nav tabs>
                <NavItem
                  className={styles.nav__item}
                  title="News results tab with no of results"
                >
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
                <NavItem
                  className={styles.nav__item}
                  title="Reviews results tab with no of results"
                >
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
                <NavItem
                  className={styles.nav__item}
                  title="phone results tab with no of results"
                >
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
                <TabPane tabId="1">
                  <Row
                    style={{
                      height: "10px",
                      backgroundColor: "rgba(202, 28, 28, 0.945)",
                      margin: 0,
                    }}
                  />
                  <Row>
                    <Col md="12" style={{ paddingTop: "30px" }}>
                      {resultsNews.length === 0 ? (
                        <React.Fragment>
                          {" "}
                          <div className="col-md-12">
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
                                &nbsp;view Mobiles({resultsMobiles.length})
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
                <TabPane tabId="2">
                  <Row
                    style={{
                      height: "10px",
                      backgroundColor: "rgba(202, 28, 28, 0.945)",
                      margin: 0,
                    }}
                  />
                  <Row>
                    <Col md="12" style={{ paddingTop: "30px" }}>
                      {resultsReviews.length === 0 ? (
                        <React.Fragment>
                          {" "}
                          <div className="col-md-12">
                            <h5 style={{ fontWeight: "lighter" }}>
                              No results on Reviews&nbsp;
                              <button
                                className="btn-next-tab info-tab"
                                onClick={() => {
                                  setActiveTab("1");
                                }}
                              >
                                &nbsp;view News({resultsNews.length})&nbsp;
                              </button>{" "}
                              or{" "}
                              <button
                                className="btn-next-tab info-tab"
                                onClick={() => {
                                  setActiveTab("3");
                                }}
                              >
                                &nbsp;view Mobiles({resultsMobiles.length})
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
                <TabPane tabId="3">
                  <Row
                    style={{
                      height: "10px",
                      backgroundColor: "rgba(202, 28, 28, 0.945)",
                      margin: 0,
                    }}
                  />
                  <Row>
                    <Col md="12" style={{ paddingTop: "30px" }}>
                      {resultsMobiles.length === 0 ? (
                        <React.Fragment>
                          {" "}
                          <div className="col-md-12">
                            <h5 style={{ fontWeight: "lighter" }}>
                              No results on Mobiles&nbsp;
                              <button
                                className="btn-next-tab info-tab"
                                onClick={() => {
                                  setActiveTab("1");
                                }}
                              >
                                &nbsp;view News({resultsNews.length})&nbsp;
                              </button>{" "}
                              or{" "}
                              <button
                                className="btn-next-tab info-tab"
                                onClick={() => {
                                  setActiveTab("2");
                                }}
                              >
                                &nbsp;view Reveiws({resultsReviews.length})
                              </button>
                            </h5>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div
                            className={` ${styles.cards__phone} ${styles.box__sizing__phone} ${styles.side__bar__phones}`}
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
              </TabContent>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(SearchComponent);
