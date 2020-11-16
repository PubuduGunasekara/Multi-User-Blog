import Layout from "../../../../../components/Layout";
import Admin from "../../../../../components/auth.components/Admin";
import ReviewUpdate from "../../../../../components/admin/UpdateReview.component";

/**
 * completed!
 */
const Review = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row ml-0 mr-0">
            <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
              <h2 className="text-center pt-5 pb-5">Update Review</h2>
            </div>
            <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
              <ReviewUpdate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Review;
