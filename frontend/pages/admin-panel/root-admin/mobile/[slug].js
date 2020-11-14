import Admin from '../../../../components/auth.components/Admin'
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../../../components/Layout';
import { useState } from 'react';
import { singleMobile } from '../../../../actions/mobile.action';
import { API, DOMAIN } from '../../../../config';
import moment from 'moment';
import { getCookie } from '../../../../actions/auth.action';
import { removeMobile, approveMobile, unPublishMobile } from '../../../../actions/mobile.action';
import confirm from "reactstrap-confirm";


/**
 * completed!
 */
const SingleBlog = ({ mobile, query }) => {

    const [mobilePublicValues, setMobilePublicValues] = useState({
        postError: '',
        postSuccess: ''
    });


    const { postError, postSuccess } = mobilePublicValues;

    const token = getCookie('token');

    const deleteMobile = (slug) => {
        removeMobile(slug, token).then(async data => {
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
            deleteMobile(slug);
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


            approveMobile(query.slug, token).then(data => {
                if (data.error) {
                    setMobilePublicValues({ ...mobilePublicValues, postError: data.error })
                } else {
                    setMobilePublicValues({ ...mobilePublicValues, postSuccess: true });

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

            unPublishMobile(query.slug, token).then(data => {
                if (data.error) {
                    setMobilePublicValues({ ...mobilePublicValues, postError: data.error })
                } else {
                    setMobilePublicValues({ ...mobilePublicValues, postSuccess: true });


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
            <Link href={`/admin-panel/root-admin/mobile/update/${slug}`}>
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
                                <h2 className="text-center pt-5 pb-3">Mobile Post Manage</h2>
                                {showPublishedError()}
                                <button
                                    className="container btn btn-sm btn-danger btn-block mt-5"
                                    onClick={() => deleteConfirm(query.slug)}>Delete</button>

                                {showUpdatedButton(query.slug)}

                                {mobile.flag === 0 ? <button onClick={approveButton} className="container btn btn-sm btn-primary btn-block">Publish this post</button>
                                    :
                                    <button onClick={unPublishButton} className="container btn btn-sm btn-success btn-block">Un-publish this post</button>}


                            </div>

                        </div>
                        <div className="row ml-0 mr-0">
                            <div className="col-md-12">
                                <main className="container">
                                    <article className="mt-5 mb-5">
                                        <div className="mt-5 mb-5">
                                            <section>
                                                <div className="row" style={{ marginTop: '-30px' }}>
                                                    <img
                                                        src={`${API}/mobile/photo/${query.slug}`}
                                                        alt={mobile.title}
                                                        className="img img-fluid featured-image" />
                                                </div>
                                            </section>
                                            <section>
                                                <div>
                                                    <h1 className="display-2 pb-3 font-weight-bold">
                                                        {mobile.title}
                                                    </h1>
                                                    <p className="lead mt-3 mark">
                                                        Written by {mobile.postedBy.username}  | published {moment(mobile.updatedAt).fromNow()}
                                                    </p>

                                                </div>
                                            </section>
                                        </div>
                                        <div>
                                            <section>
                                                <div>
                                                    <div>
                                                        <h4 className="mb-3 font-weight-bolder">Launch</h4>
                                                    </div>
                                                    <table className="table table-striped table-hover">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Announced</th>
                                                                <td>{mobile.launchAnnouced}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Availability</th>
                                                                <td>{mobile.displayProtection}</td>
                                                            </tr>



                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Display</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>



                                                            <tr>
                                                                <th scope="row">Type</th>
                                                                <td >{mobile.displayType}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Size</th>
                                                                <td>{mobile.displaySize}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Resolution</th>
                                                                <td>{mobile.displayProtection}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Protection</th>
                                                                <td>{mobile.displayProtection}</td>
                                                            </tr>



                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Network</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>



                                                            <tr>
                                                                <th scope="row">Technology</th>
                                                                <td >{mobile.networkTechnology}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2G bands</th>
                                                                <td>{mobile.network2gband}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3G bands</th>
                                                                <td>{mobile.network3gband}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">4G bands</th>
                                                                <td>{mobile.displayProtection}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">5G bands</th>
                                                                <td>{mobile.network5gband}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Speed</th>
                                                                <td>{mobile.networkSpeed}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Sim Type</th>
                                                                <td>{mobile.networkSimType}</td>
                                                            </tr>




                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Hardware</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>






                                                            <tr>
                                                                <th scope="row">Chipset</th>
                                                                <td >{mobile.hardwareChipset}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">processor</th>
                                                                <td>{mobile.hardwareProcessor}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">GPU</th>
                                                                <td>{mobile.hardwareGpu}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Ram</th>
                                                                <td>{mobile.hardwareRam}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Storage</th>
                                                                <td>{mobile.hardwareStorage}</td>
                                                            </tr>





                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Software</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>





                                                            <tr>
                                                                <th scope="row">OS</th>
                                                                <td >{mobile.softwareOs}</td>
                                                            </tr>




                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Main Camera</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>




                                                            <tr>
                                                                <th scope="row">Details</th>
                                                                <td >{mobile.mainCameraDetails}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Features</th>
                                                                <td>{mobile.mainCameraFeatures}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Video</th>
                                                                <td>{mobile.mainCameraVideo}</td>
                                                            </tr>





                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Selfy Camera</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>





                                                            <tr>
                                                                <th scope="row">Details</th>
                                                                <td >{mobile.selfyCameraDetails}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Features</th>
                                                                <td>{mobile.selfyCameraFeatures}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Video</th>
                                                                <td>{mobile.selfyCameraVideo}</td>
                                                            </tr>





                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Connectivity & Sensors</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>






                                                            <tr>
                                                                <th scope="row">WLAN</th>
                                                                <td >{mobile.conWlan}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Bluetooth</th>
                                                                <td>{mobile.conBluetooth}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">GPS</th>
                                                                <td>{mobile.conGps}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">NFC</th>
                                                                <td>{mobile.conNfc}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Radio</th>
                                                                <td>{mobile.conRadio}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">USB</th>
                                                                <td>{mobile.conUsb}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Sensors</th>
                                                                <td>{mobile.conSensors}</td>
                                                            </tr>





                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Battery</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>






                                                            <tr>
                                                                <th scope="row">Details</th>
                                                                <td >{mobile.batteryDetails}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Features</th>
                                                                <td>{mobile.batteryFeatures}</td>
                                                            </tr>





                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Sounds</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>






                                                            <tr>
                                                                <th scope="row">Headphone</th>
                                                                <td >{mobile.soundHeadphone}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Features</th>
                                                                <td>{mobile.soundFeatures}</td>
                                                            </tr>





                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Body & Design</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>






                                                            <tr>
                                                                <th scope="row">Weight</th>
                                                                <td >{mobile.bodyWeight}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Dimension</th>
                                                                <td>{mobile.bodyDimension}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Build</th>
                                                                <td>{mobile.bodyBuild}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Buttons</th>
                                                                <td>{mobile.bodyButtons}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Resistance</th>
                                                                <td>{mobile.bodyResistence}</td>
                                                            </tr>






                                                            <tr>
                                                                <td colSpan="2" style={{ backgroundColor: 'white' }}>
                                                                    <div>
                                                                        <h4 className="mt-3 mb-3 font-weight-bolder">Product Details</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>







                                                            <tr>
                                                                <th scope="row">Colors</th>
                                                                <td >{mobile.productColors}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Models</th>
                                                                <td>{mobile.productModels}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Price</th>
                                                                <td>{mobile.productPrice}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Protection</th>
                                                                <td>{mobile.displayProtection}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </section>
                                        </div>
                                    </article>
                                </main>
                            </div>
                        </div>
                    </div>
                </Admin>
            </Layout>
        </React.Fragment >
    )
}

//this method exectes at the server side. query is same as the router . in server side slugcan be access thruogh query, in client side it can be access through router use JSON.stringify()
SingleBlog.getInitialProps = ({ query }) => {
    return singleMobile(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            //console.log('get init : ', data);

            return { mobile: data, query }
        }
    })
};

export default withRouter(SingleBlog);