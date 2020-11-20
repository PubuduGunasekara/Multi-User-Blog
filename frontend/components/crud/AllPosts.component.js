import Link from "next/link";
import { useState, useEffect } from "react";
import { isAuth } from "../../actions/auth.action";
import {
  reviewListPrivate,
  reviewListPublic,
} from "../../actions/review.action";
import { newsListPrivate, newsListPublic } from "../../actions/news.action";
import {
  mobileListPrivate,
  mobileListPublic,
} from "../../actions/mobile.action";
import moment from "moment";
import { API } from "../../config";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import SearchReview from "../admin/search/ReviewSearch.component";
import SearchNews from "../admin/search/NewsSearch.component";
import SearchMobile from "../admin/search/MobileSearch.component";

/**
 * completed!
 */
const AllPost = () => {
  const [reviewsPrivate, setReviewsPrivate] = useState([]);
  const [reviewsPublic, setReviewsPublic] = useState([]);
  const [newsPrivate, setNewsPrivate] = useState([]);
  const [newsPublic, setNewsPublic] = useState([]);
  const [mobilePrivate, setMobilePrivate] = useState([]);
  const [mobilePublic, setMobilePublic] = useState([]);
  const [activeTab, setActiveTab] = useState("1");

  /**pagination elements for news private */
  //statusn for pagination
  const [currentPageNewsPrivate, setCurrentPageNewsPrivate] = useState(1);
  const [postPerPageNewsPrivate] = useState(10);
  //const [numOfPost, setNumberOfPost] = useState(0);

  //pagination
  const indexofLastPostNewsPrivate =
    currentPageNewsPrivate * postPerPageNewsPrivate;
  const indexofFirstPostNewsPrivate =
    indexofLastPostNewsPrivate - postPerPageNewsPrivate;
  const currentPostNewsPrivate = newsPrivate.slice(
    indexofFirstPostNewsPrivate,
    indexofLastPostNewsPrivate
  );
  const lastPageNewsPrivate = newsPrivate.length / postPerPageNewsPrivate;

  //change the page
  const paginateNewsPrivate = (pageNumber) => {
    setCurrentPageNewsPrivate(pageNumber);
  };
  const nextPageNewsPrivate = () => {
    setCurrentPageNewsPrivate(currentPageNewsPrivate + 1);
  };
  const previousPageNewsPrivate = () => {
    setCurrentPageNewsPrivate(currentPageNewsPrivate - 1);
  };

  /**pagination elements for news public */
  //statusn for pagination
  const [currentPageNewsPublic, setCurrentPageNewsPublic] = useState(1);
  const [postPerPageNewsPublic] = useState(10);

  //pagination
  const indexofLastPostNewsPublic =
    currentPageNewsPublic * postPerPageNewsPublic;
  const indexofFirstPostNewsPublic =
    indexofLastPostNewsPublic - postPerPageNewsPublic;
  const currentPostNewsPublic = newsPublic.slice(
    indexofFirstPostNewsPublic,
    indexofLastPostNewsPublic
  );
  const lastPageNewsPublic = newsPublic.length / postPerPageNewsPublic;

  //change the page
  const paginateNewsPublic = (pageNumber) => {
    setCurrentPageNewsPublic(pageNumber);
  };
  const nextPageNewsPublic = () => {
    setCurrentPageNewsPublic(currentPageNewsPublic + 1);
  };
  const previousPageNewsPublic = () => {
    setCurrentPageNewsPublic(currentPageNewsPublic - 1);
  };

  /**pagination elements for review private */
  //statusn for pagination
  const [currentPageReviewPrivate, setCurrentPageReviewPrivate] = useState(1);
  const [postPerPageReviewPrivate] = useState(10);

  //pagination
  const indexofLastPostReviewPrivate =
    currentPageReviewPrivate * postPerPageReviewPrivate;
  const indexofFirstPostReviewPrivate =
    indexofLastPostReviewPrivate - postPerPageReviewPrivate;
  const currentPostReviewPrivate = reviewsPrivate.slice(
    indexofFirstPostReviewPrivate,
    indexofLastPostReviewPrivate
  );
  const lastPageReviewPrivate =
    reviewsPrivate.length / postPerPageReviewPrivate;

  //change the page
  const paginateReviewPrivate = (pageNumber) => {
    setCurrentPageReviewPrivate(pageNumber);
  };
  const nextPageReviewPrivate = () => {
    setCurrentPageReviewPrivate(currentPageReviewPrivate + 1);
  };
  const previousPageReviewPrivate = () => {
    setCurrentPageReviewPrivate(currentPageReviewPrivate - 1);
  };

  /**pagination elements for review public */
  //statusn for pagination
  const [currentPageReviewPublic, setCurrentPageReviewPublic] = useState(1);
  const [postPerPageReviewPublic] = useState(10);

  //pagination
  const indexofLastPostReviewPublic =
    currentPageReviewPublic * postPerPageReviewPublic;
  const indexofFirstPostReviewPublic =
    indexofLastPostReviewPublic - postPerPageReviewPublic;
  const currentPostReviewPublic = reviewsPublic.slice(
    indexofFirstPostReviewPublic,
    indexofLastPostReviewPublic
  );
  const lastPageReviewPublic = reviewsPublic.length / postPerPageReviewPublic;

  //change the page
  const paginateReviewPublic = (pageNumber) => {
    setCurrentPageReviewPublic(pageNumber);
  };
  const nextPageReviewPublic = () => {
    setCurrentPageReviewPublic(currentPageReviewPublic + 1);
  };
  const previousPageReviewPublic = () => {
    setCurrentPageReviewPublic(currentPageReviewPublic - 1);
  };

  /**pagination elements for mobile private */
  //statusn for pagination
  const [currentPageMobilePrivate, setCurrentPageMobilePrivate] = useState(1);
  const [postPerPageMobilePrivate] = useState(10);

  //pagination
  const indexofLastPostMobilePrivate =
    currentPageMobilePrivate * postPerPageMobilePrivate;
  const indexofFirstPostMobilePrivate =
    indexofLastPostMobilePrivate - postPerPageMobilePrivate;
  const currentPostMobilePrivate = mobilePrivate.slice(
    indexofFirstPostMobilePrivate,
    indexofLastPostMobilePrivate
  );
  const lastPageMobilePrivate = mobilePrivate.length / postPerPageMobilePrivate;

  //change the page
  const paginateMobilePrivate = (pageNumber) => {
    setCurrentPageMobilePrivate(pageNumber);
  };
  const nextPageMobilePrivate = () => {
    setCurrentPageMobilePrivate(currentPageMobilePrivate + 1);
  };
  const previousPageMobilePrivate = () => {
    setCurrentPageMobilePrivate(currentPageMobilePrivate - 1);
  };

  /**pagination elements for mobile public */
  //statusn for pagination
  const [currentPageMobilePublic, setCurrentPageMobilePublic] = useState(1);
  const [postPerPageMobilePublic] = useState(10);

  //pagination
  const indexofLastPostMobilePublic =
    currentPageMobilePublic * postPerPageMobilePublic;
  const indexofFirstPostMobilePublic =
    indexofLastPostMobilePublic - postPerPageMobilePublic;
  const currentPostMobilePublic = mobilePublic.slice(
    indexofFirstPostMobilePublic,
    indexofLastPostMobilePublic
  );
  const lastPageMobilePublic = mobilePublic.length / postPerPageMobilePublic;

  //change the page
  const paginateMobilePublic = (pageNumber) => {
    setCurrentPageMobilePublic(pageNumber);
  };
  const nextPageMobilePublic = () => {
    setCurrentPageMobilePublic(currentPageMobilePublic + 1);
  };
  const previousPageMobilePublic = () => {
    setCurrentPageMobilePublic(currentPageMobilePublic - 1);
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
              Previous
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
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    loadReviewsPrivate();
    loadReviewsPublic();
    loadNewsPrivate();
    loadNewsPublic();
    loadMobilesPrivate();
    loadMobilesPublic();
  }, []);

  const loadReviewsPrivate = () => {
    reviewListPrivate().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setReviewsPrivate(data);
      }
    });
  };

  const loadReviewsPublic = () => {
    reviewListPublic().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setReviewsPublic(data);
      }
    });
  };

  const loadNewsPrivate = () => {
    newsListPrivate().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setNewsPrivate(data);
      }
    });
  };

  const loadNewsPublic = () => {
    newsListPublic().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setNewsPublic(data);
      }
    });
  };

  const loadMobilesPrivate = () => {
    mobileListPrivate().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMobilePrivate(data);
      }
    });
  };

  const loadMobilesPublic = () => {
    mobileListPublic().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMobilePublic(data);
      }
    });
  };

  const showViewButtonReview = (blog) => {
    return (
      <Link href={`/admin-panel/root-admin/review/${blog.slug}`}>
        <a className="btn btn-primary">View</a>
      </Link>
    );
  };

  const showViewButtonNews = (blog) => {
    return (
      <Link href={`/admin-panel/root-admin/news/${blog.slug}`}>
        <a className="btn btn-primary">View</a>
      </Link>
    );
  };

  const showViewButtonMobile = (blog) => {
    return (
      <Link href={`/admin-panel/root-admin/mobile/${blog.slug}`}>
        <a className="btn btn-primary">View</a>
      </Link>
    );
  };

  const tabs = () => {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer", color: "#f0ad4e" }}
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              News - ({newsPrivate.length + newsPublic.length})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer", color: "#5cb85c" }}
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Reviews - ({reviewsPrivate.length + reviewsPublic.length})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer", color: "#5bc0de" }}
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Mobiles - ({mobilePrivate.length + mobilePublic.length})
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row className="mr-0 ml-0">
              <Col md="12">
                <h4 className="text-center mt-2 pt-4 pb-4 bg-warning">News</h4>
                <div className="row mr-0 ml-0">
                  <div className="col-md-12">
                    <SearchNews />
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-center mt-2 pt-4 pb-4">
                      private News - ({newsPrivate.length})
                    </h5>
                    {showPrivateNews()}
                    {Pagination(
                      postPerPageNewsPrivate,
                      newsPrivate.length,
                      paginateNewsPrivate,
                      nextPageNewsPrivate,
                      previousPageNewsPrivate,
                      currentPageNewsPrivate,
                      lastPageNewsPrivate
                    )}
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-center mt-2 pt-4 pb-4">
                      public News - ({newsPublic.length})
                    </h5>
                    {showPublicNews(currentPostNewsPublic)}
                    {Pagination(
                      postPerPageNewsPublic,
                      newsPublic.length,
                      paginateNewsPublic,
                      nextPageNewsPublic,
                      previousPageNewsPublic,
                      currentPageNewsPublic,
                      lastPageNewsPublic
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="mr-0 ml-0">
              <Col md="12">
                <h4 className="text-center mt-2 pt-4 pb-4 bg-success">
                  Reviews
                </h4>
                <div className="row mr-0 ml-0">
                  <div className="col-md-12">
                    <SearchReview />
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-center mt-2 pt-4 pb-4">
                      private Reviews - ({reviewsPrivate.length})
                    </h5>
                    {showPrivateReviews()}
                    {Pagination(
                      postPerPageReviewPrivate,
                      reviewsPrivate.length,
                      paginateReviewPrivate,
                      nextPageReviewPrivate,
                      previousPageReviewPrivate,
                      currentPageReviewPrivate,
                      lastPageReviewPrivate
                    )}
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-center mt-2 pt-4 pb-4">
                      public Reviews - ({reviewsPublic.length})
                    </h5>
                    {showPublicReviews()}
                    {Pagination(
                      postPerPageReviewPublic,
                      reviewsPublic.length,
                      paginateReviewPublic,
                      nextPageReviewPublic,
                      previousPageReviewPublic,
                      currentPageReviewPublic,
                      lastPageReviewPublic
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row className="mr-0 ml-0">
              <Col md="12">
                <h4 className="text-center mt-2 pt-4 pb-4 bg-info">Mobiles</h4>
                <div className="row mr-0 ml-0">
                  <div className="col-md-12">
                    <SearchMobile />
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-center mt-2 pt-4 pb-4">
                      private mobiles - ({mobilePrivate.length})
                    </h5>
                    {showPrivateMobiles()}
                    {Pagination(
                      postPerPageMobilePrivate,
                      mobilePrivate.length,
                      paginateMobilePrivate,
                      nextPageMobilePrivate,
                      previousPageMobilePrivate,
                      currentPageMobilePrivate,
                      lastPageMobilePrivate
                    )}
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-center mt-2 pt-4 pb-4">
                      public mobiles - ({mobilePublic.length})
                    </h5>
                    {showPublicMobiles()}
                    {Pagination(
                      postPerPageMobilePublic,
                      mobilePublic.length,
                      paginateMobilePublic,
                      nextPageMobilePublic,
                      previousPageMobilePublic,
                      currentPageMobilePublic,
                      lastPageMobilePublic
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  };

  const showPublicReviews = () => {
    return currentPostReviewPublic.map((r, i) => {
      if (r.flag === 1) {
        return (
          <div key={i} className="row pb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="row card-body">
                  <div className="col-md-8">
                    <h5 className="card-title">{r.title}</h5>

                    <p className="card-text">
                      <kbd>public</kbd>
                    </p>

                    <p className="card-text">
                      Written by {r.postedBy.name} | Published on{" "}
                      {moment(r.updatedAt).fromNow()}
                    </p>
                    {showViewButtonReview(r)}
                  </div>
                  <img
                    src={`${API}/reviews/photo/${r.slug}`}
                    className="img img-fluid pt-3 col-md-4"
                    alt="review image cap"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (reviewsPublic.length === 0) {
        return (
          <div key={i} className="alert alert-info">
            <p>
              No <kbd>public</kbd> reviews at the moment
            </p>
          </div>
        );
      }
    });
  };

  const showPrivateReviews = () => {
    return currentPostReviewPrivate.map((r, i) => {
      if (r.flag === 0) {
        return (
          <div key={i} className="row pb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="row card-body">
                  <div className="col-md-8">
                    <h5 className="card-title">{r.title}</h5>

                    <p className="card-text">
                      <code>private</code>
                    </p>

                    <p className="card-text">
                      Written by {r.postedBy.name} | Published on{" "}
                      {moment(r.updatedAt).fromNow()}
                    </p>
                    {showViewButtonReview(r)}
                  </div>
                  <img
                    src={`${API}/reviews/photo/${r.slug}`}
                    className="img img-fluid pt-3 col-md-4"
                    alt="review image cap"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (reviewsPrivate.length === 0) {
        return (
          <div key={i} className="alert alert-info">
            <p>
              No <code>private</code> reviews at the moment
            </p>
          </div>
        );
      }
    });
  };

  const showPublicNews = (currentPostNewsPublic) => {
    return currentPostNewsPublic.map((n, i) => {
      if (n.flag === 1) {
        return (
          <div key={i} className="row pb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="row card-body">
                  <div className="col-md-8">
                    <h5 className="card-title">{n.title}</h5>

                    <p className="card-text">
                      <kbd>public</kbd>
                    </p>

                    <p className="card-text">
                      Written by {n.postedBy.name} | Published on{" "}
                      {moment(n.updatedAt).fromNow()}
                    </p>
                    {showViewButtonNews(n)}
                  </div>
                  <img
                    src={`${API}/news/photo/${n.slug}`}
                    className="img img-fluid pt-3 col-md-4"
                    alt="news image cap"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (newsPublic.length === 0) {
        return (
          <div key={i} className="alert alert-info">
            <p>
              No <kbd>public</kbd> news at the moment
            </p>
          </div>
        );
      }
    });
  };
  const showPrivateNews = () => {
    return currentPostNewsPrivate.map((n, i) => {
      if (n.flag === 0) {
        return (
          <div key={i} className="row pb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="row card-body">
                  <div className="col-md-8">
                    <h5 className="card-title">{n.title}</h5>

                    <p className="card-text">
                      <code>private</code>
                    </p>

                    <p className="card-text">
                      Written by {n.postedBy.name} | Published on{" "}
                      {moment(n.updatedAt).fromNow()}
                    </p>
                    {showViewButtonNews(n)}
                  </div>
                  <img
                    src={`${API}/news/photo/${n.slug}`}
                    className="img img-fluid pt-3 col-md-4"
                    alt="news image cap"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (newsPrivate.length === 0) {
        return (
          <div key={i} className="alert alert-info">
            <p>
              No <code>private</code> news at the moment
            </p>
          </div>
        );
      }
    });
  };

  const showPublicMobiles = () => {
    return currentPostMobilePublic.map((m, i) => {
      if (m.flag === 1) {
        return (
          <div key={i} className="row pb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="row card-body">
                  <div className="col-md-8">
                    <h5 className="card-title">{m.title}</h5>

                    <p className="card-text">
                      <kbd>public</kbd>
                    </p>

                    <p className="card-text">
                      Written by {m.postedBy.name} | Published on{" "}
                      {moment(m.updatedAt).fromNow()}
                    </p>
                    {showViewButtonMobile(m)}
                  </div>
                  <img
                    src={`${API}/mobile/photo/${m.slug}`}
                    className="img img-fluid pt-3 col-md-4"
                    alt="news image cap"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (mobilePublic.length === 0) {
        return (
          <div key={i} className="alert alert-info">
            <p>
              No <kbd>public</kbd> mobiles at the moment
            </p>
          </div>
        );
      }
    });
  };
  const showPrivateMobiles = () => {
    return currentPostMobilePrivate.map((m, i) => {
      if (m.flag === 0) {
        return (
          <div key={i} className="row pb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="row card-body">
                  <div className="col-md-8">
                    <h5 className="card-title">{m.title}</h5>

                    <p className="card-text">
                      <code>private</code>
                    </p>

                    <p className="card-text">
                      Written by {m.postedBy.name} | Published on{" "}
                      {moment(m.updatedAt).fromNow()}
                    </p>
                    {showViewButtonMobile(m)}
                  </div>
                  <img
                    src={`${API}/mobile/photo/${m.slug}`}
                    className="img img-fluid pt-3 col-md-4"
                    alt="news image cap"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (mobilePrivate.length === 0) {
        return (
          <div key={i} className="alert alert-info">
            <p>
              No <code>private</code> mobiles at the moment
            </p>
          </div>
        );
      }
    });
  };

  return <div>{tabs()}</div>;
};

export default AllPost;
