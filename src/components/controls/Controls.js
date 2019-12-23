import React from "react";
import PropTypes from "prop-types";

const Controls = ({ nextPage, prevPage, index, items }) => (
  <>
    <section>
      <button type="button" disabled={index === 0} onClick={prevPage}>
        Назад
      </button>
      <button
        type="button"
        disabled={index === items.length - 1}
        onClick={nextPage}
      >
        Вперед
      </button>
    </section>
  </>
);

Controls.propTypes = {
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired
};

export default Controls;
