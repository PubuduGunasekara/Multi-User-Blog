import { useState, useEffect } from "react";
import Router from "next/router";
import { withRouter } from "next/router";
import { getCookie } from "../../actions/auth.action";
import {
  createMCategory,
  mCategoryList,
  removeMCategory,
} from "../../actions/mobileCategory.action";
import { Button } from "reactstrap";
import confirm from "reactstrap-confirm";
import { DOMAIN } from "../../config";

/**
 * completed!
 */
const CreateMcategoryComponent = ({ router }) => {
  const [imgBtn, setImgBtn] = useState(false);
  const [photo, setPhoto] = useState("");
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
    loadMCategories();
  }, [router]);

  const publihMCategory = (e) => {
    e.preventDefault();
    createMCategory(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          body: "",
          error: "",
          success: `A new Mobile Category "${data.name}" is created`,
        });
        setPhoto("");
        setImgBtn(false);
        loadMCategories();
      }
    });
  };

  const handleChange = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;

    if (name === "photo" && e.target.files[0]) {
      setImgBtn(true);
      setPhoto(e.target.files[0]);
    }
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const showError = () => (
    <div
      className="alert alert-danger container-fluid"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success container-fluid"
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );

  const createMCategoryForm = () => {
    return (
      <form className="container-fluid" onSubmit={publihMCategory}>
        <div className="form-group">
          <input
            placeholder="Name"
            type="text"
            className="form-control"
            value={name}
            onChange={handleChange("name")}
          />
        </div>

        <div className="form-group">
          <textarea
            rows="13"
            placeholder="Body"
            type="text"
            className="form-control"
            value={body}
            onChange={handleChange("body")}
          />
        </div>

        <div>
          <Button className="submit" className="btn btn-block btn-lg">
            Add
          </Button>
        </div>
      </form>
    );
  };

  const [mvalues, setMValues] = useState({
    mname: "",
    merror: false,
    msuccess: false,
    mCategories: [],
    mremoved: false,
    mreload: false,
  });

  const { merror, mremoved, mCategories } = mvalues;

  const loadMCategories = () => {
    mCategoryList().then((data) => {
      if (data.error) {
        setMValues({ ...mvalues, merror: data.error });
      } else {
        setMValues({ ...mvalues, mCategories: data });
      }
    });
  };
  const deleteConfirm = async (slug) => {
    var answer = await confirm({
      title: (
        <>
          <strong>PHONE CATEGORY DELETE</strong>
        </>
      ),
      message: "Are you sure?",
      confirmText: "YES, Delete the category",
      confirmColor: "danger",
      cancelText: "NO, Keep the category",
      cancelColor: "warning",
    });
    if (answer) {
      deleteMCategory(slug);
    }
  };

  const deleteMCategory = (slug) => {
    removeMCategory(slug, token).then((data) => {
      if (data.error) {
        setMValues({ ...mvalues, merror: data.error });
      } else {
        setMValues({ ...mvalues, merror: false, mremoved: !mremoved });
        window.location.reload(true);
      }
    });
  };

  const showMCategories = () => {
    return mCategories.map((t, i) => {
      return (
        <div key={i} style={{ border: "red" }}>
          <a
            onClick={() => {
              Router.push(
                `${DOMAIN}/admin-panel/root-admin/crud/mobile-category/update/${t.slug}`
              );
            }}
            title="click to update"
            className="btn btn-outline-primary mr-1 ml-1 mt-1"
          >
            {t.name}
          </a>
          <a
            onClick={() => deleteConfirm(t.slug)}
            title="click to Delete"
            className="btn btn-danger"
          >
            X
          </a>
        </div>
      );
    });
  };

  const showRemoved = () => {
    if (mremoved) {
      return <p className="text-danger">Category is removed</p>;
    }
  };

  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          width: "100%",
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <div
          className="col-md-8"
          style={{
            width: "100%",
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 0,
            marginRight: 0,
          }}
        >
          {showError()}
          {showSuccess()}
          {createMCategoryForm()}
        </div>
        <div
          className="col-md-4"
          style={{
            width: "100%",
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 0,
            marginRight: 0,
          }}
        >
          <div className="col-md-12">
            <div className="form-group pb-2">
              <h5>Featured Image</h5>
              <hr />
              <small className="text-muted">Max size: 1mb</small>
              <br />
              <label
                className={
                  imgBtn ? "btn btn-danger disabled" : "btn btn-outline-info"
                }
              >
                {imgBtn ? "image Uploaded" : "Upload featured image"}
                <input
                  onChange={handleChange("photo")}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </label>
              <div style={{ overflow: "scroll" }}>
                <p>{photo.name}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h5>Mobile Categories</h5>
            <hr />
            <div style={{ overflowY: "auto", height: "200px" }}>
              {showRemoved()}
              {showMCategories()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateMcategoryComponent);
