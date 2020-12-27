import Admin from "../../../components/auth.components/Admin";
import Tag from "../../../components/crud/Tag";

const TagPage = () => {
  return (
    <Admin>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-12 pt-5 pb-5">
            <h2 className="text-center pt-4 pb-4">Manage Tags</h2>
          </div>
          <div className="col-md-6 offset-md-3 pb-5">
            <Tag />
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default TagPage;
