import Layout from '../../../components/Layout';
import Link from 'next/link';
import Private from '../../../components/auth.components/Private';

/**
 * completed!
 */

const ModeratorIndex = () => {
    return (
        <Layout>
            <Private>
                <div className="container">
                    <div className="row mr-0 ml-0">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2 className="text-center pt-4 pb-4">Moderator dashboard</h2>
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
                                            </div>
                                            <div className="row mt-4 text-center">

                                                <div className="col-md-4">
                                                    <li className="list-group-item">
                                                        <Link href="/admin-panel/crud/tags">
                                                            <a>Create tags</a>
                                                        </Link>
                                                    </li>
                                                </div>
                                                <div className="col-md-4">
                                                    <li className="list-group-item">
                                                        <Link href="/admin-panel/moderator/list-all-post">
                                                            <a>View my post</a>
                                                        </Link>
                                                    </li>
                                                </div>

                                            </div>
                                            <div className="row mt-4 text-center">
                                                <div className="col-md-4">
                                                    <li className="list-group-item">
                                                        <Link href="/admin-panel/user/user-profile-update">
                                                            <a>Update profile</a>
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
            </Private>
        </Layout>
    )
}

export default ModeratorIndex;