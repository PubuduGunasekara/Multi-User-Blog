import Admin from "../../../../components/auth.components/Admin";
import MobileCreate from "../../../../components/crud/CreateMobile.component";

/**
 * completed!
 */
const CreateNews = () => {
  return (
    <Admin>
      <div className="container-fluid mb-5">
        <div className="row ml-0 mr-0">
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <h2 className="text-center pt-5 pb-5">Create a new Mobile</h2>
          </div>
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <MobileCreate />
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default CreateNews;
