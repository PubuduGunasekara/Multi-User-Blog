import Layout from '../../../../../../components/Layout';
import Admin from '../../../../../../components/auth.components/Admin';
import MobileCategoryUpdate from "../../../../../../components/admin/UpdateMobileCategory.component";

/**
 * completed!
 */
const News = () => {
    return (
        <Layout>
            <Admin>
            <div className="container-fluid">
                    <div className="row ml-0 mr-0">
                        <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
                            <h2 className="text-center pt-5 pb-5">Update mobile phone category</h2>
                        </div>
                        <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
                            <MobileCategoryUpdate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default News;