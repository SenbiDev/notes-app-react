import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';

function SubmitButton({ onAddNoteHandler }) {
  const onClickEventHandler = (e) => {
    e.preventDefault();
    onAddNoteHandler();
  };

  return (
    <button id="create_action" type="button" title="Simpan" onClick={onClickEventHandler}>
      <MdCheck className="text-6xl border-4 border-neutral-900 rounded-full p-1" />
    </button>
  );
}

SubmitButton.propTypes = {
  onAddNoteHandler: PropTypes.func,
};

export default SubmitButton;
