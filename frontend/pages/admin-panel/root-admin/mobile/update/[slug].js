import Admin from "../../../../../components/auth.components/Admin";
import MobileUpdate from "../../../../../components/admin/UpdateMobile.component";

/**
 * completed!
 */
const Mobile = () => {
  return (
    <Admin>
      <div className="container-fluid mb-5">
        <div className="row ml-0 mr-0">
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <h2 className="text-center pt-5 pb-5">Update Mobile</h2>
          </div>
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <MobileUpdate />
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Mobile;
