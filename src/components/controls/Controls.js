import React from "react";
import PropTypes from "prop-types";

///добавить disabled

const Controls = ({ nextPage, prevPage }) => (
  <>
    <section>
      <button type="button" onClick={prevPage}>
        Назад
      </button>
      <button type="button" onClick={nextPage}>
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
