import Router from "next/router";
import { useState } from "react";
import styles from "../../styles/Header.module.css";

/**
 * completed!
 */
const mobileSearchButton = (props) => {
  let drawerClasses = `${styles.mobile__search}`;

  if (props.show) {
    drawerClasses = `${styles.mobile__search} ${styles.open}`;
  }

  const [values, setValues] = useState({
    searchKey: "",
  });

  const { searchKey } = values;

  const handleChange = (e) => {
    setValues({ searchKey: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    Router.push(`/searchS/${searchKey}`);
  };

  return (
    <div className={drawerClasses}>
      <form
        onSubmit={clickSubmit}
        style={{ width: "100%", display: "flex", flexDirection: "row" }}
      >
        <input
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            color: "#d8d8d8",
            opacity: "0.9",
            height: "50px",
            backgroundColor: "#2c2c2c",
            width: "80%",
            left: 0,
            margin: 0,
            padding: "8px",
            border: "0.1px",
            borderRadius: "0px 0px",
            boxShadow: "1px 0px 7px rgba(0,0,0,0.5)",
            fontSize: "20px",
          }}
          onChange={handleChange}
          value={searchKey}
          className="form-control"
          placeholder="Search Here..."
          type="search"
          required
        />
        <button
          type="submit"
          className="btn"
          style={{
            opacity: "1",
            borderRadius: "0px 0px",
            width: "20%",
            boxShadow: "1px 0px 7px rgba(0,0,0,0.5)",
            backgroundColor: "#242424",
            color: "#d8d8d8",
            title: "search teckbot.com",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default mobileSearchButton;
