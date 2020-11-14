import Layout from "../components/Layout";
import { useState } from "react";
import Head from "next/head";
import moment from "moment";
import Link from "next/link";
import {
  newsPublicLatest,
  newsPublicSecondLatest,
  newsListPublicLimitFirstSection,
  newsListPublicLimitSecondSection,
  newsListPublicLimitFinalSection,
} from "../actions/news.action";
import {
  reviewPublicLatest,
  reviewPublicSecondLatest,
  reviewPublicEightLatest,
  reviewListPublicMobileNews,
  reviewListPublicLimitedSectionOne,
  reviewListPublicLimitedSectionTwo,
  reviewListPublic,
} from "../actions/review.action";
import { mCategoryListHomePage } from "../actions/mobileCategory.action";
import { mobileListPublicNewsReviews } from "../actions/mobile.action";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import { MdRateReview, MdNavigateNext } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import renderHTML from "react-render-html";
import styles from "../styles/homePage.module.css";

const Index = ({
  latestNews,
  secondLatestNews,
  latestReview,
  secondLatestReview,
  eightLatestReview,
  newsLimitFirstSection,
  newsLimitSecondSection,
  newsLimitFinalSection,
  limitedReviewsSectionOne,
  limitedReviewsSectionTwo,
  reviewListLatest,
  mobileCategoryList,
  mobileListLatest,
}) => {
  const head = () => (
    <Head>
      <title>Home Page - {APP_NAME}</title>
      <meta
        name="description"
        content="List of all mobile phones,smartphones,tablets,wearables and accessories brands"
      />
      <link rel="canonical" href={`${DOMAIN}/`} />
      <meta property="og:title" content={`Home Pages - ${APP_NAME}`} />
      <meta
        property="og:description"
        content="List of all mobile phones,smartphones,tablets,wearables and accessories brands"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/phones`} />
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

  /**this function executes main top featuring contents - for large screen 1200px*/
  const showHighlight = () => {
    return (
      /**main large screen div starts here */
      <div className="col-md-12 pl-0 pr-0 mt-4" style={{ width: "100%" }}>
        <div
          className="row ml-0 mr-0"
          style={{ width: "100%", height: "500px" }}
        >
          {/**leftside banner */}
          <div
            className="col-md-6 pl-0 pr-0"
            style={{ width: "100%", height: "500px" }}
          >
            <Link href={`/news/${latestNews.slug}`}>
              <a
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="container_common container_left">
                  <div className="overlay"></div>
                  <img
                    className="img_wrapper"
                    src={`${API}/news/photo/${latestNews.slug}`}
                    alt={latestNews.title}
                  />
                  <div className="news_title">
                    <h1>{latestNews.title}</h1>
                  </div>
                  <div className="author">
                    <span>
                      By {latestNews.postedBy.username} |{" "}
                      {moment(latestNews.updatedAt).fromNow()}
                    </span>
                  </div>
                  <div className="blog_type">
                    <span>NEWS</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/**end leftside banner */
          /**right side banner block container*/}
          <div
            className="col-md-6 pl-0 pr-0 container_right"
            style={{ width: "100%", height: "500px" }}
          >
            <div
              className="row ml-0 mr-0"
              style={{ width: "100%", height: "500px" }}
            >
              {/**righ side top banner*/}
              <div
                className="col-md-12 pl-0 pr-0"
                style={{ width: "100%", height: "250px" }}
              >
                <Link href={`/news/${secondLatestNews.slug}`}>
                  <a
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div className="container_common container_right_top">
                      <div className="overlay"></div>
                      <img
                        className="img_wrapper"
                        src={`${API}/news/photo/${secondLatestNews.slug}`}
                        alt={secondLatestNews.title}
                      />
                      <div className="news_title news_title_right_top">
                        <h1>{secondLatestNews.title}</h1>
                      </div>
                      <div className="author">
                        <span>
                          By {secondLatestNews.postedBy.username} |{" "}
                          {moment(secondLatestNews.updatedAt).fromNow()}
                        </span>
                      </div>
                      <div className="blog_type">
                        <span>NEWS</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/**end righ side top banner*/
              /**righ side bottom banner block container*/}
              <div
                className="col-md-12 pl-0 pr-0 container_right_bottom"
                style={{ width: "100%", height: "250px" }}
              >
                <div className="row ml-0 mr-0" style={{ width: "100%" }}>
                  {/**righ side bottom left banner*/}
                  <div className="col-md-6 pl-0 pr-0" style={{ width: "100%" }}>
                    <Link href={`/reviews/${latestReview.slug}`}>
                      <a
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <div className="container_common container_right_bottom_left">
                          <div className="overlay"></div>
                          <img
                            className="img_wrapper"
                            src={`${API}/reviews/photo/${latestReview.slug}`}
                            alt={latestReview.title}
                          />
                          <div className="news_title news_title_right_bottom_left">
                            <h1>{latestReview.title}</h1>
                          </div>
                          <div className="author">
                            <span>
                              By {latestReview.postedBy.username} |{" "}
                              {moment(latestReview.updatedAt).fromNow()}
                            </span>
                          </div>
                          <div className="blog_type">
                            <span>REVIEW</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  {/**end righ side bottom left banner*/
                  /**righ side bottom right banner*/}
                  <div className="col-md-6 pl-0 pr-0" style={{ width: "100%" }}>
                    <Link href={`/reviews/${secondLatestReview.slug}`}>
                      <a
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <div className="container_common container_right_bottom_right">
                          <div className="overlay"></div>
                          <img
                            className="img_wrapper"
                            src={`${API}/reviews/photo/${secondLatestReview.slug}`}
                            alt={secondLatestReview.title}
                          />
                          <div className="news_title news_title_right_bottom_right">
                            <h1>{secondLatestReview.title}</h1>
                          </div>
                          <div className="author">
                            <span>
                              By {secondLatestReview.postedBy.username} |{" "}
                              {moment(secondLatestReview.updatedAt).fromNow()}
                            </span>
                          </div>
                          <div className="blog_type">
                            <span>REVIEW</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  {/**end righ side bottom right banner*/}
                </div>
              </div>
              {/**end righ side bottom banner block container*/}
            </div>
          </div>
          {/**end right side banner block container*/}
        </div>
      </div>
      /**main large screen div ends here */
    );
  };

  /**this function executes main top featuring contents - for medium screen 1001px*/
  const showHighlightMediumScreen = () => {
    return (
      /**main medium screen div starts here */
      <div className="col-md-12 pl-0 pr-0 mt-4" style={{ width: "100%" }}>
        <div
          className="row ml-0 mr-0"
          style={{ width: "100%", height: "500px" }}
        >
          {/**leftside banner */}
          <div
            className="col-md-6 pl-0 pr-0"
            style={{ width: "100%", height: "500px" }}
          >
            <Link href={`/news/${latestNews.slug}`}>
              <a
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="container_common container_left">
                  <div className="overlay"></div>
                  <img
                    className="img_wrapper"
                    src={`${API}/news/photo/${latestNews.slug}`}
                    alt={latestNews.title}
                  />
                  <div className="news_title">
                    <h1>{latestNews.title}</h1>
                  </div>
                  <div className="author">
                    <span>
                      By {latestNews.postedBy.username} |{" "}
                      {moment(latestNews.updatedAt).fromNow()}
                    </span>
                  </div>
                  <div className="blog_type">
                    <span>NEWS</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/**leftside banner ends here*/}
          {/**rightside banner block container*/}
          <div
            className="col-md-6 pl-0 pr-0"
            style={{ width: "100%", height: "500px" }}
          >
            <div
              className="row ml-0 mr-0"
              style={{ width: "100%", height: "500px" }}
            >
              <div
                className="col-md-12 pl-0 pr-0 container_right_medium_screen"
                style={{ width: "100%", height: "420px" }}
              >
                {/**rightside banner  top div*/}
                <div className="container_common container_right_top_medium_screen">
                  <Link href={`/news/${secondLatestNews.slug}`}>
                    <a
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <div className="overlay"></div>
                      <img
                        className="img_wrapper"
                        src={`${API}/news/photo/${secondLatestNews.slug}`}
                        alt={secondLatestNews.title}
                      />
                      <div className="news_title news_title_right_top_medium_screent">
                        <h1>{secondLatestNews.title}</h1>
                      </div>
                      <div className="author">
                        <span>
                          {" "}
                          By {secondLatestNews.postedBy.username} |{" "}
                          {moment(secondLatestNews.updatedAt).fromNow()}
                        </span>
                      </div>
                      <div className="blog_type">
                        <span>NEWS</span>
                      </div>
                    </a>
                  </Link>
                </div>
                {/**rightside banner  top div ends here*/
                /**rightside banner  bottom div stsrts here*/}
                <div className="container_common container_right_bottom_medium_screen">
                  <Link href={`/reviews/${latestReview.slug}`}>
                    <a
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <div className="overlay"></div>
                      <img
                        className="img_wrapper"
                        src={`${API}/reviews/photo/${latestReview.slug}`}
                        alt={latestReview.title}
                      />
                      <div className="news_title news_title_right_bottom_medium_screen">
                        <h1>{latestReview.title}</h1>
                      </div>
                      <div className="author">
                        <span>
                          By {latestReview.postedBy.username} |{" "}
                          {moment(latestReview.updatedAt).fromNow()}
                        </span>
                      </div>
                      <div className="blog_type">
                        <span>REVIEW</span>
                      </div>
                    </a>
                  </Link>
                </div>
                {/**rightside banner  bottom div ends here*/}
              </div>
            </div>
          </div>
          {/**rightside banner block container*/}
        </div>
      </div>
      /**main medium screen div ends here */
    );
  };

  /**this function executes main top featuring contents - for small screen 767px*/
  const smallScreenHighlight = () => {
    return (
      /**main small screen div starts here */
      <div className="col-md-12 mt-4 small_screen_block">
        {/**small screen card */}
        <div className="small_screen_container">
          <Link href={`/reviews/${latestReview.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className="overlay"></div>
              <img
                className="small_screen_img_wrapper"
                src={`${API}/reviews/photo/${latestReview.slug}`}
                alt={latestReview.title}
              />
              <div className="news_title news_title_small_screen">
                <h1>{latestReview.title}</h1>
              </div>
              <div className="author">
                <span>
                  By {latestReview.postedBy.username} |{" "}
                  {moment(latestReview.updatedAt).fromNow()}
                </span>
              </div>
              <div className="blog_type">
                <span>REVIEW</span>
              </div>
            </a>
          </Link>
        </div>
        {/**small screen card */
        /**ends here */}
        <div className="small_screen_container">
          <Link href={`/news/${latestNews.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className="overlay"></div>
              <img
                className="small_screen_img_wrapper"
                src={`${API}/news/photo/${latestNews.slug}`}
                alt={latestNews.title}
              />
              <div className="news_title news_title_small_screen">
                <h1>{latestNews.title}</h1>
              </div>
              <div className="author">
                <span>
                  By {latestNews.postedBy.username} |{" "}
                  {moment(latestNews.updatedAt).fromNow()}
                </span>
              </div>
              <div className="blog_type">
                <span>NEWS</span>
              </div>
            </a>
          </Link>
        </div>
        {/**small screen card */
        /**ends here */}
        <div className="small_screen_container">
          <Link href={`/reviews/${secondLatestReview.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className="overlay"></div>
              <img
                className="small_screen_img_wrapper"
                src={`${API}/reviews/photo/${secondLatestReview.slug}`}
                alt={secondLatestReview.title}
              />
              <div className="news_title news_title_small_screen">
                <h1>{secondLatestReview.title}</h1>
              </div>
              <div className="author">
                <span>
                  By {secondLatestReview.postedBy.username} |{" "}
                  {moment(secondLatestReview.updatedAt).fromNow()}
                </span>
              </div>
              <div className="blog_type">
                <span>REVIEW</span>
              </div>
            </a>
          </Link>
        </div>
        {/**small screen card */
        /**ends here */}
        <div className="small_screen_container">
          <Link href={`/news/${secondLatestNews.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className="overlay"></div>
              <img
                className="small_screen_img_wrapper"
                src={`${API}/news/photo/${secondLatestNews.slug}`}
                alt={secondLatestNews.title}
              />
              <div className="news_title news_title_small_screen">
                <h1>{secondLatestNews.title}</h1>
              </div>
              <div className="author">
                <span>
                  {" "}
                  By {secondLatestNews.postedBy.username} |{" "}
                  {moment(secondLatestNews.updatedAt).fromNow()}
                </span>
              </div>
              <div className="blog_type">
                <span>NEWS</span>
              </div>
            </a>
          </Link>
        </div>
        {/**ends here */}
      </div>
      /**main small screen div ends here */
    );
  };

  const newsLimit = 10;
  const newsSkip = 32;
  const [limit, setLimit] = useState(newsLimit);
  const [skip, setSkip] = useState(newsSkip);
  const [newsSize, setNewsSize] = useState(newsLimitFinalSection.length);
  const [loadedNews, setLoadedNews] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    newsListPublicLimitFinalSection(skip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedNews([...loadedNews, ...data]);
        setNewsSize(data.length);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      <div className="container" style={{ textAlign: "center", width: "100%" }}>
        {newsSize > 0 && newsSize >= limit && (
          <div onClick={loadMore} className="load_more_button">
            Load more
          </div>
        )}
      </div>
    );
  };

  const showSideBarReviews = () => {
    return reviewListLatest.map((blog, i) => (
      <div key={i}>
        <div key={i} className="review_container_middle">
          <div className="image_review_middle">
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
            className="content_review_middle"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content_div_review_middle">
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className="author_div_review_middle">
              <span>
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const showSideBarMobiles = () => {
    return mobileListLatest.map((m, i) => (
      <div key={i}>
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
      </div>
    ));
  };

  const showReviewBlock = () => {
    return (
      <div className="col-md-12 pl-0 pr-0 mt-2" style={{ width: "100%" }}>
        <div
          className="row ml-0 mr-0"
          style={{ width: "100%", height: "100%" }}
        >
          <Link href={`/reviews/${eightLatestReview.slug}`}>
            <a
              style={{
                textDecoration: "none",
                width: "100%",
              }}
            >
              <div className="container_review_middle">
                <div className="overlay"></div>
                <img
                  className="img_wrapper"
                  src={`${API}/reviews/photo/${eightLatestReview.slug}`}
                  alt={eightLatestReview.title}
                />
                <div className="title_review_middle">
                  <h1>{eightLatestReview.title}</h1>
                </div>
                <div className="author">
                  <span>
                    {" "}
                    By {eightLatestReview.postedBy.username} |{" "}
                    {moment(eightLatestReview.updatedAt).fromNow()}
                  </span>
                </div>
                <div className="blog_type">
                  <span>REVIEW</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div
          className="row ml-0 mr-0 mt-3"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="col-md-6">{showReviewsInsideReviewBlockLeft()}</div>
          <div className="col-md-6 display_none_review_middle_bottom">
            {showReviewsInsideReviewBlockRight()}
          </div>
        </div>
      </div>
    );
  };

  const showReviewsInsideReviewBlockLeft = () => {
    return limitedReviewsSectionOne.map((blog, i) => (
      <div key={i}>
        <div key={i} className="review_container_middle">
          <div className="image_review_middle">
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
            className="content_review_middle"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content_div_review_middle">
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className="author_div_review_middle">
              <span>
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const showReviewsInsideReviewBlockRight = () => {
    return limitedReviewsSectionTwo.map((blog, i) => (
      <div key={i}>
        <div key={i} className="review_container_middle">
          <div className="image_review_middle">
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
            className="content_review_middle"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="content_div_review_middle">
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className="author_div_review_middle">
              <span>
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const showNewsFirstSection = () => {
    return newsLimitFirstSection.map((blog, i) => (
      <div key={i}>
        <div className="news__container">
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
      </div>
    ));
  };

  const showNewsSecondSection = () => {
    return newsLimitSecondSection.map((blog, i) => (
      <div key={i}>
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
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const showNewsFinalSection = () => {
    return newsLimitFinalSection.map((blog, i) => (
      <div key={i}>
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
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const showNewsFinalSectionLoadedNews = () => {
    return loadedNews.map((blog, i) => (
      <div key={i}>
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
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Layout>
      <div>
        <div>{head()}</div>
        <div className="large_screen_featuring">
          {latestNews && latestReview && secondLatestReview && secondLatestNews
            ? showHighlight()
            : ""}
        </div>
        <div className="medium_screen_featuring">
          {latestNews && latestReview && secondLatestNews
            ? showHighlightMediumScreen()
            : ""}
        </div>
        <div className="small_screen_featuring">
          {latestNews && latestReview && secondLatestReview && secondLatestNews
            ? smallScreenHighlight()
            : ""}
        </div>

        <div className="container mt-4 mb-4 pl-0 pr-0">
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
                    <div style={{ padding: "10px" }}>
                      {showNewsFirstSection()}
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
                            data-content="reviews"
                          />
                        </div>
                      </div>
                      {showReviewBlock()}
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          marginTop: 0,
                          marginBottom: "8px",
                        }}
                      >
                        <div style={{ marginRight: "5px" }}>
                          <FaNewspaper size="1rem" color="#818078" />
                        </div>
                        <div style={{ width: "100%", paddingTop: 0 }}>
                          <hr
                            style={{ marginTop: "6px" }}
                            className="hrText"
                            data-content="more news"
                          />
                        </div>
                      </div>
                      {showNewsSecondSection()}
                      <div className="display_none_more_news_main_block">
                        {showNewsFinalSection()}
                        {loadedNews ? (
                          showNewsFinalSectionLoadedNews()
                        ) : (
                          <div>Loading...</div>
                        )}
                        <div className="container">{loadMoreButton()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 side__bar__single__brand__main">
              {mobileListLatest ? (
                <div>
                  <div
                    className="row mr-0 side__bar__single__brand"
                    style={{
                      backgroundColor: "#fff",
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
                </div>
              ) : (
                ""
              )}

              {reviewListPublic ? (
                <div>
                  <div
                    className="row mr-0 mt-2 side__bar__single__brand display_none_side_bar_review"
                    style={{
                      backgroundColor: "#fff",
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
              ) : (
                ""
              )}
            </div>
          </div>

          {newsLimitFinalSection ? (
            <div>
              <div className="row ml-0 mr-0 mt-2 display_none_more_news_small_screen">
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
                        <div style={{ padding: "10px" }}>
                          <div
                            className="col-md-12"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              width: "100%",
                              marginTop: "10px",
                              marginBottom: "8px",
                            }}
                          >
                            <div style={{ marginRight: "5px" }}>
                              <FaNewspaper size="1rem" color="#818078" />
                            </div>
                            <div style={{ width: "100%", paddingTop: 0 }}>
                              <hr
                                style={{ marginTop: "6px" }}
                                className="hrText"
                                data-content="more news"
                              />
                            </div>
                          </div>
                          {showNewsFinalSection()}
                          {loadedNews ? (
                            showNewsFinalSectionLoadedNews()
                          ) : (
                            <div>Loading...</div>
                          )}
                          <div className="container">{loadMoreButton()}</div>
                        </div>
                      </div>
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
    </Layout>
  );
};

// This also gets called at build time
export async function getStaticProps() {
  const newsLimitFirstSection = await newsListPublicLimitFirstSection().then(
    (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data;
      }
    }
  );

  const newsLimitSecondSection = await newsListPublicLimitSecondSection().then(
    (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data;
      }
    }
  );

  let skip = 22;
  let limit = 10;

  const newsLimitFinalSection = await newsListPublicLimitFinalSection(
    skip,
    limit
  ).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const reviewListLatest = await reviewListPublicMobileNews().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const mobileCategoryList = await mCategoryListHomePage().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const mobileListLatest = await mobileListPublicNewsReviews().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const latestNews = await newsPublicLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const secondLatestNews = await newsPublicSecondLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const latestReview = await reviewPublicLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const secondLatestReview = await reviewPublicSecondLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const eightLatestReview = await reviewPublicEightLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const limitedReviewsSectionOne = await reviewListPublicLimitedSectionOne().then(
    (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data;
      }
    }
  );
  const limitedReviewsSectionTwo = await reviewListPublicLimitedSectionTwo().then(
    (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data;
      }
    }
  );

  return {
    props: {
      latestNews,
      secondLatestNews,
      latestReview,
      secondLatestReview,
      eightLatestReview,
      newsLimitFirstSection,
      newsLimitSecondSection,
      newsLimitFinalSection,
      limitedReviewsSectionOne,
      limitedReviewsSectionTwo,
      reviewListLatest,
      mobileCategoryList,
      mobileListLatest,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default Index;
