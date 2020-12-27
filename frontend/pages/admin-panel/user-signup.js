import SignupComponent from "../../components/auth.components/SignupComponent";
import Admin from "../../components/auth.components/Admin";

/**
 * completed!
 */
const Signup = () => {
  return (
    <Admin>
      <div className="container mb-5">
        <div className="row ml-0 mr-0">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center pt-5 pb-5">Sign-up</h2>
          </div>
          <div className="col-md-6 offset-md-3">
            <SignupComponent />
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Signup;
