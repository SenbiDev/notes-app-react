import React from 'react';
import PropTypes from 'prop-types';

function NotesList({ childComponent }) {
  return (
    <section id="notes-list" className="sm:grid sm:grid-cols-2 lg:grid-cols-4 w-11/12 m-auto mb-10">
      {childComponent}
    </section>
  );
}

NotesList.propTypes = {
  childComponent: PropTypes.array.isRequired,
};

export default NotesList;
