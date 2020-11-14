import Layout from '../../components/Layout';
import SingleTag from '../../components/singleTag.component/singleTag';
import { withRouter } from "next/router";

const Index = (tag) => {
    
    return (
        <Layout>
            <SingleTag singleTag={tag.tag} />
        </Layout>
    )
}
//this method executes at the server side. query is same as the router . in server side slug can be access thruogh query, in client side it can be access through router use JSON.stringify()
Index.getInitialProps = ({ query }) => {
    return(
      {tag:query.slug} 
    )
  };
  
  export default withRouter(Index);