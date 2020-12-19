import Head from "next/head";
import DefaultErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  singleNews,
  newsListPublicTopStories,
  listRelatedMobiles,
  listRelatedReviews,
  newsListPublic,
} from "../../actions/news.action";
import moment from "moment";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import { MdRateReview } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import renderHTML from "react-render-html";
import { FacebookProvider, Comments } from "react-facebook";
import React from "react";
import styles from "../../styles/newsFrontEndSingle.module.css";
import { InlineShareButtons } from "sharethis-reactjs";
import Loader from "react-loader-spinner";
/**
 * completed!
 */
const SingleNewsBlog = ({ blog, reviews, mobiles, newsStories }) => {
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
  if (!blog.data) {
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
      <title>{`${blog.data.title} - ${APP_NAME}`}</title>
      <meta name="description" content={`${blog.data.mdesc}`} />
      <link rel="canonical" href={`${DOMAIN}/news/${blog.data.slug}`} />
      <meta property="og:title" content={`${blog.data.title} - ${APP_NAME}`} />
      <meta property="og:description" content={`${blog.data.mdesc}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/news/${blog.data.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        alt="Photo by sam loyd on Unsplash"
        property="og:image"
        content={`/static/images/sam-loyd-single-brand-cover-page.jpg`}
      />
      <meta
        alt="Photo by sam loyd on Unsplash"
        property="og:image:secure_url"
        content={`/static/images/sam-loyd-single-brand-cover-page.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showSideBarReviews = () => {
    return reviews.map((blog, i) => (
      <React.Fragment key={i}>
        <div key={i} className={styles.sidebar_review_container}>
          <div className={styles.image_review}>
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
            className={styles.content_review}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content_div_review}>
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className={styles.author_div_review}>
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
        <div className={styles.single__card__phone}>
          <div className={styles.card__image__container__phone}>
            <Link href={`/phones/brand/${m.slug}`}>
              <a>
                <img src={`${API}/mobile/photo/${m.slug}`} alt={`${m.title}`} />
              </a>
            </Link>
          </div>
          <div className={styles.card__content__phone}>
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
            <div className={styles.excerpt_div}>
              <Link href={`/news/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  {renderHTML(blog.excerpt)}
                </a>
              </Link>
            </div>
            <div className={styles.author__div}>
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
            <a className={`btn ${styles.sub__tab__style}`}>{t.name}</a>
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

  const showNews = (blog) => (
    <div className="col-md-12 pl-0 pr-0" style={{ overflow: "auto" }}>
      {renderHTML(blog)}
    </div>
  );

  return (
    <React.Fragment>
      {blog.data && reviews && mobiles && newsStories ? (
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
                    <li className="breadcrumb-item">
                      <Link href="/news">
                        <a>News</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Here
                    </li>
                  </ol>
                </nav>
              </div>
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
                          width: "100%",
                        }}
                      >
                        <div>
                          <h1 className={styles.main__div__main__topic}>
                            {blog.data.title}
                          </h1>
                        </div>
                        <div className={styles.tag__container}>
                          {showTags(blog.data)}
                        </div>
                        <div style={{ width: "100%" }}>
                          <InlineShareButtons
                            config={{
                              alignment: "justified", // alignment of buttons (left, center, right)
                              color: "social", // set the color of buttons (social, white)
                              enabled: true, // show/hide buttons (true, false)
                              font_size: 12, // font size for the buttons
                              labels: "cta", // button labels (cta, counts, null)
                              language: "en", // which language to use (see LANGUAGES)
                              networks: [
                                // which networks to include (see SHARING NETWORKS)
                                "facebook",
                                "twitter",
                                "pinterest",
                                "linkedin",
                                "whatsapp",
                              ],
                              padding: 10, // padding within buttons (INTEGER)

                              radius: 4, // the corner radius on each button (INTEGER)
                              show_total: false,

                              size: 30, // the size of each button (INTEGER)

                              // OPTIONAL PARAMETERS
                              url: `${DOMAIN}/news/${blog.data.slug}`, // (defaults to current url)
                              image: `${DOMAIN}/static/images/sam-loyd-single-brand-cover-page.jpg`, // (defaults to og:image or twitter:image)
                              description: "custom text", // (defaults to og:description or twitter:description)
                              title: "custom title", // (defaults to og:title or twitter:title)
                              message: "custom email text", // (only for email sharing)
                              subject: "custom email subject", // (only for email sharing)
                              username: "custom twitter handle", // (only for twitter sharing)
                            }}
                          />
                        </div>
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
                              src={`${API}/user/photo/${blog.data.postedBy.username}`}
                              alt="Avatar"
                              className={styles.avatar}
                            />
                          </div>
                          <div className={styles.author__name}>
                            <span>
                              <Link
                                href={`/profile/${blog.data.postedBy.username}`}
                              >
                                <a> {blog.data.postedBy.username} </a>
                              </Link>{" "}
                              | {moment(blog.data.updatedAt).fromNow()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <img
                            src={`${API}/news/photo/${blog.data.slug}`}
                            alt="cover photo"
                            className="img img-fluid"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div style={{ width: "100%" }}>
                          {showNews(blog.data.body)}
                        </div>
                        <hr
                          className={styles.disappear}
                          style={{ width: "100%" }}
                        />

                        <div className={styles.comment__width}>
                          <div
                            className={`col-md-12 ${styles.disappear}`}
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
                            className={`${styles.comments} ${styles.disappear}`}
                            style={{ overflowX: "hidden" }}
                          >
                            {showComments()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`row ${styles.side__bar__riverse}`}>
                  {mobiles.length !== 0 ? (
                    <div
                      className={`row mr-0 ${styles.side__bar__single__brand}`}
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
                            className={styles.hrText}
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
                        <div
                          className={`${styles.cards__phone} ${styles.box__sizing__phone} ${styles.side__bar__phones}`}
                        >
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
                              marginTop: "6px",
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
                  ) : (
                    ""
                  )}
                  {reviews.length !== 0 ? (
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
                        }}
                      >
                        <div style={{ marginRight: "5px" }}>
                          <MdRateReview size="1rem" color="#818078" />
                        </div>
                        <div style={{ width: "100%", paddingTop: 0 }}>
                          <hr
                            style={{ marginTop: "6px" }}
                            className={styles.hrText}
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
                              marginTop: "6px",
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
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className={`row mt-2 ${styles.add__margin__in__small__divices}`}
                >
                  <div className="col-md-12">
                    {newsStories.length !== 0 ? (
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
                              className={styles.hrText}
                              data-content="Top stories"
                            />
                          </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                          {showNewsStories()}
                        </div>
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
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`col-lg-4 ${styles.side__bar__single__brand__main} ${styles.side__bar__riverse__display__none}`}
              >
                {mobiles.length >= 4 ? (
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
                        <FiSmartphone size="1rem" color="#818078" />
                      </div>
                      <div style={{ width: "100%", paddingTop: 0 }}>
                        <hr
                          style={{ marginTop: "6px" }}
                          className={styles.hrText}
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
                      <div
                        className={`${styles.cards__phone} ${styles.box__sizing__phone} ${styles.side__bar__phones}`}
                      >
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
                            marginTop: "6px",
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
                ) : (
                  ""
                )}
                {reviews.length !== 0 ? (
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
                      }}
                    >
                      <div style={{ marginRight: "5px" }}>
                        <MdRateReview size="1rem" color="#818078" />
                      </div>
                      <div style={{ width: "100%", paddingTop: 0 }}>
                        <hr
                          style={{ marginTop: "6px" }}
                          className={styles.hrText}
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
                            marginTop: "6px",
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
                ) : (
                  ""
                )}
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
              timeout={10000} //3 secs
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  //done
  const blog = await newsListPublic().then((data) => {
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
  //done
  const blog = await singleNews(params.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  //done
  const reviews = await listRelatedReviews({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  //done
  const mobiles = await listRelatedMobiles({ blog }).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  //done
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

export default SingleNewsBlog;
