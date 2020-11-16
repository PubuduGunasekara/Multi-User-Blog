import styles from "../../styles/Header.module.css";

/**
 * completed!
 */
const backDrop = (props) => {
  return (
    <div>
      <div
        title="tap to close the side menu"
        className={styles.backdrop}
        onClick={props.click}
      />
    </div>
  );
};
export default backDrop;
