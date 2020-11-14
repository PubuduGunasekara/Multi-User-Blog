import { useState, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import { singleTags } from '../../actions/tag.action';
import { API } from '../../config';

import moment from 'moment';

/**
 * completed!
 */
const singleTag = (props) => {

    const [tag, setTag] = useState([]);
    const [news, setNews] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    useEffect(() => {
        loadProfile(props.singleTag);
    }, []);

    const loadProfile = (tag) => {
        singleTags(tag).then(data => {
            if (data.error) {
                console.log("errorrrr"+data.error+" "+username);
            } else {
                setTag(data.data.tag);
                setReviews(data.data.reviews);
                setNews(data.data.news);
                setMobiles(data.data.mobiles);
            }
        });
    };

    const head = () => (
        <Head>
          <link rel="stylesheet" href="/static/css/tagPageStyles.css" />
        </Head>
      );

    const showTagName = () =>  (
        <React.Fragment>
                    <div className="tag_name">
                        <h1>#{tag.name}</h1>
                    </div>
      </React.Fragment>
      )

/**mobile pagination states */
const [currentPage, setCurrentPage] = useState(1);
const [postPerPage] = useState(8);
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

 /**reviews pagination states */
 const [currentPageReview, setCurrentPageReview] = useState(1);
 const [postPerPageReview] = useState(8);
 //const [numOfPost, setNumberOfPost] = useState(0);

 //pagination
 const indexofLastPostReview = currentPageReview * postPerPageReview;
 const indexofFirstPostReview = indexofLastPostReview - postPerPageReview;
 const currentPostReview = reviews.slice(indexofFirstPostReview, indexofLastPostReview);
 const lastPageReview = reviews.length / postPerPageReview;

 //change the page
 const paginateReview = (pageNumberReview) => {
   setCurrentPageReview(pageNumberReview);
 };
 const nextPageReview = () => {
   setCurrentPageReview(currentPageReview + 1);
 };
 const previousPageReview = () => {
   setCurrentPageReview(currentPageReview - 1);
 };

 /**news pagination states */
 const [currentPageNews, setCurrentPageNews] = useState(1);
 const [postPerPageNews] = useState(8);
 //const [numOfPost, setNumberOfPost] = useState(0);

 //pagination
 const indexofLastPostNews = currentPageNews * postPerPageNews;
 const indexofFirstPostNews = indexofLastPostNews - postPerPageNews;
 const currentPostNews = news.slice(indexofFirstPostNews, indexofLastPostNews);
 const lastPageNews = news.length / postPerPageNews;

 //change the page
 const paginateNews = (pageNumberNews) => {
   setCurrentPageNews(pageNumberNews);
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
const showMobiles = () => {
    return currentPost.map((m, i) => (
            <React.Fragment key={i}>
                <div title="mobile phone" className="single__card__mobile">
                <div className="card__image__container__mobile">
                    <Link href={`/phones/brand/${m.slug}`}>
                    <a>
                        <img src={`${API}/mobile/photo/${m.slug}`} alt={`${m.title}`} />
                    </a>
                    </Link>
                </div>
                <div className="card__content__mobile">
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
  const showReviews = () => {
    return currentPostReview.map((m, i) => (
      <React.Fragment key={i}>
        <div title="Gear reviews" className="single__card">
          <div className="card__image__container">
            <Link href={`/reviews/${m.slug}`}>
              <a>
                <img
                  src={`${API}/reviews/photo/${m.slug}`}
                  alt={`${m.title}`}
                />
              </a>
            </Link>
          </div>
          <div className="card__content">
            <Link href={`/reviews/${m.slug}`}>
              <a>
                <h1>{m.title}</h1>
                <p>
                  {moment(m.updatedAt).fromNow()} | by {m.postedBy.username}
                </p>
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  const showNews = () => {
    return currentPostNews.map((m, i) => (
      <React.Fragment key={i}>
        <div title="Gear news" className="single__card">
          <div className="card__image__container">
            <Link href={`/news/${m.slug}`}>
              <a>
                <img
                  src={`${API}/news/photo/${m.slug}`}
                  alt={`${m.title}`}
                />
              </a>
            </Link>
          </div>
          <div className="card__content">
            <Link href={`/news/${m.slug}`}>
              <a>
                <h1>{m.title}</h1>
                <p>
                  {moment(m.updatedAt).fromNow()} | by {m.postedBy.username}
                </p>
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  };

    return (
        <React.Fragment>
           {head()}
            <div className="container mt-5 pl-0 pr-0">
              <div className="row ml-0 mr-0">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-12">

                            <div
                                    className="row ml-0 mr-0 mb-2"
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
                                    {showTagName()}
                            
                            </div>                   
                  
                              <div
                                      className="row ml-0 mr-0"
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
                                {mobiles.length !== 0 ? <React.Fragment>
                                  <div className="subtitle">
                                    <h1>
                                      <span style={{color:'rgba(202, 28, 28, 0.945)'}}>#{tag.name}</span> related mobile phones
                                    </h1>
                                  </div>
                                <hr style={{height:'2px',width:'95%',marginBottom:'5px',marginTop:'5px'}}></hr>
                                                    <div className="cards__mobile box__sizing__mobile">{showMobiles()}</div>
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
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment/>
                                                        }
                                                        {
                                                          reviews.length !== 0 ?
                                                          <React.Fragment>
                                                             <hr style={{height:'2px',width:'95%',marginBottom:'5px',marginTop:'5px'}}></hr>
                                                              <div className="subtitle">
                                                                    <h1>
                                                                      <span style={{color:'rgba(202, 28, 28, 0.945)'}}>#{tag.name}</span> related reviews
                                                                    </h1>
                                                                </div>   
                                                              <hr style={{height:'2px',width:'95%',marginBottom:'5px',marginTop:'5px'}}></hr>
                                                              <div className="cards box__sizing">{showReviews()}</div>
                                                            <div style={{ width: "100%" }}>
                                                              {Pagination(
                                                                postPerPageReview,
                                                                reviews.length,
                                                                paginateReview,
                                                                nextPageReview,
                                                                previousPageReview,
                                                                currentPageReview,
                                                                lastPageReview
                                                              )}
                                                            </div>
                                                          </React.Fragment>
                                                          :
                                                          <React.Fragment/>
                                                        }
                                                        {
                                                          news.length !== 0 ? 
                                                          <React.Fragment>
                                                            <hr style={{height:'2px',width:'95%',marginBottom:'5px',marginTop:'5px'}}></hr>
                                                            <div className="subtitle">
                                                                  <h1>
                                                                    <span style={{color:'rgba(202, 28, 28, 0.945)'}}>#{tag.name}</span> related news
                                                                  </h1>
                                                              </div>   
                                                            <hr style={{height:'2px',width:'95%',marginBottom:'5px',marginTop:'5px'}}></hr>
                                                            <div className="cards box__sizing">{showNews()}</div>
                                                          <div style={{ width: "100%" }}>
                                                            {Pagination(
                                                              postPerPageNews,
                                                              news.length,
                                                              paginateNews,
                                                              nextPageNews,
                                                              previousPageNews,
                                                              currentPageNews,
                                                              lastPageNews
                                                            )}
                                                          </div>
                                                          </React.Fragment>
                                                          :
                                                          <React.Fragment />
                                                        }
                            </div>             
                    </div>                                   
                  </div>
                </div>
              </div>
            </div>
    </React.Fragment>
    )
}

export default singleTag;
