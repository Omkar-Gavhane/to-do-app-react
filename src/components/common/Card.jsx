import React from "react";

const Card = (props) => {
  const classes = "shadow-lg rounded-lg border-transparent boxShadow-allxl" + props.className;
  return (
    <div className={classes}>
        {props.children}
    </div>
  )
};

export default Card;
