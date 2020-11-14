import Admin from '../../../../components/auth.components/Admin'
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../../../components/Layout';
import { useState } from 'react';
import { singleNews } from '../../../../actions/news.action';
import { API, DOMAIN } from '../../../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { getCookie } from '../../../../actions/auth.action';
import { removeNews, approveNews, unPublishNews } from '../../../../actions/news.action';
import confirm from "reactstrap-confirm";

/**
 * completed!
 */

const SingleBlog = ({ news, query }) => {

    const [newsPublicValues, setNewsPublicValues] = useState({
        postError: '',
        postSuccess: ''
    });


    const { postError, postSuccess } = newsPublicValues;

    const token = getCookie('token');

    const deleteNews = (slug) => {
        removeNews(slug, token).then(async data => {
            if (data.error) {
                console.log(data.error);
            } else {
                var answer = await confirm({
                    title: (
                        <>
                            <strong>DELETE SUCCESS</strong>
                        </>
                    ),
                    message: "successfully deleted",
                    confirmText: "OK",
                    confirmColor: "success"
                });
                if (answer) {
                    window.location.replace(`${DOMAIN}/admin-panel/root-admin/list-all-post`);
                    console.log(data.message);
                }

            }
        })
    }

    const deleteConfirm = async (slug) => {
        var answer = await confirm({
            title: (
                <>
                    <strong>POST DELETE</strong>
                </>
            ),
            message: "Are you sure?",
            confirmText: "YES, Delete the post",
            confirmColor: "danger",
            cancelText: "NO, Keep the post",
            cancelColor: "warning"
        });

        if (answer) {
            deleteNews(slug);
        }
    }

    const approveButton = async () => {
        var ask = await confirm({
            title: (
                <>
                    <strong>POST PUBLISH</strong>
                </>
            ),
            message: "Are you sure?",
            confirmText: "YES, Publish the post",
            confirmColor: "danger",
            cancelText: "NO, Keep the post private",
            cancelColor: "warning"
        });


        if (ask) {


            approveNews(query.slug, token).then(data => {
                if (data.error) {
                    setNewsPublicValues({ ...newsPublicValues, postError: data.error })
                } else {
                    setNewsPublicValues({ ...newsPublicValues, postSuccess: true });

                    window.location.reload(false);
                }

            })

        }
    }

    const unPublishButton = async () => {
        var ask = await confirm({
            title: (
                <>
                    <strong>POST UNPUBLISH</strong>
                </>
            ),
            message: "Are you sure?",
            confirmText: "YES, Unpublish the post",
            confirmColor: "danger",
            cancelText: "NO, Keep the post public",
            cancelColor: "warning"
        });


        if (ask) {

            unPublishNews(query.slug, token).then(data => {
                if (data.error) {
                    setNewsPublicValues({ ...newsPublicValues, postError: data.error })
                } else {
                    setNewsPublicValues({ ...newsPublicValues, postSuccess: true });


                    window.location.reload(false);
                }

            })
        }
    }

    const showPublishedError = () => (
        <div className="alert alert-danger" style={{ display: postError ? '' : 'none' }}>
            {postError}
        </div>
    );



    const showUpdatedButton = (slug) => {
        return (
            <Link href={`/admin-panel/root-admin/news/update/${slug}`}>
                <a className="container btn btn-sm btn-warning btn-block">Update</a>
            </Link>
        )
    }




    return (
        <React.Fragment>
            <Layout>
                <Admin>
                    <div className="container">
                    <div className="row ml-0 mr-0">
                        <div className="col-md-12">
                            <h2 className="text-center pt-5 pb-3">News Post Manage</h2>
                            {showPublishedError()}
                            <button
                                className="container btn btn-sm btn-danger btn-block mt-5"
                                onClick={() => deleteConfirm(query.slug)}>Delete</button>

                            {showUpdatedButton(query.slug)}

                            {news.flag === 0 ? <button onClick={approveButton} className="container btn btn-sm btn-primary btn-block">Publish this post</button>
                                :
                                <button onClick={unPublishButton} className="container btn btn-sm btn-success btn-block">Un-publish this post</button>}


                        </div>

                    </div>
                    <main>
                        <article className="mt-5 mb-5">
                            <div className="container mt-5 mb-5">
                                <section>
                                    <div className="row" style={{ marginTop: '-30px' }}>
                                        <img
                                            src={`${API}/news/photo/${query.slug}`}
                                            alt={news.title}
                                            className="img img-fluid featured-image" />
                                    </div>
                                </section>
                                <section>
                                    <div className="container">
                                        <h1 className="display-2 pb-3 font-weight-bold">
                                            {news.title}
                                        </h1>
                                        <p className="lead mt-3 mark">
                                            Written by {news.postedBy.username}  | published {moment(news.updatedAt).fromNow()}
                                        </p>

                                    </div>
                                </section>
                            </div>
                            <div className="container">
                                <section>
                                    <div className="col-md-12 lead">
                                        {renderHTML(news.body)}
                                    </div>
                                </section>
                            </div>
                        </article>
                    </main>
                    </div>
                </Admin>
            </Layout>
        </React.Fragment>
    )
}

//this method exectes at the server side. query is same as the router . in server side slugcan be access thruogh query, in client side it can be access through router use JSON.stringify()
SingleBlog.getInitialProps = ({ query }) => {
    return singleNews(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            //console.log('get init : ', data);

            return { news: data, query }
        }
    })
};

export default withRouter(SingleBlog);