import Link from "next/link";
import DrawerToggleButton from "./SideDrawerButton";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import styles from "../../styles/Header.module.css";

/**
 * completed!
 * */
const userNavbar = (props) => {
  return (
    <div>
      <header className={styles.toolbar}>
        <nav className={styles.toolbar__navigation}>
          <div className={styles.toolbar__logo}>
            <Link href="/">
              <img
                alt="techbot.com"
                style={{ cursor: "pointer" }}
                className="img img-fluid"
                src={`/static/images/logo_techbotlk.png`}
              />
            </Link>
          </div>
          <div className={styles.spacer} />
          <div className={styles.toolbar_navigation_items}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a>News</a>
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <a>Reviews</a>
                </Link>
              </li>
              <li>
                <Link href="/phones">
                  <a>Mobile Phones</a>
                </Link>
              </li>
              <div className={styles.toolbar__navigation_search_image}>
                {props.largeScreenActiveBtn ? (
                  <div
                    className={styles.toggle_button__with_search_icons}
                    onClick={props.largeScreenCloseFunction}
                    title="cancel"
                  >
                    <MdClose size="1.5rem" color="#858585" />
                  </div>
                ) : (
                  <div
                    className={styles.toggle_button__with_search_icons}
                    onClick={props.largeScreenSearchHandler}
                    title="search techbot.com"
                  >
                    <FiSearch size="1.5rem" color="#858585" />
                  </div>
                )}
              </div>
            </ul>
          </div>
          <div className={styles.toolbar__toggle_button}>
            <DrawerToggleButton
              closeFunction={props.closeFunction}
              close={props.btnActive}
              mobile={props.mobileSearchHanlder}
              click={props.drawerClickHandler}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default userNavbar;
