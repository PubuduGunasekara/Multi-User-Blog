import Private from "../../../components/auth.components/Private";
import ReviewCreate from "../../../components/crud/CreateReview.component";

/**
 * completed!
 */
const CreateReview = () => {
  return (
    <Private>
      <div className="container-fluid mb-5">
        <div className="row ml-0 mr-0">
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <h2 className="text-center pt-5 pb-5">Create a new Review</h2>
          </div>
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <ReviewCreate />
          </div>
        </div>
      </div>
    </Private>
  );
};

export default CreateReview;
