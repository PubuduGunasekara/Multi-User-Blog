import Private from '../../../../components/auth.components/Private';
import { withRouter } from 'next/router';
import Layout from '../../../../components/Layout';
import { singleReview } from '../../../../actions/review.action';
import { API } from '../../../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';

/**
 * completed!
 */
const SingleBlog = ({ review, query }) => {

    return (
        <React.Fragment>
            <Layout>
                <Private>
                    <div className="container">
                        <div className="row ml-0 mr-0">
                            <div className="container">

                                <h2 className="text-center pt-5 pb-3">Review Post</h2>
                            </div>

                        </div>
                        <main>
                            <article className="mt-5 mb-5">
                                <div className="container mt-5 mb-5">
                                    <section>
                                        <div className="row" style={{ marginTop: '-30px' }}>
                                            <img
                                                src={`${API}/reviews/photo/${query.slug}`}
                                                alt={review.title}
                                                className="img img-fluid featured-image" />
                                        </div>
                                    </section>
                                    <section>
                                        <div className="container">
                                            <h1 className="display-2 pb-3 font-weight-bold">
                                                {review.title}
                                            </h1>
                                            <p className="lead mt-3 mark">
                                                Written by {review.postedBy.username}  | published {moment(review.updatedAt).fromNow()}
                                            </p>

                                        </div>
                                    </section>
                                </div>
                                <div className="container">
                                    <section>
                                        <div className="col-md-12 lead">
                                            {renderHTML(review.body)}
                                        </div>
                                    </section>
                                </div>
                            </article>
                        </main>
                    </div>
                </Private>
            </Layout>
        </React.Fragment>
    )
}

//this method exectes at the server side. query is same as the router . in server side slugcan be access thruogh query, in client side it can be access through router use JSON.stringify()
SingleBlog.getInitialProps = ({ query }) => {
    return singleReview(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            //console.log('get init : ', data);

            return { review: data, query }
        }
    })
};

export default withRouter(SingleBlog);