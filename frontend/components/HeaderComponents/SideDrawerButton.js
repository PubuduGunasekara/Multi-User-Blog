import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import styles from "../../styles/Header.module.css";

/**
 * completed!
 */

const drawerToggleButton = (props) => {
  return (
    <div>
      <div className={styles.toggle_button__with_search}>
        {props.close ? (
          <div
            className={styles.toggle_button__with_search_icons}
            onClick={props.closeFunction}
            title="cancel"
          >
            <MdClose size="1.5rem" color="#858585" />
          </div>
        ) : (
          <div
            className={styles.toggle_button__with_search_icons}
            onClick={props.mobile}
            title="search techbot.com"
          >
            <FiSearch size="1.5rem" color="#858585" />
          </div>
        )}

        <button
          title="Menu Toggle Button"
          className={styles.toggle_button}
          onClick={props.click}
        >
          <div className={styles.toggle_botton__line} />
          <div className={styles.toggle_botton__line} />
          <div className={styles.toggle_botton__line} />
        </button>
      </div>
    </div>
  );
};

export default drawerToggleButton;
