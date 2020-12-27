import Admin from "../../../components/auth.components/Admin";
import AllPosts from "../../../components/crud/AllPosts.component";

/**
 * completed!
 */

const Blog = () => {
  return (
    <Admin>
      <div className="container mb-5">
        <div className="row ml-0 mr-0">
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <h2 className="text-center pt-5 pb-5">Manage Posts</h2>
          </div>
          <div className="col-md-12 pl-0 pr-0 ml-0 mr-0">
            <AllPosts />
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Blog;
