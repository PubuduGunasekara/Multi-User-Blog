import Private from "../../../components/auth.components/Private";
import ProfileUpdate from "../../../components/auth.components/ProfileUpdate.component";

/**
 * completed!
 */
const UserProfileUpdate = () => {
  return (
    <Private>
      <div className="container-fluid mb-5">
        <div className="row ml-0 mr-0">
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <h2 className="text-center pt-5 pb-5">Profile Update</h2>
          </div>
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <ProfileUpdate />
          </div>
        </div>
      </div>
    </Private>
  );
};

export default UserProfileUpdate;
