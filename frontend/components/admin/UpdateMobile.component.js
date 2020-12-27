import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { getCookie } from "../../actions/auth.action";
import { getTagsForCreators } from "../../actions/tag.action";
import {
  singleMobileCreators,
  updateMobile,
} from "../../actions/mobile.action";
import { API, DOMAIN } from "../../config";
import { Button } from "reactstrap";
import { mCategoryList } from "../../actions/mobileCategory.action";

/**
 * completed!
 */
const MobileUpdate = ({ router }) => {
  const [tags, setTags] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]); //tags
  const [imgBtn, setImgBtn] = useState(false);

  const [brands, setBrands] = useState([]);

  const [values, setValues] = useState({
    error: "",
    success: "",
    formData: "",
    title: "",
    source: "",
    brand: "",
    body: "",
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
    source,
    body,
    brand,
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
    initMobile();
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

  const initMobile = () => {
    if (router.query.slug) {
      singleMobileCreators(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({
            ...values,
            title: data.title,
            source: data.source,
            body: data.body,
            brand: data.brand,
            fdDisplay: data.fdDisplay,
            fdBattery: data.fdBattery,
            fdStorage: data.fdStorage,
            fdCamera: data.fdCamera,
            fdOs: data.fdOs,
            fdChipset: data.fdChipset,
            displayType: data.displayType,
            displaySize: data.displaySize,
            displayResolution: data.displayResolution,
            displayProtection: data.displayProtection,
            conWlan: data.conWlan,
            conBluetooth: data.conBluetooth,
            conGps: data.conGps,
            conNfc: data.conNfc,
            conRadio: data.conRadio,
            conUsb: data.conUsb,
            conSensors: data.conSensors,
            networkTechnology: data.networkTechnology,
            network2gband: data.network2gband,
            network3gband: data.network3gband,
            network4gband: data.network4gband,
            network5gband: data.network5gband,
            networkSpeed: data.networkSpeed,
            networkSimType: data.networkSimType,
            mainCameraDetails: data.mainCameraDetails,
            mainCameraFeatures: data.mainCameraFeatures,
            mainCameraVideo: data.mainCameraVideo,
            selfyCameraDetails: data.selfyCameraDetails,
            selfyCameraFeatures: data.selfyCameraFeatures,
            selfyCameraVideo: data.selfyCameraVideo,
            hardwareChipset: data.hardwareChipset,
            hardwareProcessor: data.hardwareProcessor,
            hardwareGpu: data.hardwareGpu,
            hardwareRam: data.hardwareRam,
            hardwareStorage: data.hardwareStorage,
            softwareOs: data.softwareOs,
            launchAnnouced: data.launchAnnouced,
            launchAvailability: data.launchAvailability,
            soundHeadphone: data.soundHeadphone,
            soundFeatures: data.soundFeatures,
            batteryDetails: data.batteryDetails,
            batteryFeatures: data.batteryFeatures,
            bodyWeight: data.bodyWeight,
            bodyDimension: data.bodyDimension,
            bodyBuild: data.bodyBuild,
            bodyButtons: data.bodyButtons,
            bodyResistence: data.bodyResistence,
            productModels: data.productModels,
            productPrice: data.productPrice,
            productColors: data.productColors,
          });
          setTagsArray(data.tags);
        }
      });
    }
  };

  const setTagsArray = (mobileTags) => {
    let ta = [];
    mobileTags.map((t, i) => {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

  const initTags = () => {
    getTagsForCreators().then((data) => {
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

  const editMobile = (e) => {
    e.preventDefault();
    updateMobile(formData, token, router.query.slug).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          success: `A Mobile Titled "${data.title}" is successfully updated`,
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

  const updateMobileForm = () => {
    return (
      <form onSubmit={editMobile}>
        <div className="form-group">
          <kbd>Title</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Title</label>
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
            <option value="">select an option</option>
            {brands.map((b, i) => (
              <option key={b._id} value={b._id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <kbd>Description</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Description for mdesc"
            className="form-control"
            value={body}
            onChange={handleChange("body")}
          />
        </div>

        <div className="form-group">
          <kbd>Featured data</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Featured data Display</label>
          <textarea
            placeholder="Featured data Display"
            className="form-control"
            value={fdDisplay}
            onChange={handleChange("fdDisplay")}
          />
        </div>
        <div className="form-group">
          <label>Featured data Battery</label>
          <textarea
            placeholder="Featured data Battery"
            className="form-control"
            value={fdBattery}
            onChange={handleChange("fdBattery")}
          />
        </div>
        <div className="form-group">
          <label>Featured data Storage</label>
          <textarea
            placeholder="Featured data Storage"
            className="form-control"
            value={fdStorage}
            onChange={handleChange("fdStorage")}
          />
        </div>
        <div className="form-group">
          <label>Featured data Camera</label>
          <textarea
            placeholder="Featured data Camera"
            className="form-control"
            value={fdCamera}
            onChange={handleChange("fdCamera")}
          />
        </div>
        <div className="form-group">
          <label>Featured data Os</label>
          <textarea
            placeholder="Featured data OS"
            className="form-control"
            value={fdOs}
            onChange={handleChange("fdOs")}
          />
        </div>
        <div className="form-group">
          <label>Featured data Chipset</label>
          <textarea
            placeholder="Featured data Chipset"
            className="form-control"
            value={fdChipset}
            onChange={handleChange("fdChipset")}
          />
        </div>

        <div className="form-group">
          <kbd>Display</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Displaye Type</label>
          <textarea
            placeholder="Displaye Type"
            className="form-control"
            value={displayType}
            onChange={handleChange("displayType")}
          />
        </div>
        <div className="form-group">
          <label>Displaye Size</label>
          <textarea
            placeholder="Display Size"
            className="form-control"
            value={displaySize}
            onChange={handleChange("displaySize")}
          />
        </div>
        <div className="form-group">
          <label>Displaye Resolution</label>
          <textarea
            placeholder="Display Resolution"
            className="form-control"
            value={displayResolution}
            onChange={handleChange("displayResolution")}
          />
        </div>
        <div className="form-group">
          <label>Displaye Protection</label>
          <textarea
            placeholder="Display Protection"
            className="form-control"
            value={displayProtection}
            onChange={handleChange("displayProtection")}
          />
        </div>

        <div className="form-group">
          <kbd>Connectivity and sensors</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Connection WLAN</label>
          <textarea
            placeholder="Connection WLAN"
            className="form-control"
            value={conWlan}
            onChange={handleChange("conWlan")}
          />
        </div>
        <div className="form-group">
          <label>Connection Bluetooth</label>
          <textarea
            placeholder="Connection Bluetooth"
            className="form-control"
            value={conBluetooth}
            onChange={handleChange("conBluetooth")}
          />
        </div>
        <div className="form-group">
          <label>Connection GPS</label>
          <textarea
            placeholder="Connection GPS"
            className="form-control"
            value={conGps}
            onChange={handleChange("conGps")}
          />
        </div>
        <div className="form-group">
          <label>Connection NFC</label>
          <textarea
            placeholder="Connection NFC"
            className="form-control"
            value={conNfc}
            onChange={handleChange("conNfc")}
          />
        </div>
        <div className="form-group">
          <label>Connection Radio</label>
          <textarea
            placeholder="Connaction Radio"
            className="form-control"
            value={conRadio}
            onChange={handleChange("conRadio")}
          />
        </div>
        <div className="form-group">
          <label>Connection USB</label>
          <textarea
            placeholder="Connection USB"
            className="form-control"
            value={conUsb}
            onChange={handleChange("conUsb")}
          />
        </div>
        <div className="form-group">
          <label>Connection sensor</label>
          <textarea
            placeholder="Connection sensor"
            className="form-control"
            value={conSensors}
            onChange={handleChange("conSensors")}
          />
        </div>

        <div className="form-group">
          <kbd>Network</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Network Technology</label>
          <textarea
            placeholder="Network Technology"
            className="form-control"
            value={networkTechnology}
            onChange={handleChange("networkTechnology")}
          />
        </div>
        <div className="form-group">
          <label>Network 2G band</label>
          <textarea
            placeholder="Network 2G band"
            className="form-control"
            value={network2gband}
            onChange={handleChange("network2gband")}
          />
        </div>
        <div className="form-group">
          <label>Network 3G band</label>
          <textarea
            placeholder="Network 3G band"
            className="form-control"
            value={network3gband}
            onChange={handleChange("network3gband")}
          />
        </div>
        <div className="form-group">
          <label>Network 4G band</label>
          <textarea
            placeholder="Network 4G band"
            className="form-control"
            value={network4gband}
            onChange={handleChange("network4gband")}
          />
        </div>
        <div className="form-group">
          <label>Network 5G band</label>
          <textarea
            placeholder="Network 5G band"
            className="form-control"
            value={network5gband}
            onChange={handleChange("network5gband")}
          />
        </div>
        <div className="form-group">
          <label>Network Speed</label>
          <textarea
            placeholder="Network Speed"
            className="form-control"
            value={networkSpeed}
            onChange={handleChange("networkSpeed")}
          />
        </div>
        <div className="form-group">
          <label>Network sim type</label>
          <textarea
            placeholder="Network sim type"
            className="form-control"
            value={networkSimType}
            onChange={handleChange("networkSimType")}
          />
        </div>

        <div className="form-group">
          <kbd>Main Camera</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Main Camera Details</label>
          <textarea
            placeholder="Main Camera Details"
            className="form-control"
            value={mainCameraDetails}
            onChange={handleChange("mainCameraDetails")}
          />
        </div>
        <div className="form-group">
          <label>Main Camera Features</label>
          <textarea
            placeholder="Main Camera Features"
            className="form-control"
            value={mainCameraFeatures}
            onChange={handleChange("mainCameraFeatures")}
          />
        </div>
        <div className="form-group">
          <label>Main Camera Video</label>
          <textarea
            placeholder="Main Camera Video"
            className="form-control"
            value={mainCameraVideo}
            onChange={handleChange("mainCameraVideo")}
          />
        </div>

        <div className="form-group">
          <kbd>Selfy Camera</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Selfy Camera Details</label>
          <textarea
            placeholder="Selfy Camera Details"
            className="form-control"
            value={selfyCameraDetails}
            onChange={handleChange("selfyCameraDetails")}
          />
        </div>
        <div className="form-group">
          <label>Selfy Camera Features</label>
          <textarea
            placeholder="Selfy Camera Features"
            className="form-control"
            value={selfyCameraFeatures}
            onChange={handleChange("selfyCameraFeatures")}
          />
        </div>
        <div className="form-group">
          <label>Selfy Camera Video</label>
          <textarea
            placeholder="Selfy Camera Video"
            className="form-control"
            value={selfyCameraVideo}
            onChange={handleChange("selfyCameraVideo")}
          />
        </div>

        <div className="form-group">
          <kbd>Hardware</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Hardware Chipset</label>
          <textarea
            placeholder="Hardware Chipset"
            className="form-control"
            value={hardwareChipset}
            onChange={handleChange("hardwareChipset")}
          />
        </div>
        <div className="form-group">
          <label>Hardware Processor</label>
          <textarea
            placeholder="Hardware Processor"
            className="form-control"
            value={hardwareProcessor}
            onChange={handleChange("hardwareProcessor")}
          />
        </div>
        <div className="form-group">
          <label>Hardware GPU</label>
          <textarea
            placeholder="Hardware GPU"
            className="form-control"
            value={hardwareGpu}
            onChange={handleChange("hardwareGpu")}
          />
        </div>
        <div className="form-group">
          <label>Hardware RAM</label>
          <textarea
            placeholder="Hardware RAM"
            className="form-control"
            value={hardwareRam}
            onChange={handleChange("hardwareRam")}
          />
        </div>
        <div className="form-group">
          <label>Hardware Storage</label>
          <textarea
            placeholder="Hardware Storage"
            className="form-control"
            value={hardwareStorage}
            onChange={handleChange("hardwareStorage")}
          />
        </div>

        <div className="form-group">
          <kbd>Software</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Software OS</label>
          <textarea
            placeholder="Software OS"
            className="form-control"
            value={softwareOs}
            onChange={handleChange("softwareOs")}
          />
        </div>

        <div className="form-group">
          <kbd>Launch</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Launch announced</label>
          <textarea
            placeholder="Launch announced"
            className="form-control"
            value={launchAnnouced}
            onChange={handleChange("launchAnnouced")}
          />
        </div>
        <div className="form-group">
          <label>Launch availability</label>
          <textarea
            placeholder="Launch availability"
            className="form-control"
            value={launchAvailability}
            onChange={handleChange("launchAvailability")}
          />
        </div>

        <div className="form-group">
          <kbd>Sounds</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Sound Headphone</label>
          <textarea
            placeholder="Sound Headphone"
            className="form-control"
            value={soundHeadphone}
            onChange={handleChange("soundHeadphone")}
          />
        </div>
        <div className="form-group">
          <label>Sound Features</label>
          <textarea
            placeholder="Sound Features"
            className="form-control"
            value={soundFeatures}
            onChange={handleChange("soundFeatures")}
          />
        </div>

        <div className="form-group">
          <kbd>Battery</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Battery Details</label>
          <textarea
            placeholder="Battery Details"
            className="form-control"
            value={batteryDetails}
            onChange={handleChange("batteryDetails")}
          />
        </div>
        <div className="form-group">
          <label>Battery Features</label>
          <textarea
            placeholder="Battery Features"
            className="form-control"
            value={batteryFeatures}
            onChange={handleChange("batteryFeatures")}
          />
        </div>

        <div className="form-group">
          <kbd>Body and Design</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Body Weight</label>
          <textarea
            placeholder="Body Weight"
            className="form-control"
            value={bodyWeight}
            onChange={handleChange("bodyWeight")}
          />
        </div>
        <div className="form-group">
          <label>Body Dimension</label>
          <textarea
            placeholder="Body Dimension"
            className="form-control"
            value={bodyDimension}
            onChange={handleChange("bodyDimension")}
          />
        </div>
        <div className="form-group">
          <label>Body Build</label>
          <textarea
            placeholder="Body Build"
            className="form-control"
            value={bodyBuild}
            onChange={handleChange("bodyBuild")}
          />
        </div>
        <div className="form-group">
          <label>Body Buttons</label>
          <textarea
            placeholder="Body Buttons"
            className="form-control"
            value={bodyButtons}
            onChange={handleChange("bodyButtons")}
          />
        </div>
        <div className="form-group">
          <label>Body Resistence</label>
          <textarea
            placeholder="Body Resistence"
            className="form-control"
            value={bodyResistence}
            onChange={handleChange("bodyResistence")}
          />
        </div>

        <div className="form-group">
          <kbd>Product Details</kbd>
          <hr />
        </div>
        <div className="form-group">
          <label>Product models</label>
          <textarea
            placeholder="Product models"
            className="form-control"
            value={productModels}
            onChange={handleChange("productModels")}
          />
        </div>
        <div className="form-group">
          <label>Product Colors</label>
          <textarea
            placeholder="Product Colors"
            className="form-control"
            value={productColors}
            onChange={handleChange("productColors")}
          />
        </div>
        <div className="form-group">
          <label>Product price</label>
          <textarea
            placeholder="Product price"
            className="form-control"
            value={productPrice}
            onChange={handleChange("productPrice")}
          />
        </div>
        <div className="form-group">
          <label>Source Link</label>
          <textarea
            placeholder="Source Link"
            className="form-control"
            value={source}
            onChange={handleChange("source")}
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
    <div className="container">
      <div className="row ml-0 mr-0">
        <div className="col-md-8 mb-5">
          <div className="mb-3">{updateMobileForm()}</div>
          {showError()}
          {showSuccess()}
        </div>
        <div className="col-md-4 mb-5">
          <div>
            <div className="form-group pb-2">
              <h5>Featured Image</h5>
              <hr />
              {body && (
                <img
                  className="img img-fluid"
                  src={`${API}/mobile/photo/${router.query.slug}`}
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

export default withRouter(MobileUpdate);
