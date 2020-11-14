import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import { listSearchUser as ReviewSearch } from "../../actions/review.action";
import { listSearchUser as NewsSearch } from "../../actions/news.action";
import { listSearchUser as MobileSearch } from "../../actions/mobile.action";
import Layout from "../../components/Layout";
import { DOMAIN, API, APP_NAME } from "../../config";
import moment from "moment";
import { FiSmartphone } from "react-icons/fi";
import { MdRateReview, MdNavigateNext } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";

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

  return (
    <React.Fragment>
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/mobileSearch.css" />
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
            backgroundImage: `url(${DOMAIN}/static/images/sam-loyd-single-brand-cover-page.jpg)`,
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
              <h1 className="cover__image__div__main__topic">
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

        <div
          className="container mt-5 mb-3"
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
                backgroundColor: "rgba(202, 28, 28, 0.945)",
                marginBottom: "10px",
              }}
            >
              <div
                title="search results related to phones"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div style={{ margin: "10px" }}>
                  <FiSmartphone size="2rem" color="#fff" />
                </div>
                <div>
                  <h1
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
                    phones({resultsMobiles.length})
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
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
                      lineHeight: "120%",
                      padding: "0px",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    No results found on Phones, check Reviews(
                    {resultsReviews.length}) or News(
                    {resultsNews.length})
                  </h1>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div
                  className="col-md-12  mobile-search-title-content"
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
                            title="phone results"
                            className="mobile__search__container"
                          >
                            <div className="mobile__search__container__image">
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
                              className="mobile__search__container__content"
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
          </div>

          <div className="row">
            <div
              style={{
                height: "3px",
                width: "100%",
                margin: 0,
                backgroundColor: "rgba(202, 28, 28, 0.945)",
                marginLeft: "12px",
                marginRight: "12px",
              }}
            />
            <div title="view all phones" style={{ width: "100%" }}>
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
                        all phones
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

        <div
          className="container mb-3"
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
                backgroundColor: "rgba(202, 28, 28, 0.945)",
                marginBottom: "10px",
              }}
            >
              <div
                title="search results related to reviews"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div style={{ margin: "10px" }}>
                  <MdRateReview size="2rem" color="#fff" />
                </div>
                <div>
                  <h1
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
                    Reviews({resultsReviews.length})
                  </h1>
                </div>
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
                      lineHeight: "120%",
                      padding: "0px",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    No results found on Reviews, check phones(
                    {resultsMobiles.length}) or News(
                    {resultsNews.length})
                  </h1>
                </div>
              </React.Fragment>
            ) : (
              <div
                className="col-md-12 mobile-search-title-content"
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
                            title="reviews results"
                            className="mobile__search__container__reviews"
                          >
                            <div className="mobile__search__container__image__reviews">
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
                              className="mobile__search__container__content__reviews"
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
                backgroundColor: "rgba(202, 28, 28, 0.945)",
                marginLeft: "12px",
                marginRight: "12px",
              }}
            />
            <div title="view all Reviews" style={{ width: "100%" }}>
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
                        all Reviews
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
                backgroundColor: "rgba(202, 28, 28, 0.945)",
                marginBottom: "30px",
              }}
            >
              <div
                title="search results related to news"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div style={{ margin: "10px" }}>
                  <FaNewspaper size="2rem" color="#fff" />
                </div>
                <div>
                  <h1
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
                    News({resultsNews.length})
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {resultsReviews.length === 0 ? (
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
                        lineHeight: "120%",
                        padding: "0px",
                        fontSize: "20px",
                        fontWeight: "lighter",
                      }}
                    >
                      No results found on news, check phones(
                      {resultsMobiles.length}) or reviews(
                      {resultsReviews.length})
                    </h1>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {currentPostNews.map((blog, i) => (
                    <React.Fragment key={blog._id}>
                      <Link href={`/news/${blog.slug}`}>
                        <a style={{ textDecoration: "none" }}>
                          <div
                            title="news results"
                            className="mobile__search__news__container"
                          >
                            <div className="mobile__search__news__image">
                              <img
                                className="img img-fluid"
                                src={`${API}/news/photo/${blog.slug}`}
                                alt={blog.title}
                              />
                            </div>
                            <div className="mobile__search__news__content">
                              <h1>{blog.title}</h1>
                              <p>{moment(blog.updatedAt).fromNow()}</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                      <hr />
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
                backgroundColor: "rgba(202, 28, 28, 0.945)",
                marginLeft: "12px",
                marginRight: "12px",
              }}
            />
            <div title="view all News" style={{ width: "100%" }}>
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
                        all News
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
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(SearchComponent);
