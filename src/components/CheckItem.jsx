import React from "react";
import PropTypes from "prop-types";

const CheckItem = ({ icon, text }) => {
  return (
    <p className="flex items-baseline gap-2">
      <img src={icon} alt="check-icon" width={18} height={18}/>
      <span>{text}</span>
    </p>
  );
};

CheckItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CheckItem;
