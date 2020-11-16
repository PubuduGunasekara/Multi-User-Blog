import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { mCategoryList } from "../../actions/mobileCategory.action";
import { newsListPublicMobileReviews } from "../../actions/news.action";
import { reviewListPublicMobileNews } from "../../actions/review.action";
import { MdNavigateNext, MdRateReview } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import moment from "moment";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import styles from "../../styles/allBrands.module.css";
import React from "react";

/**
 * completed!
 */
const Mobiles = ({ mobiles, news, reviews }) => {
  const [searchValues, setSearchValues] = useState({
    search: "",
    showSearch: undefined,
    filteredContent: [],
  });

  const { search, showSearch, filteredContent } = searchValues;

  const head = () => (
    <Head>
      <title>All mobile phone brands - {APP_NAME}</title>
      <meta
        name="description"
        content="List of all mobile phones,smartphones,tablets,wearables and accessories brands"
      />
      <link rel="canonical" href={`${DOMAIN}/phones`} />
      <meta
        property="og:title"
        content={`All mobile phone brands - ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="List of all mobile phones,smartphones,tablets,wearables and accessories brands"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/phones}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        alt="Photo by sam loyd on Unsplash"
        property="og:image"
        content={`${DOMAIN}/static/images/sam-loyd-single-brand-cover-page.jpg`}
      />
      <meta
        alt="Photo by sam loyd on Unsplash"
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/sam-loyd-single-brand-cover-page.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showSideBarNews = () => {
    return news.map((blog, i) => (
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
                  <h1>{blog.title}</h1>
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

  const showSideBarReviews = () => {
    return reviews.map((blog, i) => (
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
                  <h1>{blog.title}</h1>
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
        <div className={styles.single__card}>
          <Link href={`/phones/brands/${m.slug}`}>
            <a>
              <div className={styles.card__content}>
                <h1>{m.name}</h1>
              </div>
            </a>
          </Link>
        </div>
      </React.Fragment>
    ));
  };

  const handleChange = (e) => {
    setSearchValues({
      ...searchValues,
      search: e.target.value,
      showSearch: false,
      filteredContent: [],
    });
    console.log("search key", search);
  };

  const seacrhSubmit = (e) => {
    console.log("search key", search);
    e.preventDefault();

    setSearchValues({
      ...searchValues,
      showSearch: true,
      filteredContent: mobiles.filter((data) => {
        return (
          data.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !=
          -1
        );
      }),
    });
    console.log("after return", filteredContent);
  };

  /**mobileSearch pagination states */
  const [currentPageSearched, setCurrentPageSearched] = useState(1);
  const [postPerPageSearched] = useState(20);

  //pagination
  const indexofLastPostSearched = currentPageSearched * postPerPageSearched;
  const indexofFirstPostSearched =
    indexofLastPostSearched - postPerPageSearched;
  const currentPostSearched = filteredContent.slice(
    indexofFirstPostSearched,
    indexofLastPostSearched
  );
  const lastPageSearched = filteredContent.length / postPerPageSearched;

  //change the page
  const paginateSearched = (pageNumberSearched) => {
    setCurrentPageSearched(pageNumberSearched);
  };
  const nextPageSearched = () => {
    setCurrentPageSearched(currentPageSearched + 1);
  };
  const previousPageSearched = () => {
    setCurrentPageSearched(currentPageSearched - 1);
  };

  const showSearchedMobiles = (filteredContent) => {
    return filteredContent.map((m, i) => (
      <React.Fragment key={i}>
        <div className={styles.single__card}>
          <Link href={`/phones/brands/${m.slug}`}>
            <a>
              <div className={styles.card__content}>
                <h1>{m.name}</h1>
              </div>
            </a>
          </Link>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      {head()}
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
                All mobile phone brands
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
                  role="submit search"
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
            <div>
              {filteredContent.length > 0 ? (
                <div>
                  <span
                    style={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    {filteredContent.length} result(s) found!
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5 pl-0 pr-0">
          <div className="row ml-0 mr-0">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  {showSearch ? (
                    <React.Fragment>
                      {filteredContent.length !== 0 ? (
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
                            <div
                              style={{
                                width: "100%",
                                paddingTop: 0,
                              }}
                            >
                              <hr
                                style={{ marginTop: "6px" }}
                                className={styles.hrText}
                                data-content={`${filteredContent.length} result(s) found!`}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles.cards} ${styles.box__sizing}`}
                          >
                            {showSearchedMobiles(filteredContent)}
                          </div>
                          <div style={{ width: "100%" }}>
                            {Pagination(
                              postPerPageSearched,
                              filteredContent.length,
                              paginateSearched,
                              nextPageSearched,
                              previousPageSearched,
                              currentPageSearched,
                              lastPageSearched
                            )}
                          </div>
                        </div>
                      ) : (
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
                          <div
                            style={{
                              margin: "20px",
                              padding: "20px",
                              textAlign: "center",
                              width: "100%",
                              height: "100%",
                            }}
                            className={`alert alert-danger ${styles.change__no__results__found__styles}`}
                            role="alert"
                          >
                            <h2
                              style={{
                                margin: "20px",
                                padding: "20px",
                                textAlign: "center",
                                color: "#383838",
                              }}
                            >
                              No Results found.
                            </h2>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ) : (
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
                      <div className={`${styles.cards} ${styles.box__sizing}`}>
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
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`col-lg-4 ${styles.side__bar__single__brand__main}`}
            >
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
                      data-content="latest reviews"
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

                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        height: "3px",
                        width: "100%",
                        margin: 0,
                        backgroundColor: "rgba(202, 28, 28, 0.945)",
                      }}
                    />
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
                      data-content="latest news"
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

                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        height: "3px",
                        width: "100%",
                        margin: 0,
                        backgroundColor: "rgba(202, 28, 28, 0.945)",
                      }}
                    />
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

// This also gets called at build time
export async function getStaticProps() {
  const news = await newsListPublicMobileReviews().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const reviews = await reviewListPublicMobileNews().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const mobiles = await mCategoryList().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  return {
    props: {
      news,
      reviews,
      mobiles,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default Mobiles;
