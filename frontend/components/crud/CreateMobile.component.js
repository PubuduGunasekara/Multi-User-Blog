import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth.action";
import { getTags } from "../../actions/tag.action";
import { createMobile } from "../../actions/mobile.action";
import { Button } from "reactstrap";
import { mCategoryList } from "../../actions/mobileCategory.action";

/**
 * completed!
 */
const CreateMobileComponent = ({ router }) => {
  const [tags, setTags] = useState([]);

  const [brands, setBrands] = useState([]);

  const [checkedTag, setCheckTag] = useState([]); //tags

  const [imgBtn, setImgBtn] = useState(false);
  const [photo, setPhoto] = useState("");
  const [values, setValues] = useState({
    error: "",
    success: "",
    formData: "",
    title: "",
    body: "",
    source: "",
    fdDisplay: "",
    fdBattery: "",
    fdStorage: "",
    fdCamera: "",
    fdOs: "",
    fdChipset: "",
    displayType: "",
    displaySize: "",
    displayResolution: "",
    displayProtection: "",
    conWlan: "",
    conBluetooth: "",
    conGps: "",
    conNfc: "",
    conRadio: "",
    conUsb: "",
    conSensors: "",
    networkTechnology: "",
    network2gband: "",
    network3gband: "",
    network4gband: "",
    network5gband: "",
    networkSpeed: "",
    networkSimType: "",
    mainCameraDetails: "",
    mainCameraFeatures: "",
    mainCameraVideo: "",
    selfyCameraDetails: "",
    selfyCameraFeatures: "",
    selfyCameraVideo: "",
    hardwareChipset: "",
    hardwareProcessor: "",
    hardwareGpu: "",
    hardwareRam: "",
    hardwareStorage: "",
    softwareOs: "",
    launchAnnouced: "",
    launchAvailability: "",
    soundHeadphone: "",
    soundFeatures: "",
    batteryDetails: "",
    batteryFeatures: "",
    bodyWeight: "",
    bodyDimension: "",
    bodyBuild: "",
    bodyButtons: "",
    bodyResistence: "",
    productModels: "",
    productPrice: "",
    productColors: "",
  });

  const {
    error,
    success,
    formData,
    title,
    body,
    source,
    fdDisplay,
    fdBattery,
    fdStorage,
    fdCamera,
    fdOs,
    fdChipset,
    displayType,
    displaySize,
    displayResolution,
    displayProtection,
    conWlan,
    conBluetooth,
    conGps,
    conNfc,
    conRadio,
    conUsb,
    conSensors,
    networkTechnology,
    network2gband,
    network3gband,
    network4gband,
    network5gband,
    networkSpeed,
    networkSimType,
    mainCameraDetails,
    mainCameraFeatures,
    mainCameraVideo,
    selfyCameraDetails,
    selfyCameraFeatures,
    selfyCameraVideo,
    hardwareChipset,
    hardwareProcessor,
    hardwareGpu,
    hardwareRam,
    hardwareStorage,
    softwareOs,
    launchAnnouced,
    launchAvailability,
    soundHeadphone,
    soundFeatures,
    batteryDetails,
    batteryFeatures,
    bodyWeight,
    bodyDimension,
    bodyBuild,
    bodyButtons,
    bodyResistence,
    productModels,
    productPrice,
    productColors,
  } = values;
  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initTags();
    initBrands();
  }, [router]);

  const initBrands = () => {
    mCategoryList().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBrands(data);
      }
    });
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

  const publihMobile = (e) => {
    e.preventDefault();
    createMobile(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          error: "",
          formData: "",
          title: "",
          body: "",
          source: "",
          fdDisplay: "",
          fdBattery: "",
          fdStorage: "",
          fdCamera: "",
          fdOs: "",
          fdChipset: "",
          displayType: "",
          displaySize: "",
          displayResolution: "",
          displayProtection: "",
          conWlan: "",
          conBluetooth: "",
          conGps: "",
          conNfc: "",
          conRadio: "",
          conUsb: "",
          conSensors: "",
          networkTechnology: "",
          network2gband: "",
          network3gband: "",
          network4gband: "",
          network5gband: "",
          networkSpeed: "",
          networkSimType: "",
          mainCameraDetails: "",
          mainCameraFeatures: "",
          mainCameraVideo: "",
          selfyCameraDetails: "",
          selfyCameraFeatures: "",
          selfyCameraVideo: "",
          hardwareChipset: "",
          hardwareProcessor: "",
          hardwareGpu: "",
          hardwareRam: "",
          hardwareStorage: "",
          softwareOs: "",
          launchAnnouced: "",
          launchAvailability: "",
          soundHeadphone: "",
          soundFeatures: "",
          batteryDetails: "",
          batteryFeatures: "",
          bodyWeight: "",
          bodyDimension: "",
          bodyBuild: "",
          bodyButtons: "",
          bodyResistence: "",
          productModels: "",
          productPrice: "",
          productColors: "",
          success: `A new Mobile Titled "${data.title}" is created`,
        });
        setTags([]);
        setPhoto("");
        setImgBtn(false);
        initTags();
        initBrands();
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

  const createMobileForm = () => {
    return (
      <form onSubmit={publihMobile}>
        <div className="form-group">
          <label>Title</label>
          <hr />
        </div>
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
          <label>Mobile Brand</label>
          <hr />
        </div>
        <div className="form-group">
          <select onChange={handleChange("brand")} className="form-control">
            <option value="">Select Brand Name</option>
            {brands.map((b, i) => (
              <option key={b._id} value={b._id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Source Link</label>
          <hr />
        </div>
        <div className="form-group">
          <input
            placeholder="Source"
            type="text"
            className="form-control"
            value={source}
            onChange={handleChange("source")}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description for mdesc"
            className="form-control"
            value={body}
            onChange={handleChange("body")}
          />
        </div>

        <div className="form-group">
          <label>Featured data</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Featured data Display"
            className="form-control"
            value={fdDisplay}
            onChange={handleChange("fdDisplay")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Featured data Battery"
            className="form-control"
            value={fdBattery}
            onChange={handleChange("fdBattery")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Featured data Storage"
            className="form-control"
            value={fdStorage}
            onChange={handleChange("fdStorage")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Featured data Camera"
            className="form-control"
            value={fdCamera}
            onChange={handleChange("fdCamera")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Featured data OS"
            className="form-control"
            value={fdOs}
            onChange={handleChange("fdOs")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Featured data Chipset"
            className="form-control"
            value={fdChipset}
            onChange={handleChange("fdChipset")}
          />
        </div>

        <div className="form-group">
          <label>Display</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Displaye Type"
            className="form-control"
            value={displayType}
            onChange={handleChange("displayType")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Display Size"
            className="form-control"
            value={displaySize}
            onChange={handleChange("displaySize")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Display Resolution"
            className="form-control"
            value={displayResolution}
            onChange={handleChange("displayResolution")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Display Protection"
            className="form-control"
            value={displayProtection}
            onChange={handleChange("displayProtection")}
          />
        </div>

        <div className="form-group">
          <label>Connectivity and sensors</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Connection WLAN"
            className="form-control"
            value={conWlan}
            onChange={handleChange("conWlan")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Connection Bluetooth"
            className="form-control"
            value={conBluetooth}
            onChange={handleChange("conBluetooth")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Connection GPS"
            className="form-control"
            value={conGps}
            onChange={handleChange("conGps")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Connection NFC"
            className="form-control"
            value={conNfc}
            onChange={handleChange("conNfc")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Connaction Radio"
            className="form-control"
            value={conRadio}
            onChange={handleChange("conRadio")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Connection USB"
            className="form-control"
            value={conUsb}
            onChange={handleChange("conUsb")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Connection sensor"
            className="form-control"
            value={conSensors}
            onChange={handleChange("conSensors")}
          />
        </div>

        <div className="form-group">
          <label>Network</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Network Technology"
            className="form-control"
            value={networkTechnology}
            onChange={handleChange("networkTechnology")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Network 2G band"
            className="form-control"
            value={network2gband}
            onChange={handleChange("network2gband")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Network 3G band"
            className="form-control"
            value={network3gband}
            onChange={handleChange("network3gband")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Network 4G band"
            className="form-control"
            value={network4gband}
            onChange={handleChange("network4gband")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Network 5G band"
            className="form-control"
            value={network5gband}
            onChange={handleChange("network5gband")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Network Speed"
            className="form-control"
            value={networkSpeed}
            onChange={handleChange("networkSpeed")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Network sim type"
            className="form-control"
            value={networkSimType}
            onChange={handleChange("networkSimType")}
          />
        </div>

        <div className="form-group">
          <label>Main Camera</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Main Camera Details"
            className="form-control"
            value={mainCameraDetails}
            onChange={handleChange("mainCameraDetails")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Main Camera Features"
            className="form-control"
            value={mainCameraFeatures}
            onChange={handleChange("mainCameraFeatures")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Main Camera Video"
            className="form-control"
            value={mainCameraVideo}
            onChange={handleChange("mainCameraVideo")}
          />
        </div>

        <div className="form-group">
          <label>Selfy Camera</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Selfy Camera Details"
            className="form-control"
            value={selfyCameraDetails}
            onChange={handleChange("selfyCameraDetails")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Selfy Camera Features"
            className="form-control"
            value={selfyCameraFeatures}
            onChange={handleChange("selfyCameraFeatures")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Selfy Camera Video"
            className="form-control"
            value={selfyCameraVideo}
            onChange={handleChange("selfyCameraVideo")}
          />
        </div>

        <div className="form-group">
          <label>Hardware</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Hardware Chipset"
            className="form-control"
            value={hardwareChipset}
            onChange={handleChange("hardwareChipset")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Hardware Processor"
            className="form-control"
            value={hardwareProcessor}
            onChange={handleChange("hardwareProcessor")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Hardware GPU"
            className="form-control"
            value={hardwareGpu}
            onChange={handleChange("hardwareGpu")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Hardware RAM"
            className="form-control"
            value={hardwareRam}
            onChange={handleChange("hardwareRam")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Hardware Storage"
            className="form-control"
            value={hardwareStorage}
            onChange={handleChange("hardwareStorage")}
          />
        </div>

        <div className="form-group">
          <label>Software</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Software OS"
            className="form-control"
            value={softwareOs}
            onChange={handleChange("softwareOs")}
          />
        </div>

        <div className="form-group">
          <label>Launch</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Launch announced"
            className="form-control"
            value={launchAnnouced}
            onChange={handleChange("launchAnnouced")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Launch availability"
            className="form-control"
            value={launchAvailability}
            onChange={handleChange("launchAvailability")}
          />
        </div>

        <div className="form-group">
          <label>Sounds</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Sound Headphone"
            className="form-control"
            value={soundHeadphone}
            onChange={handleChange("soundHeadphone")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Sound Features"
            className="form-control"
            value={soundFeatures}
            onChange={handleChange("soundFeatures")}
          />
        </div>

        <div className="form-group">
          <label>Battery</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Battery Details"
            className="form-control"
            value={batteryDetails}
            onChange={handleChange("batteryDetails")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Battery Features"
            className="form-control"
            value={batteryFeatures}
            onChange={handleChange("batteryFeatures")}
          />
        </div>

        <div className="form-group">
          <label>Body and Design</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Body Weight"
            className="form-control"
            value={bodyWeight}
            onChange={handleChange("bodyWeight")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Body Dimension"
            className="form-control"
            value={bodyDimension}
            onChange={handleChange("bodyDimension")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Body Build"
            className="form-control"
            value={bodyBuild}
            onChange={handleChange("bodyBuild")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Body Buttons"
            className="form-control"
            value={bodyButtons}
            onChange={handleChange("bodyButtons")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Body Resistence"
            className="form-control"
            value={bodyResistence}
            onChange={handleChange("bodyResistence")}
          />
        </div>

        <div className="form-group">
          <label>Product Details</label>
          <hr />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Product models"
            className="form-control"
            value={productModels}
            onChange={handleChange("productModels")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Product Colors"
            className="form-control"
            value={productColors}
            onChange={handleChange("productColors")}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Product price"
            className="form-control"
            value={productPrice}
            onChange={handleChange("productPrice")}
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
          <div className="mb-3">{createMobileForm()}</div>

          {showError()}
          {showSuccess()}
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

export default withRouter(CreateMobileComponent);
