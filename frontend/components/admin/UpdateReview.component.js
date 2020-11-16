import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { getCookie } from "../../actions/auth.action";
import { getTags } from "../../actions/tag.action";
import { singleReview, updateReview } from "../../actions/review.action";
import { API, DOMAIN } from "../../config";
import { Editor } from "@tinymce/tinymce-react";
import { TINYMC_APP_ID } from "../../config";
import { Button } from "reactstrap";

/**
 * completed!
 */
const ReviewUpdate = ({ router }) => {
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]); //tags
  const [imgBtn, setImgBtn] = useState(false);

  const [values, setValues] = useState({
    error: "",
    success: "",
    formData: "",
    title: "",
  });

  const { error, success, formData, title } = values;

  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initReview();
    initTags();
  }, [router]);

  const initReview = () => {
    if (router.query.slug) {
      singleReview(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({ ...values, title: data.title });
          setBody(data.body);
          setTagsArray(data.tags);
        }
      });
    }
  };

  const setTagsArray = (reviewTags) => {
    let ta = [];
    reviewTags.map((t, i) => {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const handleTagsToggle = (t) => () => {
    setValues({ ...values, error: "" });
    //return the first index or -1
    const clickedTag = checkedTag.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }

    //console.log(all)
    setCheckedTag(all);
    formData.set("tags", all);
  };

  const findOutTags = (t) => {
    const result = checkedTag.indexOf(t); // doesnt exists return -1 either true for exist

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleTagsToggle(t._id)}
            checked={findOutTags(t._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
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

  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
  };

  const editReview = (e) => {
    e.preventDefault();
    updateReview(formData, token, router.query.slug).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          success: `A Review Titled "${data.title}" is successfully updated`,
        });
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
      <a href={`${DOMAIN}/admin-panel/root-admin/list-all-post`}>
        . click here
      </a>{" "}
      to go back
    </div>
  );

  const updateReviewForm = () => {
    return (
      <form onSubmit={editReview}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleChange("title")}
          />
        </div>

        <div className="form-group">
          <Editor
            apiKey={TINYMC_APP_ID}
            value={body}
            init={{
              height: 500,
              menubar: "insert tools view file",
              plugins: [
                "advlist autolink autoresize lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen fullpage",
                "insertdatetime media table paste code help wordcount emoticons template paste",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help image code preview fullpage",
              image_caption: true,
              image_advtab: true,
            }}
            onEditorChange={handleBody}
          />
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
          {updateReviewForm()}
        </div>
        <div className="col-md-4 mb-5">
          <div>
            <div className="form-group pb-2">
              <h5>Featured Image</h5>
              <hr />
              {body && (
                <img
                  className="img img-fluid"
                  src={`${API}/reviews/photo/${router.query.slug}`}
                  alt={title}
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
          <div className="mb-5">
            <h5>Tags</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ReviewUpdate);
