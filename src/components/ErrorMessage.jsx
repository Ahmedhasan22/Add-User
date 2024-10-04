import React from "react";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = ({ message, onDismiss }) => {
  return (
    <div className={classes.error}>
      <div className={classes["error-header"]}>{message}</div>
      <div className={classes["error-message"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        quasi nihil quis quae animi odit quod fugiat a ipsum quas.
      </div>
      <button className={classes.button} onClick={onDismiss}>OK</button>
    </div>
  );
};

export default ErrorMessage;
