import React from "react";
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
  reviewListPublicHomePage,
  reviewListPublicLimitedSectionOne,
  reviewListPublicLimitedSectionTwo,
  reviewListPublic,
} from "../actions/review.action";
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
  mobileListLatest,
}) => {
  const head = () => (
    <Head>
      <title>{APP_NAME} - Phone specs, News and Reviews hub</title>
      <meta
        name="description"
        content={`${APP_NAME} - brings you the latest tech news, best mobile reviews and mobile specs to make your choices much easier. `}
      />
      <link rel="canonical" href={`${DOMAIN}/`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TechbotL" />
      <meta
        name="twitter:title"
        content={`${APP_NAME} - Phone specs, News and Reviews hub`}
      />
      <meta
        name="twitter:description"
        content={`${APP_NAME} - brings you the latest tech news, best mobile reviews and mobile specs to make your choices much easier. `}
      />
      <meta
        alt="Photo by sam loyd on Unsplash"
        name="twitter:image"
        content={`${DOMAIN}/static/images/sam-loyd-single-brand-cover-page.jpg`}
      />

      <meta
        property="og:title"
        content={`${APP_NAME} - Phone specs, News and Reviews hub`}
      />
      <meta
        property="og:description"
        content={`${APP_NAME} - brings you the latest tech news, best mobile reviews and mobile specs to make your choices much easier. `}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta
        alt="Photo by sam loyd on Unsplash"
        property="og:image"
        content={`${DOMAIN}/static/images/sam-loyd-single-brand-cover-page.jpg`}
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
                <div
                  className={`${styles.container_common} ${styles.container_left}`}
                >
                  <div className={styles.overlay}></div>
                  <img
                    className={styles.img_wrapper}
                    src={`${API}/news/photo/${latestNews.slug}`}
                    alt={latestNews.title}
                  />
                  <div className={styles.news_title}>
                    <h1>{latestNews.title}</h1>
                  </div>
                  <div className={styles.author}>
                    <span>
                      By {latestNews.postedBy.username} |{" "}
                      {moment(latestNews.updatedAt).fromNow()}
                    </span>
                  </div>
                  <div className={styles.blog_type}>
                    <span>NEWS</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/**end leftside banner */
          /**right side banner block container*/}
          <div
            className={`col-md-6 pl-0 pr-0 ${styles.container_right}`}
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
                    <div
                      className={`${styles.container_common} ${styles.container_right_top}`}
                    >
                      <div className={styles.overlay}></div>
                      <img
                        className={styles.img_wrapper}
                        src={`${API}/news/photo/${secondLatestNews.slug}`}
                        alt={secondLatestNews.title}
                      />

                      <div
                        className={`${styles.news_title} ${styles.news_title_right_top}`}
                      >
                        <h1>{secondLatestNews.title}</h1>
                      </div>
                      <div className={styles.author}>
                        <span>
                          By {secondLatestNews.postedBy.username} |{" "}
                          {moment(secondLatestNews.updatedAt).fromNow()}
                        </span>
                      </div>
                      <div className={styles.blog_type}>
                        <span>NEWS</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/**end righ side top banner*/
              /**righ side bottom banner block container*/}
              <div
                className={`col-md-12 pl-0 pr-0 ${styles.container_right_bottom}`}
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
                        <div
                          className={`${styles.container_common} ${styles.container_right_bottom_left}`}
                        >
                          <div className={styles.overlay}></div>
                          <img
                            className={styles.img_wrapper}
                            src={`${API}/reviews/photo/${latestReview.slug}`}
                            alt={latestReview.title}
                          />
                          <div
                            className={`${styles.news_title} ${styles.news_title_right_bottom_left}`}
                          >
                            <h1>{latestReview.title}</h1>
                          </div>
                          <div className={styles.author}>
                            <span>
                              By {latestReview.postedBy.username} |{" "}
                              {moment(latestReview.updatedAt).fromNow()}
                            </span>
                          </div>
                          <div className={styles.blog_type}>
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
                        <div
                          className={`${styles.container_common} ${styles.container_right_bottom_right}`}
                        >
                          <div className={styles.overlay}></div>
                          <img
                            className={styles.img_wrapper}
                            src={`${API}/reviews/photo/${secondLatestReview.slug}`}
                            alt={secondLatestReview.title}
                          />
                          <div
                            className={`${styles.news_title} ${styles.news_title_right_bottom_right}`}
                          >
                            <h1>{secondLatestReview.title}</h1>
                          </div>
                          <div className={styles.author}>
                            <span>
                              By {secondLatestReview.postedBy.username} |{" "}
                              {moment(secondLatestReview.updatedAt).fromNow()}
                            </span>
                          </div>
                          <div className={styles.blog_type}>
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
                <div
                  className={`${styles.container_common} ${styles.container_left}`}
                >
                  <div className={styles.overlay}></div>
                  <img
                    className={styles.img_wrapper}
                    src={`${API}/news/photo/${latestNews.slug}`}
                    alt={latestNews.title}
                  />
                  <div className={styles.news_title}>
                    <h1>{latestNews.title}</h1>
                  </div>
                  <div className={styles.author}>
                    <span>
                      By {latestNews.postedBy.username} |{" "}
                      {moment(latestNews.updatedAt).fromNow()}
                    </span>
                  </div>
                  <div className={styles.blog_type}>
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
                className={`col-md-12 pl-0 pr-0 ${styles.container_right_medium_screen}`}
                style={{ width: "100%", height: "420px" }}
              >
                {/**rightside banner  top div*/}
                <div
                  className={`${styles.container_common} ${styles.container_right_top_medium_screen}`}
                >
                  <Link href={`/news/${secondLatestNews.slug}`}>
                    <a
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <div className={styles.overlay}></div>
                      <img
                        className={styles.img_wrapper}
                        src={`${API}/news/photo/${secondLatestNews.slug}`}
                        alt={secondLatestNews.title}
                      />
                      <div
                        className={`${styles.news_title} ${styles.news_title_right_top_medium_screen}`}
                      >
                        <h1>{secondLatestNews.title}</h1>
                      </div>
                      <div className={styles.author}>
                        <span>
                          {" "}
                          By {secondLatestNews.postedBy.username} |{" "}
                          {moment(secondLatestNews.updatedAt).fromNow()}
                        </span>
                      </div>
                      <div className={styles.blog_type}>
                        <span>NEWS</span>
                      </div>
                    </a>
                  </Link>
                </div>
                {/**rightside banner  top div ends here*/
                /**rightside banner  bottom div stsrts here*/}
                <div
                  className={`${styles.container_common} ${styles.container_right_bottom_medium_screen}`}
                >
                  <Link href={`/reviews/${latestReview.slug}`}>
                    <a
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <div className={styles.overlay}></div>
                      <img
                        className={styles.img_wrapper}
                        src={`${API}/reviews/photo/${latestReview.slug}`}
                        alt={latestReview.title}
                      />
                      <div
                        className={`${styles.news_title} ${styles.news_title_right_bottom_medium_screen}`}
                      >
                        <h1>{latestReview.title}</h1>
                      </div>
                      <div className={styles.author}>
                        <span>
                          By {latestReview.postedBy.username} |{" "}
                          {moment(latestReview.updatedAt).fromNow()}
                        </span>
                      </div>
                      <div className={styles.blog_type}>
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
      <div className={`col-md-12 mt-4 ${styles.small_screen_block}`}>
        {/**small screen card */}
        <div className={styles.small_screen_container}>
          <Link href={`/reviews/${latestReview.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className={styles.overlay}></div>
              <img
                className={styles.small_screen_img_wrapper}
                src={`${API}/reviews/photo/${latestReview.slug}`}
                alt={latestReview.title}
              />
              <div
                className={`${styles.news_title} ${styles.news_title_small_screen}`}
              >
                <h1>{latestReview.title}</h1>
              </div>
              <div className={styles.author}>
                <span>
                  By {latestReview.postedBy.username} |{" "}
                  {moment(latestReview.updatedAt).fromNow()}
                </span>
              </div>
              <div className={styles.blog_type}>
                <span>REVIEW</span>
              </div>
            </a>
          </Link>
        </div>
        {/**small screen card */
        /**ends here */}
        <div className={styles.small_screen_container}>
          <Link href={`/news/${latestNews.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className={styles.overlay}></div>
              <img
                className={styles.small_screen_img_wrapper}
                src={`${API}/news/photo/${latestNews.slug}`}
                alt={latestNews.title}
              />
              <div
                className={`${styles.news_title} ${styles.news_title_small_screen}`}
              >
                <h1>{latestNews.title}</h1>
              </div>
              <div className={styles.author}>
                <span>
                  By {latestNews.postedBy.username} |{" "}
                  {moment(latestNews.updatedAt).fromNow()}
                </span>
              </div>
              <div className={styles.blog_type}>
                <span>NEWS</span>
              </div>
            </a>
          </Link>
        </div>
        {/**small screen card */
        /**ends here */}
        <div className={styles.small_screen_container}>
          <Link href={`/reviews/${secondLatestReview.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className={styles.overlay}></div>
              <img
                className={styles.small_screen_img_wrapper}
                src={`${API}/reviews/photo/${secondLatestReview.slug}`}
                alt={secondLatestReview.title}
              />
              <div
                className={`${styles.news_title} ${styles.news_title_small_screen}`}
              >
                <h1>{secondLatestReview.title}</h1>
              </div>
              <div className={styles.author}>
                <span>
                  By {secondLatestReview.postedBy.username} |{" "}
                  {moment(secondLatestReview.updatedAt).fromNow()}
                </span>
              </div>
              <div className={styles.blog_type}>
                <span>REVIEW</span>
              </div>
            </a>
          </Link>
        </div>
        {/**small screen card */
        /**ends here */}
        <div className={styles.small_screen_container}>
          <Link href={`/news/${secondLatestNews.slug}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div className={styles.overlay}></div>
              <img
                className={styles.small_screen_img_wrapper}
                src={`${API}/news/photo/${secondLatestNews.slug}`}
                alt={secondLatestNews.title}
              />
              <div
                className={`${styles.news_title} ${styles.news_title_small_screen}`}
              >
                <h1>{secondLatestNews.title}</h1>
              </div>
              <div className={styles.author}>
                <span>
                  {" "}
                  By {secondLatestNews.postedBy.username} |{" "}
                  {moment(secondLatestNews.updatedAt).fromNow()}
                </span>
              </div>
              <div className={styles.blog_type}>
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

  /**load more functions */
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
          <div onClick={loadMore} className={styles.load_more_button}>
            Load more
          </div>
        )}
      </div>
    );
  };
  /**done */
  const showNewsFinalSectionLoadedNews = () => {
    return loadedNews.map((blog, i) => (
      <div key={i}>
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
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  /**load more ends here */

  /**done */
  const showSideBarReviews = () => {
    return reviewListLatest.map((blog, i) => (
      <div key={i}>
        <div key={i} className={styles.review_container_middle}>
          <div className={styles.image_review_middle}>
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
            className={styles.content_review_middle}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content_div_review_middle}>
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className={styles.author_div_review_middle}>
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

  /**done */
  const showSideBarMobiles = () => {
    return mobileListLatest.map((m, i) => (
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

  /**done */
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
              <div className={styles.container_review_middle}>
                <div className={styles.overlay}></div>
                <img
                  className={styles.img_wrapper}
                  src={`${API}/reviews/photo/${eightLatestReview.slug}`}
                  alt={eightLatestReview.title}
                />
                <div className={styles.title_review_middle}>
                  <h1>{eightLatestReview.title}</h1>
                </div>
                <div className={styles.author}>
                  <span>
                    {" "}
                    By {eightLatestReview.postedBy.username} |{" "}
                    {moment(eightLatestReview.updatedAt).fromNow()}
                  </span>
                </div>
                <div className={styles.blog_type}>
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
          <div
            className={`col-md-6 ${styles.display_none_review_middle_bottom}`}
          >
            {showReviewsInsideReviewBlockRight()}
          </div>
        </div>
      </div>
    );
  };

  /**done */
  const showReviewsInsideReviewBlockLeft = () => {
    return limitedReviewsSectionOne.map((blog, i) => (
      <div key={i}>
        <div key={i} className={styles.review_container_middle}>
          <div className={styles.image_review_middle}>
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
            className={styles.content_review_middle}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content_div_review_middle}>
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className={styles.author_div_review_middle}>
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

  /**done */
  const showReviewsInsideReviewBlockRight = () => {
    return limitedReviewsSectionTwo.map((blog, i) => (
      <div key={i}>
        <div key={i} className={styles.review_container_middle}>
          <div className={styles.image_review_middle}>
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
            className={styles.content_review_middle}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.content_div_review_middle}>
              <Link href={`/reviews/${blog.slug}`}>
                <a style={{ textDecoration: "none", width: "100%" }}>
                  <h1>{blog.title}</h1>
                </a>
              </Link>
            </div>

            <div className={styles.author_div_review_middle}>
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

  /**done */
  const showNewsFirstSection = () => {
    return newsLimitFirstSection.map((blog, i) => (
      <div key={i}>
        <div className={styles.news__container}>
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
      </div>
    ));
  };

  /**done */
  const showNewsSecondSection = () => {
    return newsLimitSecondSection.map((blog, i) => (
      <div key={i}>
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
                {" "}
                {moment(blog.updatedAt).fromNow()} | by {blog.postedBy.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  /**done */
  const showNewsFinalSection = () => {
    return newsLimitFinalSection.map((blog, i) => (
      <div key={i}>
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
    <div>
      <div>{head()}</div>
      <div className={styles.large_screen_featuring}>
        {latestNews && latestReview && secondLatestReview && secondLatestNews
          ? showHighlight()
          : ""}
      </div>
      <div className={styles.medium_screen_featuring}>
        {latestNews && latestReview && secondLatestNews
          ? showHighlightMediumScreen()
          : ""}
      </div>
      <div className={styles.small_screen_featuring}>
        {latestNews && latestReview && secondLatestReview && secondLatestNews
          ? smallScreenHighlight()
          : ""}
      </div>

      <div className="container mt-4 mb-5 pl-0 pr-0">
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
                    {eightLatestReview &&
                    limitedReviewsSectionOne &&
                    limitedReviewsSectionTwo ? (
                      <React.Fragment>
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
                              data-content="reviews"
                            />
                          </div>
                        </div>
                        {showReviewBlock()}
                      </React.Fragment>
                    ) : (
                      ""
                    )}

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
                          className={styles.hrText}
                          data-content="more news"
                        />
                      </div>
                    </div>
                    {showNewsSecondSection()}
                    {newsLimitFinalSection ? (
                      <React.Fragment>
                        <div
                          className={styles.display_none_more_news_main_block}
                        >
                          {showNewsFinalSection()}
                          {loadedNews ? (
                            showNewsFinalSectionLoadedNews()
                          ) : (
                            <div>
                              <h1>Loading...</h1>
                            </div>
                          )}
                          <div className="container">{loadMoreButton()}</div>
                        </div>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 ${styles.side__bar__single__brand__main}`}>
            {mobileListLatest ? (
              <React.Fragment>
                <div
                  className={`row mr-0 ${styles.side__bar__single__brand}`}
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
                        className={styles.hrText}
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
              </React.Fragment>
            ) : (
              ""
            )}

            {reviewListLatest ? (
              <div>
                <div
                  className={`row mr-0 mt-2 ${styles.side__bar__single__brand} ${styles.display_none_side_bar_review}`}
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
                        className={styles.hrText}
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
            <div
              className={`row ml-0 mr-0 mt-2 ${styles.display_none_more_news_small_screen}`}
            >
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
                              className={styles.hrText}
                              data-content="more news"
                            />
                          </div>
                        </div>
                        {showNewsFinalSection()}
                        {loadedNews ? (
                          showNewsFinalSectionLoadedNews()
                        ) : (
                          <div>
                            <h1>Loading...</h1>
                          </div>
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
  );
};

// This also gets called at build time
export async function getStaticProps() {
  /**news api */
  /**done */
  const newsLimitFirstSection = await newsListPublicLimitFirstSection().then(
    (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data;
      }
    }
  );

  /**done */
  const newsLimitSecondSection = await newsListPublicLimitSecondSection().then(
    (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data;
      }
    }
  );

  /**done */
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

  /**done */
  const latestNews = await newsPublicLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  /**done */
  const secondLatestNews = await newsPublicSecondLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  /**review list lates api */
  /**done */
  const reviewListLatest = await reviewListPublicHomePage().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  /**mobile list lates api */
  /**done */
  const mobileListLatest = await mobileListPublicNewsReviews().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  /**review api */
  /**done */
  const latestReview = await reviewPublicLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  /**done */
  const secondLatestReview = await reviewPublicSecondLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  /**done */
  const eightLatestReview = await reviewPublicEightLatest().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  /**done */
  const limitedReviewsSectionOne = await reviewListPublicLimitedSectionOne().then(
    (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data;
      }
    }
  );

  /**done */
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
      mobileListLatest,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default Index;
