import Layout from '../../components/Layout';
import Profile from '../../components/publicUserProfile/publicUser';
import { withRouter } from "next/router";

const Index = (profile) => {
    
    return (
        <Layout>
            <Profile username={profile.username} />
        </Layout>
    )
}



//this method executes at the server side. query is same as the router . in server side slug can be access thruogh query, in client side it can be access through router use JSON.stringify()
Index.getInitialProps = ({ query }) => {
    return(
      {username:query.slug} 
    )
  };
  
  export default withRouter(Index);