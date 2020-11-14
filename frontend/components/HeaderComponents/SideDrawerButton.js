import { DOMAIN } from "../../config";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

/**
 * completed!
 */

const drawerToggleButton = (props) => {
  return (
    <div>
      <div className="toggle-button__with-search">
        {props.close ? (
          <div
            className="toggle-button__with-search_icons"
            onClick={props.closeFunction}
            title="cancel"
          >
            <MdClose size="1.5rem" color="#858585" />
          </div>
        ) : (
          <div
            className="toggle-button__with-search_icons"
            onClick={props.mobile}
            title="search techbot.com"
          >
            <FiSearch size="1.5rem" color="#858585" />
          </div>
        )}

        <button
          title="Menu Toggle Button"
          className="toggle-button"
          onClick={props.click}
        >
          <div className="toggle-botton__line" />
          <div className="toggle-botton__line" />
          <div className="toggle-botton__line" />
        </button>
      </div>
    </div>
  );
};

export default drawerToggleButton;
