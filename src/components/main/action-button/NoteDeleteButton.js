import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

function NoteDeleteButton({ id, onDeleteNoteHandler }) {
  const onClickEventHandler = (e) => {
    e.preventDefault();
    onDeleteNoteHandler(id);
  };

  return (
    <button id="delete_action" className="text-6xl " type="button" title="Hapus" onClick={onClickEventHandler}>
      <MdDelete className="text-6xl border-4 border-neutral-900 rounded-full p-1" />
    </button>
  );
}

NoteDeleteButton.propTypes = {
  id: PropTypes.string,
  onDeleteNoteHandler: PropTypes.func,
};

export default NoteDeleteButton;
