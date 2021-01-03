import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import { listSearchUser as ReviewSearch } from "../../actions/review.action";
import { listSearchUser as NewsSearch } from "../../actions/news.action";
import { listSearchUser as MobileSearch } from "../../actions/mobile.action";
import { API, APP_NAME } from "../../config";
import moment from "moment";
import { FiSmartphone } from "react-icons/fi";
import { MdRateReview, MdNavigateNext } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import styles from "../../styles/mobileSearch.module.css";
import React from "react";
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
        setValuesNews({ ...valuesNews, resultsNews: data });
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

          {/**breadcrumb */}
          <div className="container mt-3 mb-0 pl-0 pr-0">
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
                      Search
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/**mobile code */}
          <div
            className="container mt-0 mb-2"
            style={{
              boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <div style={{ marginRight: "5px" }}>
                  <FiSmartphone size="1rem" color="#505050" />
                </div>
                <div style={{ width: "100%", paddingTop: 0 }}>
                  <hr
                    style={{ marginTop: "6px" }}
                    className={styles.hrText}
                    data-content={`Phones (${resultsMobiles.length})`}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {resultsMobiles ? (
                <React.Fragment>
                  {resultsMobiles.length === 0 ? (
                    <React.Fragment>
                      <div
                        className="container"
                        style={{
                          width: "100%",
                          padding: "20px 35px",
                          borderRadius: "5px",
                          textTransform: "capitalize",
                          marginBottom: "20px",
                        }}
                      >
                        <h1
                          style={{
                            width: "100%",
                            lineHeight: "140%",
                            padding: "0px",
                            fontSize: "20px",
                            fontWeight: "lighter",
                          }}
                        >
                          No results found on Phones, check{" "}
                          <kbd
                            style={{
                              backgroundColor: "rgba(202, 28, 28, 0.945)",
                            }}
                          >
                            Reviews(
                            {resultsReviews.length})
                          </kbd>{" "}
                          or{" "}
                          <kbd
                            style={{
                              backgroundColor: "rgba(202, 28, 28, 0.945)",
                            }}
                          >
                            News(
                            {resultsNews.length})
                          </kbd>
                        </h1>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div
                        className={`col-md-12 ${styles.mobile_search_title_content}`}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          overflowX: "scroll",
                          overflowY: "hidden",
                        }}
                      >
                        {resultsMobiles.map((m, i) => (
                          <React.Fragment key={m._id}>
                            <Link href={`/phones/brand/${m.slug}`}>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "rgba(0, 0, 0, 0.781)",
                                }}
                              >
                                <div
                                  className={styles.mobile__search__container}
                                >
                                  <div
                                    className={
                                      styles.mobile__search__container__image
                                    }
                                  >
                                    <img
                                      src={`${API}/mobile/photo/${m.slug}`}
                                      className="img img-fluid"
                                      alt="review image cap"
                                      style={{
                                        height: "120px",
                                      }}
                                    />
                                  </div>
                                  <div
                                    className={
                                      styles.mobile__search__container__content
                                    }
                                    style={{ overflowY: "auto" }}
                                  >
                                    <h1
                                      style={{
                                        color: "rgba(0, 0, 0, 0.781)",
                                        fontSize: "14px",
                                        fontWeight: "bolder",
                                      }}
                                    >
                                      {m.title}
                                    </h1>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </React.Fragment>
                        ))}
                      </div>
                    </React.Fragment>
                  )}
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
            </div>

            <div className="row">
              <div
                style={{
                  height: "3px",
                  width: "100%",
                  margin: 0,
                  backgroundColor: "#505050",
                  marginLeft: "12px",
                  marginRight: "12px",
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
                    marginRight: "10px",
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
          </div>
          {/**end
           * reviews code */}
          <div
            className="container mb-2"
            style={{
              boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <div style={{ marginRight: "5px" }}>
                  <MdRateReview size="1rem" color="#505050" />
                </div>
                <div style={{ width: "100%", paddingTop: 0 }}>
                  <hr
                    style={{ marginTop: "6px" }}
                    className={styles.hrText}
                    data-content={`Reviews (${resultsReviews.length})`}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {resultsReviews.length === 0 ? (
                <React.Fragment>
                  <div
                    className="container"
                    style={{
                      width: "100%",
                      padding: "20px 35px",
                      borderRadius: "5px",
                      textTransform: "capitalize",
                      marginBottom: "20px",
                    }}
                  >
                    <h1
                      style={{
                        width: "100%",
                        lineHeight: "140%",
                        padding: "0px",
                        fontSize: "20px",
                        fontWeight: "lighter",
                      }}
                    >
                      No results found on Reviews, check{" "}
                      <kbd
                        style={{
                          backgroundColor: "rgba(202, 28, 28, 0.945)",
                        }}
                      >
                        phones(
                        {resultsMobiles.length})
                      </kbd>{" "}
                      or{" "}
                      <kbd
                        style={{
                          backgroundColor: "rgba(202, 28, 28, 0.945)",
                        }}
                      >
                        News(
                        {resultsNews.length})
                      </kbd>
                    </h1>
                  </div>
                </React.Fragment>
              ) : (
                <div
                  className={`col-md-12 ${styles.mobile_search_title_content}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflowX: "scroll",
                    overflowY: "hidden",
                  }}
                >
                  <React.Fragment>
                    {resultsReviews.map((m, i) => (
                      <React.Fragment key={m._id}>
                        <Link href={`/reviews/${m.slug}`}>
                          <a
                            style={{
                              textDecoration: "none",
                              color: "rgba(0, 0, 0, 0.781)",
                            }}
                          >
                            <div
                              className={
                                styles.mobile__search__container__reviews
                              }
                            >
                              <div
                                className={
                                  styles.mobile__search__container__image__reviews
                                }
                              >
                                <img
                                  src={`${API}/reviews/photo/${m.slug}`}
                                  className="img img-fluid"
                                  alt="review image cap"
                                  style={{
                                    height: "120px",
                                  }}
                                />
                              </div>
                              <div
                                className={
                                  styles.mobile__search__container__content__reviews
                                }
                                style={{ overflowY: "auto" }}
                              >
                                <h1
                                  style={{
                                    color: "rgba(0, 0, 0, 0.781)",
                                    fontSize: "14px",
                                    fontWeight: "bolder",
                                  }}
                                >
                                  {m.title}
                                </h1>
                                <p
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {moment(m.updatedAt).fromNow()}
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                </div>
              )}
            </div>
            <div className="row">
              <div
                style={{
                  height: "3px",
                  width: "100%",
                  margin: 0,
                  backgroundColor: "#505050",
                  marginLeft: "12px",
                  marginRight: "12px",
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
                    marginRight: "10px",
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
          {/**end
           * news code */}

          <div
            className="container mb-5"
            style={{
              boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <div className="row">
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
                  <FaNewspaper size="1rem" color="#505050" />
                </div>
                <div style={{ width: "100%", paddingTop: 0 }}>
                  <hr
                    style={{ marginTop: "6px" }}
                    className={styles.hrText}
                    data-content={`News (${resultsNews.length})`}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {resultsNews.length === 0 ? (
                  <React.Fragment>
                    <div
                      className="container"
                      style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "5px",
                        textTransform: "capitalize",
                        marginBottom: "20px",
                      }}
                    >
                      <h1
                        style={{
                          width: "100%",
                          lineHeight: "140%",
                          padding: "0px",
                          fontSize: "20px",
                          fontWeight: "lighter",
                        }}
                      >
                        No results found on news, check{" "}
                        <kbd
                          style={{
                            backgroundColor: "rgba(202, 28, 28, 0.945)",
                          }}
                        >
                          phones(
                          {resultsMobiles.length})
                        </kbd>{" "}
                        or{" "}
                        <kbd
                          style={{
                            backgroundColor: "rgba(202, 28, 28, 0.945)",
                          }}
                        >
                          reviews(
                          {resultsReviews.length})
                        </kbd>
                      </h1>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {currentPostNews.map((blog, i) => (
                      <React.Fragment key={i}>
                        <div key={i} className={styles.news__container}>
                          <div className={styles.image__news}>
                            <Link href={`/news/${blog.slug}`}>
                              <a
                                style={{
                                  textDecoration: "none",
                                  width: "100%",
                                }}
                              >
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
                                <a
                                  style={{
                                    textDecoration: "none",
                                    width: "100%",
                                  }}
                                >
                                  <h1>{blog.title}</h1>
                                </a>
                              </Link>
                            </div>

                            <div className={styles.author__div}>
                              <span>
                                {moment(blog.updatedAt).fromNow()} | by{" "}
                                {blog.postedBy.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    <div style={{ paddingTop: "12px" }}>
                      {Pagination(
                        postPerPageNews,
                        resultsNews.length,
                        paginateNews,
                        nextPageNews,
                        previousPageNews,
                        currentPageNews,
                        lastPageNews
                      )}
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="row">
              <div
                style={{
                  height: "3px",
                  width: "100%",
                  margin: 0,
                  backgroundColor: "#505050",
                  marginLeft: "12px",
                  marginRight: "12px",
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
                    marginRight: "10px",
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
