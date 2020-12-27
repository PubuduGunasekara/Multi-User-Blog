import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth.action";
import { getTagsForCreators } from "../../actions/tag.action";
import { createNews } from "../../actions/news.action";
import { Editor } from "@tinymce/tinymce-react";
import { TINYMC_APP_ID } from "../../config";
import { Button } from "reactstrap";

/**
 * completed!
 */
const CreateNewsComponent = ({ router }) => {
  /**
   * news restored from local storage
   */
  const newsFromLS = () => {
    if (typeof window === "undefined") {
      return "";
    }

    if (localStorage.getItem(`news-${isAuth()._id}`)) {
      return JSON.parse(localStorage.getItem(`news-${isAuth()._id}`));
    } else {
      return "";
    }
  };

  const [tags, setTags] = useState([]);

  const [checkedTag, setCheckTag] = useState([]); //tags

  const [imgBtn, setImgBtn] = useState(false);
  const [photo, setPhoto] = useState("");

  const [body, setBody] = useState(newsFromLS());
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
    initTags();
  }, [router]);

  //done
  const initTags = () => {
    getTagsForCreators().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const publihReview = (e) => {
    e.preventDefault();
    createNews(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          error: "",
          success: `A new News Titled "${data.title}" is created`,
        });
        setBody("");
        setTags([]);
        setPhoto("");
        setImgBtn(false);
        if (process.browser) {
          localStorage.removeItem(`news-${isAuth()._id}`);
        }
        initTags();
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

  //done
  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem(`news-${isAuth()._id}`, JSON.stringify(e));
    }
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
    setCheckTag(all);
    formData.set("tags", all);
  };

  const showTags = () => {
    return (
      <div>
        {tags ? (
          tags.map((t, i) => (
            <li key={i} className="list-unstyled">
              <input
                onChange={handleTagsToggle(t._id)}
                type="checkbox"
                className="mr-2"
              />
              <label className="form-check-label">{t.name}</label>
            </li>
          ))
        ) : (
          <div className="alert alert-danger">
            <p>No Tags found!</p>
          </div>
        )}
      </div>
    );
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
    </div>
  );

  const createReviewForm = () => {
    return (
      <form onSubmit={publihReview}>
        <div className="form-group">
          <input
            placeholder="Title"
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
            Publish
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {showError()}
          {showSuccess()}
          {createReviewForm()}
        </div>
        <div className="col-md-4">
          <div>
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
          <div>
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

export default withRouter(CreateNewsComponent);
