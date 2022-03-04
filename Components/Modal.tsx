import { Fragment, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import styles from "../styles/common.module.css";
import modalStyles from "./Modal.module.css";
import { ImCross } from "react-icons/im";

const Modal: FunctionComponent<{ onClose: () => void }> = ({
  children,
  onClose,
}) => {

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
          className={styles.modal_overlay}
        ></motion.div>,
        document.getElementById("modal_overlay")!
      )}
      {ReactDOM.createPortal(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
          className={styles.modal_content + " " + styles.scroll}
        >
          {children}
          <button onClick={onClose} className={modalStyles.modal_close_button}>
            <ImCross></ImCross>
          </button>
        </motion.div>,
        document.getElementById("modal_content")!
      )}
    </Fragment>
  );
};

export default Modal;
