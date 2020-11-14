import Link from 'next/link';
import { useState, useEffect } from 'react';
import { isAuth } from '../../actions/auth.action';
import { reviewListModeratorPrivate, reviewListModeratorPublic } from '../../actions/review.action';
import { newsListModeratorPrivate, newsListModeratorPublic } from '../../actions/news.action';
import moment from 'moment';
import { API } from '../../config';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SearchReview from '../admin/search/ReviewSearchModerator.component';
import SearchNews from '../admin/search/NewsSearchModerator.component';

/**
 * completed!
 */

const AllPost = () => {

    const [reviewsPrivate, setReviewsPrivate] = useState([]);
    const [reviewsPublic, setReviewsPublic] = useState([]);
    const [newsPrivate, setNewsPrivate] = useState([]);
    const [newsPublic, setNewsPublic] = useState([]);

    const [activeTab, setActiveTab] = useState('1');

    /**pagination elements for news private */
    //statusn for pagination
    const [currentPageNewsPrivate, setCurrentPageNewsPrivate] = useState(1);
    const [postPerPageNewsPrivate] = useState(1);
    //const [numOfPost, setNumberOfPost] = useState(0);

    //pagination
    const indexofLastPostNewsPrivate = currentPageNewsPrivate * postPerPageNewsPrivate;
    const indexofFirstPostNewsPrivate = indexofLastPostNewsPrivate - postPerPageNewsPrivate;
    const currentPostNewsPrivate = newsPrivate.slice(indexofFirstPostNewsPrivate, indexofLastPostNewsPrivate);
    const lastPageNewsPrivate = newsPrivate.length / postPerPageNewsPrivate;

    //change the page
    const paginateNewsPrivate = (pageNumber) => {
        setCurrentPageNewsPrivate(pageNumber);
    }
    const nextPageNewsPrivate = () => {
        setCurrentPageNewsPrivate(currentPageNewsPrivate + 1);
    }
    const previousPageNewsPrivate = () => {
        setCurrentPageNewsPrivate(currentPageNewsPrivate - 1);
    }


    /**pagination elements for news public */
    //statusn for pagination
    const [currentPageNewsPublic, setCurrentPageNewsPublic] = useState(1);
    const [postPerPageNewsPublic] = useState(1);
    //const [numOfPost, setNumberOfPost] = useState(0);

    //pagination
    const indexofLastPostNewsPublic = currentPageNewsPublic * postPerPageNewsPublic;
    const indexofFirstPostNewsPublic = indexofLastPostNewsPublic - postPerPageNewsPublic;
    const currentPostNewsPublic = newsPublic.slice(indexofFirstPostNewsPublic, indexofLastPostNewsPublic);
    const lastPageNewsPublic = newsPublic.length / postPerPageNewsPublic;

    //change the page
    const paginateNewsPublic = (pageNumber) => {
        setCurrentPageNewsPublic(pageNumber);
    }
    const nextPageNewsPublic = () => {
        setCurrentPageNewsPublic(currentPageNewsPublic + 1);
    }
    const previousPageNewsPublic = () => {
        setCurrentPageNewsPublic(currentPageNewsPublic - 1);
    }



    /**pagination elements for review private */
    //statusn for pagination
    const [currentPageReviewPrivate, setCurrentPageReviewPrivate] = useState(1);
    const [postPerPageReviewPrivate] = useState(1);
    //const [numOfPost, setNumberOfPost] = useState(0);

    //pagination
    const indexofLastPostReviewPrivate = currentPageReviewPrivate * postPerPageReviewPrivate;
    const indexofFirstPostReviewPrivate = indexofLastPostReviewPrivate - postPerPageReviewPrivate;
    const currentPostReviewPrivate = reviewsPrivate.slice(indexofFirstPostReviewPrivate, indexofLastPostReviewPrivate);
    const lastPageReviewPrivate = reviewsPrivate.length / postPerPageReviewPrivate;

    //change the page
    const paginateReviewPrivate = (pageNumber) => {
        setCurrentPageReviewPrivate(pageNumber);
    }
    const nextPageReviewPrivate = () => {
        setCurrentPageReviewPrivate(currentPageReviewPrivate + 1);
    }
    const previousPageReviewPrivate = () => {
        setCurrentPageReviewPrivate(currentPageReviewPrivate - 1);
    }



    /**pagination elements for review public */
    //statusn for pagination
    const [currentPageReviewPublic, setCurrentPageReviewPublic] = useState(1);
    const [postPerPageReviewPublic] = useState(1);
    //const [numOfPost, setNumberOfPost] = useState(0);

    //pagination
    const indexofLastPostReviewPublic = currentPageReviewPublic * postPerPageReviewPublic;
    const indexofFirstPostReviewPublic = indexofLastPostReviewPublic - postPerPageReviewPublic;
    const currentPostReviewPublic = reviewsPublic.slice(indexofFirstPostReviewPublic, indexofLastPostReviewPublic);
    const lastPageReviewPublic = reviewsPublic.length / postPerPageReviewPublic;

    //change the page
    const paginateReviewPublic = (pageNumber) => {
        setCurrentPageReviewPublic(pageNumber);
    }
    const nextPageReviewPublic = () => {
        setCurrentPageReviewPublic(currentPageReviewPublic + 1);
    }
    const previousPageReviewPublic = () => {
        setCurrentPageReviewPublic(currentPageReviewPublic - 1);
    }





    const Pagination = (postsPerPage, totalPosts, paginate, nextPage, previousPage, curretPageForStyle, lastPage) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <nav>
                <ul className="pagination justify-content-center flex-wrap">
                    <li className={'page-item' + (curretPageForStyle === 1 ? ' disabled' : '')}>
                        <a className="page-link" onClick={() => previousPage()} href="#" >Previous</a>
                    </li>
                    {
                        pageNumbers.map(number => (
                            <li key={number} className={(curretPageForStyle === number ? 'active' : '' + ' page-item')}>
                                <a onClick={() => paginate(number)} href='#' className="page-link">
                                    {number}
                                </a>
                            </li>
                        ))
                    }
                    <li className={'page-item' + (curretPageForStyle < lastPage ? '' : ' disabled')}>
                        <a className="page-link" onClick={() => nextPage()} href="#" >Next</a>
                    </li>
                </ul>
            </nav>
        )
    }





    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        loadReviewsPrivate();
        loadReviewsPublic();
        loadNewsPrivate();
        loadNewsPublic();
    }, []);

    const loadReviewsPrivate = () => {
        let _id = isAuth()._id;
        reviewListModeratorPrivate(_id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setReviewsPrivate(data);
            }
        });
    };

    const loadReviewsPublic = () => {
        let _id = isAuth()._id;
        reviewListModeratorPublic(_id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setReviewsPublic(data);
            }
        });
    };

    const loadNewsPrivate = () => {
        let _id = isAuth()._id;

        newsListModeratorPrivate(_id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setNewsPrivate(data);
            }
        });
    };

    const loadNewsPublic = () => {
        let _id = isAuth()._id;

        newsListModeratorPublic(_id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setNewsPublic(data);
            }
        });
    };


    const showViewButtonReview = (blog) => {
        return (
            <Link href={`/admin-panel/moderator/review/${blog.slug}`}>
                <a className="btn btn-primary">View</a>
            </Link>
        )
    }

    const showViewButtonNews = (blog) => {
        return (
            <Link href={`/admin-panel/moderator/news/${blog.slug}`}>
                <a className="btn btn-primary">View</a>
            </Link>
        )
    }




    const tabs = () => {

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            style={{ cursor: 'pointer', color: '#f0ad4e' }}
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            News - ({newsPrivate.length + newsPublic.length})
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: 'pointer', color: '#5cb85c' }}
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Reviews - ({reviewsPrivate.length + reviewsPublic.length})
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row className="mr-0 ml-0">
                            <Col md="12">
                                <h4 className="text-center mt-2 pt-4 pb-4 bg-warning">News</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <SearchNews />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="text-center mt-2 pt-4 pb-4">private News - ({newsPrivate.length})</h5>
                                        {showPrivateNews()}
                                        {Pagination(postPerPageNewsPrivate, newsPrivate.length, paginateNewsPrivate, nextPageNewsPrivate, previousPageNewsPrivate, currentPageNewsPrivate, lastPageNewsPrivate)}
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="text-center mt-2 pt-4 pb-4">public News - ({newsPublic.length})</h5>
                                        {showPublicNews()}
                                        {Pagination(postPerPageNewsPublic, newsPublic.length, paginateNewsPublic, nextPageNewsPublic, previousPageNewsPublic, currentPageNewsPublic, lastPageNewsPublic)}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="mr-0 ml-0">
                            <Col md="12">
                                <h4 className="text-center mt-2 pt-4 pb-4 bg-success">Reviews</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <SearchReview />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="text-center mt-2 pt-4 pb-4">private Reviews - ({reviewsPrivate.length})</h5>
                                        {showPrivateReviews()}
                                        {Pagination(postPerPageReviewPrivate, reviewsPrivate.length, paginateReviewPrivate, nextPageReviewPrivate, previousPageReviewPrivate, currentPageReviewPrivate, lastPageReviewPrivate)}
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="text-center mt-2 pt-4 pb-4">public Reviews - ({reviewsPublic.length})</h5>
                                        {showPublicReviews()}
                                        {Pagination(postPerPageReviewPublic, reviewsPublic.length, paginateReviewPublic, nextPageReviewPublic, previousPageReviewPublic, currentPageReviewPublic, lastPageReviewPublic)}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }


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

                                        <p className="card-text"><kbd>public</kbd></p>

                                        <p className="card-text">
                                            Written by {r.postedBy.name} | Published on {moment(r.updatedAt).fromNow()}
                                        </p>
                                        {showViewButtonReview(r)}
                                    </div>
                                    < img src={`${API}/reviews/photo/${r.slug}`}
                                        className="img img-fluid pt-3 col-md-4"
                                        alt="review image cap"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (reviewsPublic.length === 0) {
                return <div key={i} className="alert alert-info"><p>No <kbd>public</kbd> reviews at the moment</p></div>

            }
        })
    }

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

                                        <p className="card-text"><code>private</code></p>

                                        <p className="card-text">
                                            Written by {r.postedBy.name} | Published on {moment(r.updatedAt).fromNow()}
                                        </p>
                                        {showViewButtonReview(r)}
                                    </div>
                                    < img src={`${API}/reviews/photo/${r.slug}`}
                                        className="img img-fluid pt-3 col-md-4"
                                        alt="review image cap"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (reviewsPrivate.length === 0) {
                return <div key={i} className="alert alert-info"><p>No <code>private</code> reviews at the moment</p></div>

            }
        })
    }


    const showPublicNews = () => {
        return currentPostNewsPublic.map((n, i) => {
            if (n.flag === 1) {
                return (
                    <div key={i} className="row pb-5">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="row card-body">
                                    <div className="col-md-8">
                                        <h5 className="card-title">{n.title}</h5>

                                        <p className="card-text"><kbd>public</kbd></p>

                                        <p className="card-text">
                                            Written by {n.postedBy.name} | Published on {moment(n.updatedAt).fromNow()}
                                        </p>
                                        {showViewButtonNews(n)}
                                    </div>
                                    < img src={`${API}/news/photo/${n.slug}`}
                                        className="img img-fluid pt-3 col-md-4"
                                        alt="news image cap"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (newsPublic.length === 0) {
                return <div key={i} className="alert alert-info"><p>No <kbd>public</kbd> news at the moment</p></div>

            }
        })
    }
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

                                        <p className="card-text"><code>private</code></p>

                                        <p className="card-text">
                                            Written by {n.postedBy.name} | Published on {moment(n.updatedAt).fromNow()}
                                        </p>
                                        {showViewButtonNews(n)}
                                    </div>
                                    < img src={`${API}/news/photo/${n.slug}`}
                                        className="img img-fluid pt-3 col-md-4"
                                        alt="news image cap"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (newsPrivate.length === 0) {
                return <div key={i} className="alert alert-info"><p>No <code>private</code> news at the moment</p></div>

            }
        })
    }



    return (
        <React.Fragment>
            {tabs()}

        </React.Fragment>
    )
}

export default AllPost;
