import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

function NoteCreateButton() {
  return (
    <div className="homepage__action">
      <button id="action" className="fixed right-4 bottom-10" type="button" title="Tambah">
        <Link to="/notes/new">
          <MdAdd className="text-6xl border-4 border-neutral-900 rounded-full p-1" />
        </Link>
      </button>
    </div>
  );
}

export default NoteCreateButton;
