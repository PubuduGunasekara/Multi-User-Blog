import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { getCookie } from "../../actions/auth.action";
import {
  singleMCategoryForCreators,
  updateMCategory,
} from "../../actions/mobileCategory.action";
import { API, DOMAIN } from "../../config";
import { Button } from "reactstrap";

/**
 * completed!
 */
const MCatgoryUpdate = ({ router }) => {
  const [imgBtn, setImgBtn] = useState(false);
  const [values, setValues] = useState({
    error: "",
    success: "",
    formData: "",
    name: "",
    body: "",
  });

  const { error, success, formData, name, body } = values;

  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initMCategory();
  }, [router]);

  const initMCategory = () => {
    if (router.query.slug) {
      singleMCategoryForCreators(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({ ...values, name: data.name, body: data.body });
        }
      });
    }
  };

  const handleChange = (name) => (e) => {
    //console.log(e.target.value)
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    if (name === "photo" && e.target.files[0]) {
      setImgBtn(true);
    }
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const editMCategory = (e) => {
    e.preventDefault();
    updateMCategory(formData, token, router.query.slug).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          body: "",
          success: `A Categorry named "${data.name}" is successfully updated`,
        });
        window.location.reload(false);
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      {success}
      <a href={`${DOMAIN}/admin-panel/root-admin/crud/mobile-category`}>
        . click here
      </a>{" "}
      to go back
    </div>
  );

  const updateMCategoryForm = () => {
    return (
      <form onSubmit={editMCategory}>
        <div className="form-group">
          <label className="text-muted">category Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleChange("name")}
          />
        </div>
        <div className="form-group">
          <div className="form-group">
            <label className="text-muted">Category Description</label>
            <textarea
              rows="13"
              placeholder="Body"
              type="text"
              className="form-control"
              value={body}
              onChange={handleChange("body")}
            />
          </div>
        </div>

        <div>
          <Button className="submit" className="btn btn-block btn-lg">
            Update
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row ml-0 mr-0">
        <div className="col-md-8 mb-5">
          {showError()}
          {showSuccess()}
          {updateMCategoryForm()}
        </div>
        <div className="col-md-4 mb-5">
          <div>
            <div className="form-group pb-2">
              <h5>Featured Image</h5>
              <hr />
              {body && (
                <img
                  className="img img-fluid"
                  src={`${API}/mobile-category/photo/${router.query.slug}`}
                  alt={name}
                  style={{ width: "100%" }}
                ></img>
              )}
              <hr />
              <small className="text-muted">Max size: 1mb</small>
              <br />
              <label
                className={
                  imgBtn ? "btn btn-danger disabled" : "btn btn-outline-info"
                }
              >
                {imgBtn ? "image Uploaded" : "Change featured image"}
                <input
                  onChange={handleChange("photo")}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MCatgoryUpdate);
