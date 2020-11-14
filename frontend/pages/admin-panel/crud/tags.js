import Layout from '../../../components/Layout';
import Private from '../../../components/auth.components/Private';
import Tag from '../../../components/crud/Tag';

const TagPage = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2 className="text-center pt-4 pb-4">Manage Tags</h2>
                        </div>
                        <div className="col-md-6 offset-md-3 pb-5">
                            <Tag />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default TagPage;