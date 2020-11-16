import Layout from "../../components/Layout";
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
    <Layout>
      <div className="container">
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
    </Layout>
  );
};

export default withRouter(Signin);
