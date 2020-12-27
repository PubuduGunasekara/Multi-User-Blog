import SigninComponent from "../../components/auth.components/SigninComponent";
import { withRouter } from "next/router";

/**
 * completed!
 */

const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };

  return (
    <div className="container mb-5">
      <h2 className="text-center pt-5 pb-5">Signin</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signin);
