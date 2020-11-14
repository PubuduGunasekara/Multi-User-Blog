import Layout from '../../../components/Layout';
import Link from 'next/link';
import Admin from '../../../components/auth.components/Admin';


/**
 * completed!
 */

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container">
                    <div className="row mr-0 ml-0">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2 className="text-center pt-4 pb-4">Root-Admin dashboard</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">

                                        <div className="row text-center">

                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <a href="/admin-panel/crud/new-news">New news</a>
                                                </li>
                                            </div>
                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/crud/new-review">
                                                        <a>New reviews</a>
                                                    </Link>
                                                </li>
                                            </div>
                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/root-admin/crud/mobile">
                                                        <a>New mobile phone</a>
                                                    </Link>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="row mt-4 text-center">
                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/root-admin/list-all-post">
                                                        <a>Post approval/update/delete</a>
                                                    </Link>
                                                </li>
                                            </div>

                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/crud/tags">
                                                        <a>Create tags</a>
                                                    </Link>
                                                </li>
                                            </div>

                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/root-admin/crud/mobile-category">
                                                        <a>Create Mobile Categories</a>
                                                    </Link>
                                                </li>
                                            </div>

                                        </div>
                                        <div className="row mt-4 text-center">
                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/user-signup">
                                                        <a>Add new user</a>
                                                    </Link>
                                                </li>
                                            </div>
                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/user/user-profile-update">
                                                        <a>Update profile</a>
                                                    </Link>
                                                </li>
                                            </div>
                                            <div className="col-md-4">
                                                <li className="list-group-item">
                                                    <Link href="/admin-panel/root-admin/list-all-users">
                                                        <a>List all users</a>
                                                    </Link>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex;