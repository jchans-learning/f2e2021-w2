import React from "react";
import PropTypes from "prop-types";
// for props validation

function FooterIcon(props) {
  return <div>{props.service}</div>;
}

// Props type validation
FooterIcon.propTypes = {
  service: PropTypes.string.isRequired,
};

export default FooterIcon;
