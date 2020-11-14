import Head from "next/head";
import DefaultErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import {
  singleReview,
  listRelatedMobiles,
  newsListPublicTopStories,
  listRelated,
  reviewListPublic,
} from "../../actions/review.action";
import moment from "moment";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import { MdRateReview, MdNavigateNext } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import renderHTML from "react-render-html";
import { FacebookProvider, Comments, CommentsCount } from "react-facebook";

/**
 * completed!
 */
const SingleBlogReview = ({ blog, reviews, mobiles, newsStories }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!blog) {
    return (
      <React.Fragment>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </React.Fragment>
    );
  }

  const head = () => (
    <Head>
      <link rel="stylesheet" href="/static/css/reviewFrontEndSingle.css" />
      <title>{`${blog.title} - ${APP_NAME}`}</title>
      <meta name="description" content={`${blog.mdesc}`} />
      <link rel="canonical" href={`${DOMAIN}/reviews/${blog.slug}`} />
      <meta property="og:title" content={`${blog.title} - ${APP_NAME}`} />
      <meta property="og:description" content={`${blog.mdesc}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/reviews/${blog.slug}`} />
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
  const [postPerPage] = useState(25);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPost = newsStories.slice(indexofFirstPost, indexofLastPost);
  const lastPage = newsStories.length / postPerPage;

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

  const showNewsStories = () => {
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

  const showTags = (blog) =>
    blog.tags.map((t, i) => {
      return (
        <React.Fragment key={i}>
          <Link href={`/tag/${t.slug}`}>
            <a className="btn sub__tab__style">{t.name}</a>
          </Link>
        </React.Fragment>
      );
    });

  const showComments = () => {
    return (
      <FacebookProvider appId={`${FB_APP_ID}`}>
        <Comments href={`${DOMAIN}/news/${blog.slug}`} />
      </FacebookProvider>
    );
  };

  const showReview = (blog) => (
    <div className="col-md-12 pl-0 pr-0" style={{ overflow: "auto" }}>
      {renderHTML(blog)}
    </div>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="container mt-5 mb-5 pl-0 pr-0">
          <div className="row ml-0 mr-0">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-12">
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
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingBottom: "25px",
                        paddingTop: "15px",
                      }}
                    >
                      <div>
                        <h1 className="main__div__main__topic">{blog.title}</h1>
                      </div>
                      <div className="tag__container">{showTags(blog)}</div>
                      <hr style={{ width: "100%" }} />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        <div>
                          <img
                            src={`${API}/user/photo/${blog.postedBy.username}`}
                            alt="Avatar"
                            className="avatar"
                          />
                        </div>
                        <div className="author__name">
                          <span>
                            <Link href={`/profile/${blog.postedBy.username}`}>
                              <a> {blog.postedBy.username} </a>
                            </Link>{" "}
                            | {moment(blog.updatedAt).fromNow()}
                          </span>
                        </div>
                      </div>
                      <div>
                        <img
                          src={`${API}/reviews/photo/${blog.slug}`}
                          alt="cover photo"
                          className="img img-fluid"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        {showReview(blog.body)}
                      </div>
                      <hr className="disappear" style={{ width: "100%" }} />

                      <div className="comment__width">
                        <div
                          className="col-md-12 disappear"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            marginBottom: "10px",
                          }}
                        >
                          <div>
                            <h2
                              className="font-weight-bolder"
                              style={{
                                lineHeight: "130%",
                                textTransform: "capitalize",
                                fontSize: "24px",
                                fontWeight: "bold",
                                color: "rgba(0, 0, 0, 0.781)",
                                padding: "10px",
                                marginBottom: 0,
                              }}
                            >
                              Readers Comments
                            </h2>
                          </div>
                        </div>
                        <div
                          className="comments disappear"
                          style={{ overflowX: "hidden" }}
                        >
                          {showComments()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row side__bar__riverse">
                <div
                  className="row mr-0 side__bar__single__brand"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                    marginTop: 0,
                    width: "100%",
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
                        data-content="related phones"
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-12"
                    style={{
                      paddingRight: "12px",
                      paddingLeft: "12px",
                      width: "100%",
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
                        data-content="related reviews"
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-12"
                    style={{
                      paddingTop: "15px",
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

              <div className="row mt-2 add__margin__in__small__divices">
                <div className="col-md-12">
                  <div
                    className="row"
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
                        <FaNewspaper size="1rem" color="#818078" />
                      </div>
                      <div style={{ width: "100%", paddingTop: 0 }}>
                        <hr
                          style={{ marginTop: "7px" }}
                          className="hrText"
                          data-content="Top stories"
                        />
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>{showNewsStories()}</div>
                    <div style={{ width: "100%" }}>
                      {Pagination(
                        postPerPage,
                        newsStories.length,
                        paginate,
                        nextPage,
                        previousPage,
                        currentPage,
                        lastPage
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 side__bar__single__brand__main side__bar__riverse__display__none">
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
                      data-content="related phones"
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
                      data-content="related reviews"
                    />
                  </div>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    paddingTop: "15px",
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

export async function getStaticPaths() {
  const blog = await reviewListPublic().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const paths = blog.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const blog = await singleReview(params.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const reviews = await listRelated({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const mobiles = await listRelatedMobiles({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const newsStories = await newsListPublicTopStories({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  return {
    props: {
      blog,
      reviews,
      mobiles,
      newsStories,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default SingleBlogReview;
