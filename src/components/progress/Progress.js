import React from "react";
import PropTypes from "prop-types";

const Progress = ({ length, index }) => (
  <p>
    {index + 1}/{length}
  </p>
);

Progress.propTypes = {
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Progress;
