import Private from "../../../components/auth.components/Private";
import NewsCreate from "../../../components/crud/CreateNews.component";

/**
 * completed!
 */

const CreateNews = () => {
  return (
    <Private>
      <div className="container-fluid mb-5">
        <div className="row ml-0 mr-0">
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <h2 className="text-center pt-5 pb-5">Create a new News</h2>
          </div>
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <NewsCreate />
          </div>
        </div>
      </div>
    </Private>
  );
};

export default CreateNews;
