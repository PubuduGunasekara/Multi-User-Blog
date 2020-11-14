import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { reviewListPublicMobileNews } from "../../actions/review.action";
import { mobileListPublicNewsReviews } from "../../actions/mobile.action";
import { newsListPublic } from "../../actions/news.action";
import moment from "moment";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import { MdRateReview, MdNavigateNext } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import renderHTML from "react-render-html";

/**
 * completed!
 */
const AllNews = ({ news, reviews, mobiles }) => {
  const head = () => (
    <Head>
      <link rel="stylesheet" href="/static/css/newsFrontEnd.css" />
      <title>Tech News - {APP_NAME}</title>
      <meta name="description" content="hhh" />
      <link rel="canonical" href={`${DOMAIN}/news`} />
      <meta property="og:title" content={`Tech News - ${APP_NAME}`} />
      <meta property="og:description" content="ddd" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/reviews}`} />
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

  const showSideBarReviews = () => {
    return reviews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className="sidebar_review_container">
          <div className="image_review">
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
            className="content_review"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content_div_review">
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className="author_div_review">
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const showSideBarMobiles = () => {
    return mobiles.map((m, i) => (
      <React.Fragment key={i}>
        <div className="single__card__phone">
          <div className="card__image__container__phone">
            <Link href={`/phones/brand/${m.slug}`}>
              <a>
                <img src={`${API}/mobile/photo/${m.slug}`} alt={`${m.title}`} />
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
    ));
  };

  /**news pagination states */
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPost = news.slice(indexofFirstPost, indexofLastPost);
  const lastPage = news.length / postPerPage;

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

  const showNews = () => {
    return currentPost.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className="news__container">
          <div className="image__news">
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
            className="content__news"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content__div">
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>
            <div className="excerpt_div">
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  {renderHTML(blog.excerpt)}
                </a>
              </Link>
            </div>
            <div className="author__div">
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const [searchValues, setSearchValues] = useState({
    search: "",
    showSearch: undefined,
    filteredContent: [],
  });

  const { search, showSearch, filteredContent } = searchValues;

  const handleChange = (e) => {
    setSearchValues({
      ...searchValues,
      search: e.target.value,
      showSearch: false,
      filteredContent: [],
    });
  };

  const seacrhSubmit = (e) => {
    e.preventDefault();

    setSearchValues({
      ...searchValues,
      showSearch: true,
      filteredContent: news.filter((data) => {
        return (
          data.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !=
          -1
        );
      }),
    });
    //console.log("after return", filteredContent);
  };

  /**reviewSearch pagination states */
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

  const showSearchedNews = (filteredContent) => {
    return filteredContent.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className="news__container">
          <div className="image__news">
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
            className="content__news"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content__div">
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>
            <div className="excerpt_div">
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  {renderHTML(blog.excerpt)}
                </a>
              </Link>
            </div>
            <div className="author__div">
              <span>
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div
          className="main_top_banner"
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
              <h1 className="cover__image__div__main__topic">News</h1>
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
                  title={`search for News`}
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
                                className="hrText"
                                data-content={`${filteredContent.length} result(s) found!`}
                              />
                            </div>
                          </div>
                          <div style={{ padding: "10px" }}>
                            {showSearchedNews(filteredContent)}
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
                              margin: "20px",
                              padding: "20px",
                              textAlign: "center",
                              width: "100%",
                              height: "100%",
                            }}
                            className="alert alert-danger change__no__results__found__styles"
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
                      <div style={{ padding: "10px" }}>{showNews()}</div>

                      <div style={{ width: "100%" }}>
                        {Pagination(
                          postPerPage,
                          news.length,
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
                    <FiSmartphone size="1rem" color="#818078" />
                  </div>
                  <div style={{ width: "100%", paddingTop: 0 }}>
                    <hr
                      style={{ marginTop: "6px" }}
                      className="hrText"
                      data-content="latest phones"
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
                  <div className="cards__phone box__sizing__phone side__bar__phones">
                    {showSideBarMobiles()}
                  </div>
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
                              view all
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
                  }}
                >
                  <div style={{ marginRight: "5px" }}>
                    <MdRateReview size="1rem" color="#818078" />
                  </div>
                  <div style={{ width: "100%", paddingTop: 0 }}>
                    <hr
                      style={{ marginTop: "6px" }}
                      className="hrText"
                      data-content="latest reviews"
                    />
                  </div>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    paddingTop: "10px",
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
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

// This also gets called at build time
export async function getStaticProps() {
  const news = await newsListPublic().then((data) => {
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

  const mobiles = await mobileListPublicNewsReviews().then((data) => {
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

export default AllNews;
